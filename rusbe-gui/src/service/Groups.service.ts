import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GroupsService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private apiURL = 'http://localhost:3000';
}