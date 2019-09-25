import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ClientService } from '../../client.service';
import { Client } from '../../client';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

client: Client;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location,
  ) { }

  ngOnInit() {

    this.getClient();
    console.log(this.client);
  }

  getClient(): void {
    const id = +this.route.snapshot.paramMap.get('id')

    this.clientService.getClient(id)
    .subscribe(data => this.client = data);
  }

}
