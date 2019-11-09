
import { FormControl, Validators, Form, NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvedorService } from './provedor.service';
import { Pendente } from './model';

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

  pendentes : Pendente [] = [];

  
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
        console.log(this.solicitacoes);
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
    
      }).then(() => console.log(this.pendentes));

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
