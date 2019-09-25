import { Component, OnInit } from '@angular/core';
import { Client } from '../../client';
import { CLIENTS } from '../../mock-client';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  client: Client[]


  constructor(private clientService: ClientService) { }

  ngOnInit() {

    this.getClients();


  }
  getClients(){
    this.clientService.getClients()
    .subscribe(data => this.client = data);
  }


}
