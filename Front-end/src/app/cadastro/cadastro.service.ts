import { Cliente } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  clientesURL = 'http://localhost:8080/clientes';

  
  provedoresURL = 'http://localhost:8080/provedores';
  provedoresURLFiltro = 'http://localhost:8080/provedores';

  constructor(
    private http: HttpClient
  ) { }


  adicionar(cliente: Cliente): Promise<any>{
    return this.http.post(this.clientesURL, cliente)
    .toPromise();
  }

  pesquisar(cep: any):Promise<any>{
    if (cep){
      this.provedoresURLFiltro = this.provedoresURL + '/filtroCep?cep=' + cep;
    } else {
      this.provedoresURLFiltro = this.provedoresURL;
    }

    return this.http.get<any>(this.provedoresURLFiltro).toPromise();
  }

}