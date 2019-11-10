import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {



  constructor(
    private login: LoginService,
    private route: Router,


  ) { }

  ngOnInit() {

    console.log(this.login.loggedIn());

}
}

