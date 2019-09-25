import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

// stores user data
userInfo: any;

// stores user id for calls
id = sessionStorage.getItem('key');


// getting user data
getClient(): void {

    this.user.getUserId(this.id).subscribe(data => {
      this.userInfo = data;


    }
      );
}

  constructor(
    private route: Router,
    private user: UserServiceService,
  ) { }

  ngOnInit() {

  this.getClient();


  }

}
