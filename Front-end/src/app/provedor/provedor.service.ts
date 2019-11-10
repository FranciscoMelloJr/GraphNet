import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitacao, Caixa } from './model';

@Injectable({
  providedIn: 'root'
})
export class ProvedorService {

  provedoresURL = 'http://localhost:8080/provedores';

  solicitacoesURL = 'http://localhost:8080/solicitacoes';

  caixasURL = 'http://localhost:8080/caixas';

  constructor(
    private http: HttpClient
    ) { }

  adicionarCaixa(caixa: Caixa): Promise<any>{
    return this.http.post(this.caixasURL, caixa)
    .toPromise();
  }

  listaSolicitacoes(id_provedor: any):Promise<any>{
    return this.http.get<any>(this.provedoresURL + '/' + id_provedor + '/solicitacoes').toPromise();
  }

  listaCaixas():Promise<any>{
    return this.http.get<any>(this.caixasURL).toPromise();
  }

  removeSolicitacao(id: number):Promise<void>{
    return this.http.delete(this.solicitacoesURL + '/' + id)
    .toPromise()
    .then(() => null);
  }

  removeCaixa(id: number):Promise<void>{
    return this.http.delete(this.caixasURL + '/' + id)
    .toPromise()
    .then(() => null);
  }

  alterar(solicitacao: Solicitacao): Promise<any>{
    return this.http.put(this.solicitacoesURL+'/'+solicitacao.id, solicitacao)
    .toPromise();
  }

}
