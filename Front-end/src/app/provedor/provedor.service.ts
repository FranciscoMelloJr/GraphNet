import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvedorService {

  provedoresURL = 'http://localhost:8080/provedores';
  provedoresURLFiltro = 'http://localhost:8080/provedores';

  constructor(
    private http: HttpClient
    ) { }

  listaSolicitacoes(id_provedor: any):Promise<any>{
    return this.http.get<any>(this.provedoresURL + '/' + id_provedor + '/solicitacoes').toPromise();
  }

}
