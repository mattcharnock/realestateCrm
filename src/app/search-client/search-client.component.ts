import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { ListFilterPipePipe } from '../pipes/list-filter-pipe.pipe';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent implements OnInit {

  constructor(
    private client: ClientService
  ) { }

  clients: any;
  dropdown = false;
  search;

  ngOnInit() {
    this.client.getClients()
    .subscribe(data => {
      this.clients = data;
      console.log(this.clients);
    });
  }

  toggleDropdown() {
    this.dropdown = !this.dropdown;
    console.log(this.dropdown);
  }

}
