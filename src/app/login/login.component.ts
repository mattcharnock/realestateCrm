import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: '';
  password: '';
  errors: '';
  userId: '';


  // ravigates to dash after success login
  navigateToDash() {
    this.router.navigateByUrl('/dashboard');
 }

  constructor(
    private loginService: LoginService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  // binds propertys of user login info and posts to backend
  onLogin() {

    const user = {

      username: this.userName,
      password: this.password,
    };

    // login service
    this.loginService.loginUser(user);

  }
}

