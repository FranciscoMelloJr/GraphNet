import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Provedor } from './model';
import { LoginProvedorService } from './login-provedor.service';

@Component({
  selector: 'app-login-provedor',
  templateUrl: './login-provedor.component.html',
  styleUrls: ['./login-provedor.component.scss']
})
export class LoginProvedorComponent implements OnInit {

  
  provedor = new Provedor();

  provedorEncontrado = new Provedor();

  constructor(
    private service: LoginProvedorService
  ) { }

  ngOnInit() {

  }

  fazerLogin(){
    this.provedor.cnpj = this.cnpjFormControl.value;
    this.provedor.senha = this.senhaFormControl.value;

    this.service.pesquisar(this.provedor.cnpj)
    .then((dados)=>{
      this.provedorEncontrado = dados;
    });

    if (this.provedorEncontrado.senha == this.provedor.senha){
      // Só entra aqui se a senha for verificada
      localStorage.setItem('provedor', '' + this.provedorEncontrado.id);

    }
  }

  cnpjFormControl = new FormControl('', [
    Validators.required
  ]);
  
  senhaFormControl = new FormControl('', [
    Validators.required
  ]);

}
