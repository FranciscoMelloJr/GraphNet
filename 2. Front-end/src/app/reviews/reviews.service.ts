import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Analise } from './model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(
    private http: HttpClient
    ) { }
  
  provedoresURL = 'http://localhost:8080/provedores';

  analisesURL = 'http://localhost:8080/analises';

  adicionarAnalise(analise: Analise): Promise<any>{
    return this.http.post(this.analisesURL, analise)
    .toPromise();
  }

  pesquisar():Promise<any>{
    return this.http.get<any>(this.provedoresURL).toPromise();
  }

  listaAnalises():Promise<any>{
    return this.http.get<any>(this.analisesURL).toPromise();
  }

  listaSolicitacoes(id_provedor: any):Promise<any>{
    return this.http.get<any>(this.provedoresURL + '/' + id_provedor + '/solicitacoes').toPromise();
  }
}
