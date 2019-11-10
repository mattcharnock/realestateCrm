import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  firstName: string;
  lastName: string;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  onAddClient() {
    const client = {

      firstName: this.firstName,
      lastName: this.lastName,

    };
    this.clientService.createClient(client).subscribe(data => {
      console.log(data);
    });

  }

}
