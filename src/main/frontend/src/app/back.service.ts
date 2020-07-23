import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private httpClient: HttpClient) { }

  getJow() {
    return this.httpClient.get<any>('http://localhost:8080/rest/jow');
  }

  getJow2() {
    return this.httpClient.get<any>('http://localhost:8080/rest/json');
  }

}
