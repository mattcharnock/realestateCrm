import { Injectable } from '@angular/core';
import { CLIENTS } from '../mock-client';
import { Client } from '../models/client';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  createClient(client): any {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/client/newclient', client, {withCredentials: true});
  }

  getClients() {
    return this.http.get('http://localhost:3000/client/myclients', {withCredentials: true});
  }


  getClient(id: number): Observable<Client> {

    return of(CLIENTS.find(client => client.id === id));

  }

  constructor(private http: HttpClient) { }
}
