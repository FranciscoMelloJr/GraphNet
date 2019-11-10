import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  autenticado: boolean = false;

  mostrarCadastroEmiiter = new EventEmitter<boolean>();
  mostrarLogoutEmiiter = new EventEmitter<boolean>();
  mostrarQuemSomosEmiiter = new EventEmitter<boolean>();
  mostrarAnalisesEmiiter = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  fazerLogin(autenticado: boolean){
    this.autenticado = autenticado;
    this.mostrarCadastroEmiiter.emit(false);
    this.mostrarLogoutEmiiter.emit(true);
    this.mostrarQuemSomosEmiiter.emit(false);
    this.mostrarAnalisesEmiiter.emit(false);
    this.router.navigate(['/provedor'])
  }

}
