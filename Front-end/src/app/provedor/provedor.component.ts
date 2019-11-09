
import { FormControl, Validators, Form, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvedorService } from './provedor.service';
import { Pendente, Caixa } from './model';


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

  solicitacoes = [];

  pendentes: Pendente [] = [];

  caixas: Caixa [] = [];
  caixasAFilrar: Caixa [] = [];

  iconCaixa = {
    url: 'https://i.imgur.com/SBOWnk4.png',
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
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
    ) { }

  ngOnInit() {

      this.service.listaSolicitacoes(this.id_provedor).then((dados) => this.solicitacoes = dados).then(() => 
      {
        for (let s of this.solicitacoes){
          this.pendentes.push({
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
    
      }).then(() => 
      {
        this.service.listaCaixas().then((dados) => this.caixasAFilrar = dados).then(() => 
        {
          for (let c of this.caixasAFilrar){
            if (c.provedor.id == this.id_provedor){
              this.caixas.push({
                nome : c.nome,
                latitude : c.latitude,
                longitude : c.longitude,
                provedor : c.provedor,
                solicitacoes : c.solicitacoes
              })
            }
          }
        }).then(() => console.log(this.caixas));
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
          this.zoom = 5;
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
