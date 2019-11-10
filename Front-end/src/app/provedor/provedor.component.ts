
import { FormControl, Validators, Form, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvedorService } from './provedor.service';
import { Pendente, Caixa, Linha, Cliente, Solicitacao } from './model';


@Component({
  selector: 'app-provedor',
  templateUrl: './provedor.component.html',
  styleUrls: ['./provedor.component.scss']
})
export class ProvedorComponent implements OnInit {

  latitude: number;
  longitude: number;
  zoom: number;
  
  id_provedor = JSON.parse(localStorage.getItem('provedor'));

  selecionado : number;

  solicitacoes : Solicitacao [] = [];
  linhas : Linha [] = [];
  clientes: Pendente [] = [];

  pendentesVerde: Pendente [] = [];
  pendentesLaranja: Pendente [] = [];
  pendentesVermelho: Pendente [] = [];

  data : Date = new Date();

  caixas: Caixa [] = [];
  caixasAFilrar: Caixa [] = [];

  // Variáveis para adicionar um cliente pendente a uma caixa
  caixaSelecionada: number;
  solicitacaoEnviar: Solicitacao = new Solicitacao();
  solicitacaoDesvincular: Solicitacao = new Solicitacao();
  idCli: number;
  nomeCli: string;
  cpfCli: string;
  telefoneCli: string;
  emailCli: string;

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
    const el: HTMLElement = document.getElementById('addCli');
    this.idCli = p.id;
    this.nomeCli = p.nome;
    this.cpfCli = p.cpf;
    this.telefoneCli = p.cpf;
    this.emailCli = p.email;

    el.style.display = 'block';

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
        }).then(() => console.log(this.linhas));
      });




      // Google Maps API
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
          this.zoom = 15;
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


}
