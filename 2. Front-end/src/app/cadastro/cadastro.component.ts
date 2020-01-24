import { Cliente, Provedor, Solicitacao, Notificacao } from './model';
import { FormControl, Validators, Form, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { CadastroService } from './cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../server/http.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  latitude: number;
  longitude: number;
  zoom: number;
  address: string;

  provedor_id: number;
  filtro: string;

  provedores = [];
  clientes = [];


  private geoCoder;

  cliente = new Cliente();

  solicitacao = new Solicitacao();

  notificacao = new Notificacao();

  
  @ViewChild('search', {static: false})
  public searchElementRef: ElementRef;
  

  constructor(
    public http: HttpService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private service: CadastroService,
    private router: Router) {}


  inserir() {
    

  this.cliente.nome = this.nomeFormControl.value;
  this.cliente.email = this.emailFormControl.value;
  this.cliente.telefone = this.telefoneFormControl.value;
  this.cliente.cep = this.cepFormControl.value;
  this.cliente.cpf = this.cpfFormControl.value;
  this.cliente.latitude = this.latitude.toString();
  this.cliente.longitude = this.longitude.toString();
  this.service.adicionarCliente(this.cliente).then(
      () => this.inserirSolicitacao());  
    
  }

  inserirSolicitacao() {
    this.carregaClientes();

    this.solicitacao.status = 'Pendente';
    this.solicitacao.cliente.id = this.clientes.length + 1;
    this.solicitacao.provedor.id = this.provedor_id;

    this.notificacao.provedor.id = this.provedor_id;
    this.notificacao.descricao = 'Um novo cliente foi adicionado!';
    this.notificacao.latitude = this.latitude.toString();
    console.log(this.emailFormControl.value);
    this.notificacao.longitude = this.longitude.toString();
    this.service.adicionarSolicitacao(this.solicitacao).then(() => {
      this.service.adicionarNotificacao(this.notificacao).then(() => {
        let user = {
          nome: this.nomeFormControl.value,
          email: this.emailFormControl.value
        }
        this.http.sendEmail("http://localhost:3000/sendmailcliente", user).subscribe(
          data => {
            let res:any = data; 
          }
        )
        this.redirectTo('/cadastro');
      })
    });
  }

  carregaClientes(){
    this.service.pesquisarClientes()
    .then((dados)=>{
      this.clientes = dados;
    });  
  }
  ngOnInit() {
    this.carregaClientes();
    
    this.filtrar();

    this.mapsAPILoader.load().then(() => {
      this.setLocalizacao();
      this.geoCoder = new google.maps.Geocoder;
 
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // Resultado do Place
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
          // Verifica Resultado
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
 
          // Setando Latitude, Longitude e o Zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  nomeFormControl = new FormControl('', [
    Validators.required
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  telefoneFormControl = new FormControl('', [
    Validators.required
  ]);

  cepFormControl = new FormControl('', [
    Validators.required
  ]);

  cpfFormControl = new FormControl('', [
    Validators.required
  ]);

  descricaoFormControl = new FormControl('', [
    Validators.required
  ]);
 
  

  private setLocalizacao() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }
 
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('Nenhum resultado encontrado.');
        }
      } else {
        window.alert('Geocoder falhou devido a: ' + status);
      }
 
    });
  }
 
  filtrar(){
   
    this.filtro = this.cepFormControl.value;
    this.service.pesquisar(this.filtro)
    .then((dados)=>{
      this.provedores = dados;
    });    
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/login', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }


}
