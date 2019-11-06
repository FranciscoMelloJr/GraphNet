import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  test = "Teste Server";
  constructor(private http: HttpClient) {}

  httpGet(url) {
    return this.http.get(url);
  }

  httpPost(url, {}) {
    return this.http.post(url, { name: "GraphNet" });
  }

  sendEmail(url, data) {
    return this.http.post(url, data);
  }
}