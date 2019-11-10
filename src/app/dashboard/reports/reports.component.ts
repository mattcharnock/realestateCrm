import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(
    private clientService: ClientService,
  ) { }

  clientLength: number;
  clients: any;

  ngOnInit() {

    this.getClients();


  }

  getClients() {
    this.clientService.getClients()
    .subscribe(data => {
      this.clients = data;
      this.clientLength = this.clients.length;
    } );
  }

}
