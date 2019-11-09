import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  autenticado: boolean = false;

  constructor(
    private router: Router
  ) { }

  fazerLogin(autenticado: boolean){
    this.autenticado = autenticado;
    this.router.navigate(['/provedor'])
  }

}
