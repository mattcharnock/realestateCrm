import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../services/user-service.service';
import {Router} from '@angular/router';
import { LoginService } from '../services/login.service';

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

checkShit() {

  if ( (this.id === null && this.id !== undefined) || (this.id === undefined && this.id !== null) ) {

    this.route.navigateByUrl('/login');

  } else {

    this.getClient();

  }

}


// getting user data
getClient(): void {

    this.user.getUserId(this.id).subscribe(data => {
      this.userInfo = data;


    }
      );

    this.login.checkLogin().subscribe(data => {

  }
  );
}

  constructor(
    private route: Router,
    private user: UserServiceService,
    private login: LoginService,
  ) { }

  ngOnInit() {

  // this.checkShit();

  this.getClient();


  }

}
