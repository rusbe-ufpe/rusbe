import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const base_URL = 'http://localhost:3333/menu/';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getDailyMenu(): Observable<any> {
    return this.http.get(base_URL + 'dailymenu', { responseType: 'text' });
  }
}