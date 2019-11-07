import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Provedor } from './model';

@Component({
  selector: 'app-login-provedor',
  templateUrl: './login-provedor.component.html',
  styleUrls: ['./login-provedor.component.scss']
})
export class LoginProvedorComponent implements OnInit {

  
  provedor: Provedor = new Provedor();

  constructor() { }

  ngOnInit() {

  }

  fazerLogin(){
  }

}
