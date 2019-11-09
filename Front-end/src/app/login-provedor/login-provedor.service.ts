import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginProvedorService {
  
  provedoresURL = 'http://localhost:8080/provedores';
  provedoresURLFiltro = 'http://localhost:8080/provedores';

  constructor( private http: HttpClient) { }

  pesquisar(cnpj: any):Promise<any>{
    if (cnpj){
      this.provedoresURLFiltro = this.provedoresURL + '/filtroCnpj?cnpj=' + cnpj;
    } else {
      this.provedoresURLFiltro = this.provedoresURL;
    }

    return this.http.get<any>(this.provedoresURLFiltro).toPromise();
  }







}
