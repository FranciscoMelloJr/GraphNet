import { Cliente } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  clientesURL = 'http://localhost:8080/clientes';

  constructor(
    private http: HttpClient
  ) { }


  adicionar(cliente: Cliente): Promise<any>{
    return this.http.post(this.clientesURL, cliente)
    .toPromise();
  }

}