import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor( private http: LoginService) { }

  ngOnInit() {

    this.http.logoutUser().subscribe(data => {
      console.log(data);
    });
  }

}
