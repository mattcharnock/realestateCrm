import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
import {Router} from '@angular/router';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

// stores user data
userInfo: any;

cookieValue: any;

// stores user id for calls
id = sessionStorage.getItem('id');



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
    private login: LoginService,
    private cookie: CookieService,
  ) { }

  ngOnInit() {


  }

}
