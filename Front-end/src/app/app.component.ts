import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login-provedor/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  mostrarCadastro = true;
  mostrarLogout = false;
  mostrarQuemSomos = true;
  mostrarAnalises = true;
  title = 'GraphNet';
  
  id_provedor = JSON.parse(localStorage.getItem('provedor'));

  constructor(
    private service: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
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
  }

  private Logout(){
    localStorage.clear();
    this.mostrarCadastro = true;
    this.mostrarLogout = false;
    this.redirectTo('/')
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/login', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

}


