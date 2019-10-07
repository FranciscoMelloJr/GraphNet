import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-provedor',
  templateUrl: './cadastro-provedor.component.html',
  styleUrls: ['./cadastro-provedor.component.scss']
})
export class CadastroProvedorComponent implements OnInit {

  constructor() { }

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

}
