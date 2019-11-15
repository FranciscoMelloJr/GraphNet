import { Cliente, Solicitacao, Notificacao } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  clientesURL = 'http://localhost:8080/clientes';

  solicitacaoURL = 'http://localhost:8080/solicitacoes';
  
  provedoresURL = 'http://localhost:8080/provedores';
  provedoresURLFiltro = 'http://localhost:8080/provedores';

  notificacoesURL = 'http://localhost:8080/notificacoes';

  constructor(
    private http: HttpClient
  ) { }


  adicionarCliente(cliente: Cliente): Promise<any>{
    return this.http.post(this.clientesURL, cliente)
    .toPromise();
  }

  adicionarNotificacao(notificacao: Notificacao): Promise<any>{
    return this.http.post(this.notificacoesURL, notificacao)
    .toPromise();
  }

  adicionarSolicitacao(solicitacao: Solicitacao): Promise<any>{
    return this.http.post(this.solicitacaoURL, solicitacao)
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

  pesquisarClientes():Promise<any>{
    return this.http.get<any>(this.clientesURL).toPromise();
  }

}