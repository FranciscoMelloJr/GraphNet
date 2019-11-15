import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solicitacao, Caixa, Cliente } from './model';

@Injectable({
  providedIn: 'root'
})
export class ProvedorService {

  clientesURL = 'http://localhost:8080/clientes';

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

  adicionarSolicitacao(solicitacao: Solicitacao): Promise<any>{
    return this.http.post(this.solicitacoesURL, solicitacao)
    .toPromise();
  }

  adicionarCliente(cliente: Cliente): Promise<any>{
    return this.http.post(this.clientesURL, cliente)
    .toPromise();
  }

  listaSolicitacoes(id_provedor: any):Promise<any>{
    return this.http.get<any>(this.provedoresURL + '/' + id_provedor + '/solicitacoes').toPromise();
  }

  listaCaixas():Promise<any>{
    return this.http.get<any>(this.caixasURL).toPromise();
  }

  procuraCaixa(id : any):Promise<any>{
    return this.http.get<any>(this.caixasURL + '/' + id).toPromise();
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

  adicionarVinculo(caixaA: Caixa, caixaB: Caixa): Promise<any>{
    return this.http.put(this.caixasURL+'/'+caixaA.id, caixaB)
    .toPromise();
  }

  removerVinculo(caixaA: Caixa, caixaB: Caixa): Promise<any>{
    return this.http.put(this.caixasURL+'/'+caixaA.id + '/desvincular', caixaB)
    .toPromise();
  }
  

}
