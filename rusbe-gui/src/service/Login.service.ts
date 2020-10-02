import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public http: HttpClient) { }
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private pathUrl = 'http://localhost:3333/';
  login(credentials): Observable<any>{
    return this.http.get(this.pathUrl + 'login'+'?id='+credentials.id+'&'+'password='+credentials.password, {headers: this.headers});
  }
}