import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 
@Injectable()
export class MessageService {
  
  http: HttpClient
  constructor(http: HttpClient) {}
 
  sendMessage(body) {
    return this.http.post("http://localhost:3000/sendmail", body);
  }

  sendMessageProvedor(body) {
    return this.http.post("http://localhost:3000/sendmailprovedor", body);
  }
}