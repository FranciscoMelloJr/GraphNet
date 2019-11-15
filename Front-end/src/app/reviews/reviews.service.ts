import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(
    private http: HttpClient
    ) { }
  
  provedoresURL = 'http://localhost:8080/provedores';

  pesquisar():Promise<any>{
    return this.http.get<any>(this.provedoresURL).toPromise();
  }
}
