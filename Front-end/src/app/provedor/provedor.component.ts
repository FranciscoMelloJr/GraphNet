
import { FormControl, Validators, Form, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent, AgmMarker } from '@agm/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvedorService } from './provedor.service';
import { Pendente, Caixa, Linha, Cliente, Solicitacao, Provedor } from './model';


@Component({
  selector: 'app-provedor',
  templateUrl: './provedor.component.html',
  styleUrls: ['./provedor.component.scss']
})
export class ProvedorComponent implements OnInit {

  latitude: number;
  longitude: number;
  zoom: number;
  
  latitudeCli: number;
  longitudeCli: number;
  zoomCli: number;

  address: string;

  vinculosAtuais = [];
  vinculosDisponiveis = [];

  visivelCaixa : boolean = false;
  visivelCliente : boolean = false;

  id_provedor = JSON.parse(localStorage.getItem('provedor'));

  selecionado : number;

  solicitacoes : Solicitacao [] = [];
  linhas : Linha [] = [];
  linhasCaixas : Linha [] = [];
  clientes: Pendente [] = [];

  pendentesVerde: Pendente [] = [];
  pendentesLaranja: Pendente [] = [];
  pendentesVermelho: Pendente [] = [];

  data : Date = new Date();

  caixas: Caixa [] = [];
  caixasAFilrar: Caixa [] = [];
  caixaA: Caixa;
  caixaB: Caixa;
  caixaFinal: Caixa;
  caixaADesvincular: Caixa;
  caixaVincular : Caixa;
  pode : boolean;

  // Variáveis para adicionar um cliente pendente a uma caixa
  caixaSelecionada: number;
  solicitacaoEnviar: Solicitacao = new Solicitacao();
  solicitacaoDesvincular: Solicitacao = new Solicitacao();
  idCli: number;
  nomeCli: string;
  cpfCli: string;
  telefoneCli: string;
  emailCli: string;

  
  // Variáveis para adicionar um cliente
  clienteEnviar : Cliente = new Cliente();
  solicitacaoNova : Solicitacao = new Solicitacao();
  cIdCli: number;
  cNomeCli: string;
  cCpfCli: string;
  cTelefoneCli: string;
  cEmailCli: string;
  cCepCli: string;

  // Variáveis para adicionar uma caixa
  caixaAdicionar : Caixa = new Caixa();
  nomeCaixa : string;

  private addCli(){
    for (let s of this.solicitacoes){
      if (s.cliente.id == this.idCli){
        this.solicitacaoEnviar.id = s.id;
        this.solicitacaoEnviar.cliente = s.cliente;
        this.solicitacaoEnviar.data = s.data;
        this.solicitacaoEnviar.provedor = s.provedor;
        this.solicitacaoEnviar.addCaixa = this.caixaSelecionada;
        this.solicitacaoEnviar.status = "";
        
        this.service.alterar(this.solicitacaoEnviar).then(() => {
          this.redirectTo('/provedor');
        });
        
      }
    }
  }

  private desvincular(id : number){
    for (let s of this.solicitacoes) {
      if (s.cliente.id == id){
        this.solicitacaoDesvincular.id = s.id;
        this.solicitacaoDesvincular.cliente = s.cliente;
        this.solicitacaoDesvincular.data = s.data;
        this.solicitacaoDesvincular.provedor = s.provedor;
        this.solicitacaoDesvincular.addCaixa = 0;
        this.solicitacaoDesvincular.status = "Pendente";

        this.service.alterar(this.solicitacaoDesvincular).then(() => {
        this.redirectTo('/provedor');
        });

      }
    }
  }

  
  private removeSolicitacao(id : number){
    this.service.removeSolicitacao(id).then(() => 
    this.redirectTo('/provedor'));
  }

  private removeCaixa(id: number){
    this.service.removeCaixa(id).then(()=>
    this.redirectTo('/provedor'));
  }
  redirectTo(uri:string){
    this.router.navigateByUrl('/login', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

  private mostraAddCli(p: Pendente){
    this.idCli = p.id;
    this.nomeCli = p.nome;
    this.cpfCli = p.cpf;
    this.telefoneCli = p.cpf;
    this.emailCli = p.email;

    const mCli: HTMLElement = document.getElementById('addCli');
    mCli.style.display = 'block';
    const mCaixa: HTMLElement = document.getElementById('addCaixa');
    mCaixa.style.display = 'none';
    const cCli: HTMLElement = document.getElementById('cadCli');
    cCli.style.display = 'none';
    const vinculos: HTMLElement = document.getElementById('vinculos');
    vinculos.style.display = 'none';
  } 

  private mostraVinculos(c : Caixa){
    const cCli: HTMLElement = document.getElementById('cadCli');
    cCli.style.display = 'none';
    const mCli: HTMLElement = document.getElementById('addCli');
    mCli.style.display = 'none';
    const mCaixa: HTMLElement = document.getElementById('addCaixa');
    mCaixa.style.display = 'none';
    const vinculos: HTMLElement = document.getElementById('vinculos');
    vinculos.style.display = 'block';

    this.vinculosAtuais = [];

    for (let va of c.vinculos){
      this.service.procuraCaixa(va).then((dados) => {
        this.caixaVincular = dados;
        console.log(this.caixaVincular);
        this.vinculosAtuais.push(this.caixaVincular);
      });
    }

    this.vinculosDisponiveis = [];
    this.caixaA = c;
    console.log(this.vinculosAtuais)
    this.pode = false;

    for (let check of this.caixas){
      if (this.caixaA.id != check.id ){
        this.vinculosDisponiveis.push(check);
      }
    }


  } 

  private vincular(){
    this.caixaB = this.caixaFinal;
    this.service.adicionarVinculo(this.caixaA, this.caixaB);
    this.service.adicionarVinculo(this.caixaB, this.caixaA).then(() =>
    this.redirectTo('/provedor'));
  }

  private desvincularCaixa(){
    this.caixaB = this.caixaADesvincular;
    this.service.removerVinculo(this.caixaA, this.caixaB);
    this.service.removerVinculo(this.caixaB, this.caixaA).then(() =>
    this.redirectTo('/provedor'));
  }

  private mostraCadCli(){
    const cCli: HTMLElement = document.getElementById('cadCli');
    cCli.style.display = 'block';
    const mCli: HTMLElement = document.getElementById('addCli');
    mCli.style.display = 'none';
    const mCaixa: HTMLElement = document.getElementById('addCaixa');
    mCaixa.style.display = 'none';
    const vinculos: HTMLElement = document.getElementById('vinculos');
    vinculos.style.display = 'none';

    this.visivelCliente = true;
  } 

  private mostraAddCaixa(){
    const mCaixa: HTMLElement = document.getElementById('addCaixa');
    mCaixa.style.display = 'block';
    const mCli: HTMLElement = document.getElementById('addCli');
    mCli.style.display = 'none';
    const cCli: HTMLElement = document.getElementById('cadCli');
    cCli.style.display = 'none';
    const vinculos: HTMLElement = document.getElementById('vinculos');
    vinculos.style.display = 'none';

    this.visivelCaixa = true;
  }

  private addCaixa() {
    this.caixaAdicionar.provedor = new Provedor();
    this.caixaAdicionar.nome = this.nomeCaixa;
    this.caixaAdicionar.latitude = this.latitude;
    this.caixaAdicionar.longitude = this.longitude;
    this.caixaAdicionar.provedor.id = this.id_provedor;
    this.service.adicionarCaixa(this.caixaAdicionar).then(() =>
    this.redirectTo('/provedor'));
  }

  private cadCli(){
    this.clienteEnviar.nome = this.cNomeCli;
    this.clienteEnviar.cpf = this.cCpfCli;
    this.clienteEnviar.cep = this.cCepCli;
    this.clienteEnviar.email = this.cEmailCli;
    this.clienteEnviar.telefone = this.cTelefoneCli;
    this.clienteEnviar.latitude = this.latitudeCli;
    this.clienteEnviar.longitude = this.longitudeCli;


    this.service.adicionarCliente(this.clienteEnviar).then(() =>
    {
      this.solicitacaoNova.cliente = this.clienteEnviar;
      this.solicitacaoNova.provedor = new Provedor();
      this.solicitacaoNova.provedor.id = this.id_provedor;
      this.solicitacaoNova.status = "Pendente";
      this.solicitacaoNova.data = this.data;
      this.service.adicionarSolicitacao(this.solicitacaoNova).then(() => {
        this.redirectTo('/provedor')
      })
    });
  }


  iconCaixa = {
    url: 'https://i.imgur.com/SBOWnk4.png',
    scaledSize: {
      width: 40,
      height: 40
    }
  }
  
  iconVerde = {
    url: 'https://i.imgur.com/UkiFFaS.png',
    scaledSize: {
      width: 40,
      height: 40
    }
  }
  iconLaranja = {
    url: 'https://i.imgur.com/E92nLs2.png',
    scaledSize: {
      width: 40,
      height: 40
    }
  }
  iconVermelho = {
    url: 'https://i.imgur.com/7ac7UKA.png',
    scaledSize: {
      width: 40,
      height: 40
    }
  }

  iconCliente = {
    url: 'https://i.imgur.com/k9Ev7p2.png',
    scaledSize: {
      width: 40,
      height: 40
    }
  }

  private geoCoder;

  
  @ViewChild('search', {static: false})
  public searchElementRef: ElementRef;

  @ViewChild('searchCli', {static: false})
  public searchCliElementRef: ElementRef;

  constructor(
    private service: ProvedorService,
    private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
    ) { }

  ngOnInit() {

      this.service.listaSolicitacoes(this.id_provedor).then((dados) => this.solicitacoes = dados).then(() => 
      {
        for (let s of this.solicitacoes){
          if (s.status == 'Pendente'){
          let newDate = new Date(s.data);
            if (this.data.getDate() - newDate.getTime() < this.data.getDate() - 60){
              this.pendentesVerde.push({
                id : s.cliente.id,
                nome : s.cliente.nome,
                latitude : Number(s.cliente.latitude),
                longitude : Number(s.cliente.longitude),
                cpf : s.cliente.cpf,
                telefone: s.cliente.telefone,
                email: s.cliente.email,
                data: s.data
              }
              );
            } else if (this.data.getDate() - s.data.getDate() < this.data.getDate() - 180) {
              this.pendentesLaranja.push({
                id : s.cliente.id,
                nome : s.cliente.nome,
                latitude : Number(s.cliente.latitude),
                longitude : Number(s.cliente.longitude),
                cpf : s.cliente.cpf,
                telefone: s.cliente.telefone,
                email: s.cliente.email,
                data: s.data
              }
              );
            } else {
              this.pendentesVermelho.push({
                id : s.cliente.id,
                nome : s.cliente.nome,
                latitude : Number(s.cliente.latitude),
                longitude : Number(s.cliente.longitude),
                cpf : s.cliente.cpf,
                telefone: s.cliente.telefone,
                email: s.cliente.email,
                data: s.data
              }
              );
            }
          } else {
            this.clientes.push({
              id : s.cliente.id,
              nome : s.cliente.nome,
              latitude : Number(s.cliente.latitude),
              longitude : Number(s.cliente.longitude),
              cpf : s.cliente.cpf,
              telefone: s.cliente.telefone,
              email: s.cliente.email,
              data: s.data
            }
            );
          }
        }
    
      }).then(() => 
      {
        this.service.listaCaixas().then((dados) => this.caixasAFilrar = dados).then(() => 
        {
          for (let c of this.caixasAFilrar){
            if (c.provedor.id == this.id_provedor){
              this.caixas.push({
                id : c.id,
                nome : c.nome,
                latitude : c.latitude,
                longitude : c.longitude,
                provedor : c.provedor,
                vinculos : c.vinculos,
                solicitacoes : c.solicitacoes
              })
            }
          }
        }).then(() => console.log(this.caixas)).then(() => {
          for (let c of this.caixas) {
            for (let soli of c.solicitacoes){
              this.linhas.push({
                inicioLat : Number(c.latitude),
                inicioLng : Number(c.longitude),
                fimLat : Number(soli.cliente.latitude),
                fimLng : Number(soli.cliente.longitude)
              })
            }
          }
          for (let c of this.caixas){
            if (!(c.vinculos == null)){
              for (let v of c.vinculos){
                this.service.procuraCaixa(v).then((dados) => {
                  this.caixaVincular = dados;;
                  this.linhasCaixas.push({
                    inicioLat : Number(c.latitude),
                    inicioLng : Number(c.longitude),
                    fimLat : Number(this.caixaVincular.latitude),
                    fimLng : Number(this.caixaVincular.longitude)
                  })
                });
              }
            }
          }
        }).then(() => console.log(this.linhas));
      });




      // Google Maps API
      this.mapsAPILoader.load().then(() => {
      this.setLocalizacao();
      this.geoCoder = new google.maps.Geocoder;
 
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });

      let autocompleteCli = new google.maps.places.Autocomplete(this.searchCliElementRef.nativeElement, {
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
          this.zoom = 15;
        });
      });
      autocompleteCli.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // Resultado do Place
          let place: google.maps.places.PlaceResult = autocompleteCli.getPlace();
 
          // Verifica Resultado
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
 
          // Setando Latitude, Longitude e o Zoom
          this.latitudeCli = place.geometry.location.lat();
          this.longitudeCli = place.geometry.location.lng();
          this.zoomCli = 15;
        });
      });

    });
  }

  private setLocalizacao() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitudeCli = $event.coords.lat;
    this.longitudeCli = $event.coords.lng;
    this.latitude = this.latitudeCli;
    this.longitude = this.longitudeCli;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 15;
          this.address = results[0].formatted_address;
        } else {
          window.alert('Nenhum resultado encontrado.');
        }
      } else {
        window.alert('Geocoder falhou devido a: ' + status);
      }
 
    });
  }


}
