import { Injectable } from '@angular/core';
import { CLIENTS } from '../mock-client';
import { Client } from '../models/client';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  getClients(): Observable<Client[]> {
    return of(CLIENTS);
  }

  getClient(id: number): Observable<Client> {

    return of(CLIENTS.find(client => client.id === id));

  }

  constructor() { }
}
