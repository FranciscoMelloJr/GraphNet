import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login-provedor/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  mostrarControle = false;
  mostrarCadastro = true;
  mostrarLogout = false;
  mostrarQuemSomos = true;
  mostrarAnalises = true;
  mostrarNotificacao = false;
  title = 'GraphNet';
  
  id_provedor = JSON.parse(localStorage.getItem('provedor'));

  constructor(
    private service: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.service.mostrarControleEmiiter.subscribe(
      mostrar => this.mostrarControle = mostrar
    );
    this.service.mostrarCadastroEmiiter.subscribe(
      mostrar => this.mostrarCadastro = mostrar
    );
    this.service.mostrarLogoutEmiiter.subscribe(
      mostrar => this.mostrarLogout = mostrar
    );
    this.service.mostrarQuemSomosEmiiter.subscribe(
      mostrar => this.mostrarQuemSomos = mostrar
    );
    this.service.mostrarAnalisesEmiiter.subscribe(
      mostrar => this.mostrarAnalises = mostrar
    );
    this.service.mostrarNotificacaoEmiiter.subscribe(
      mostrar => this.mostrarNotificacao = mostrar
    );
  }

  private Logout(){
    localStorage.clear();
    this.mostrarCadastro = true;
    this.mostrarLogout = false;
    this.mostrarAnalises = true;
    this.mostrarQuemSomos = true;
    this.mostrarControle = false;
    this.mostrarNotificacao = false;
    this.redirectTo('/')
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/login', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

}


