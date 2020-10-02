import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public http: HttpClient) { }
  private pathUrl = 'http://localhost:3333/';
  login(credentials): Observable<any>{
    return this.http.get(this.pathUrl + 'login'+'?id='+credentials.id+'&'+'password='+credentials.password, httpOptions);
  }
}