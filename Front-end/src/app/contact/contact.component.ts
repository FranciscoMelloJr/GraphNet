import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {HttpService} from '../contact/http.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);

  categoriaFormControl = new FormControl("", [
    Validators.required
  ]);
  
  descricaoFormControl = new FormControl("", [
    Validators.required
  ]);


  constructor(public http: HttpService) {}

  ngOnInit() {
    console.log(this.http.test);
  }

  register() {
    let user = {
      name: this.nameFormControl.value,
      categoria: this.categoriaFormControl.value,
      email: this.emailFormControl.value,
      descricao: this.descricaoFormControl.value
    }
    this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res:any = data; 
      }
    );
  }
}