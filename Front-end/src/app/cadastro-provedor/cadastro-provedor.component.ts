import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../server/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-provedor',
  templateUrl: './cadastro-provedor.component.html',
  styleUrls: ['./cadastro-provedor.component.scss']
})
export class CadastroProvedorComponent implements OnInit {

  constructor(public http: HttpService, private router : Router) {}

  ngOnInit() {
  }

  razaoFormControl = new FormControl('', [
    Validators.required
  ]);

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

  cnpjFormControl = new FormControl('', [
    Validators.required
  ]);

  register() {
    let user = {
      nome: this.nomeFormControl.value,
      razao: this.razaoFormControl.value,
      email: this.emailFormControl.value,
      telefone: this.telefoneFormControl.value,
      cnpj: this.cnpjFormControl.value
    }
    this.http.sendEmail("http://localhost:3000/sendmailprovedor", user).subscribe(
      data => {
        let res:any = data; 
      }
    );
    this.redirectTo('/cadastro-provedor');
  }
  

  redirectTo(uri:string){
    this.router.navigateByUrl('/login', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }

}
