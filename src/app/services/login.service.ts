import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: any;
  errors;

  constructor(
    private http: HttpClient,
    private router: Router,
    ) { }


  // logs a user in
  loginUser(user): any {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/login', user, {withCredentials: true})
    .subscribe(data => {
      this.user = data;
      console.log(this.user.firstName);
    },
    error => {
      this.errors = error;
    },

    // stored user id in a session for refernce
    () => {
      localStorage.setItem('key', this.user.firstName);
      localStorage.setItem('id', this.user._id);
      this.router.navigateByUrl('/dashboard');
      setTimeout(() => {
      this.logoutUser();
      }, 60000);

    }
  );
  }

  // logs a user out
  logoutUser(): any {
    return this.http.get('http://localhost:3000/users/logout', {withCredentials: true})
    .subscribe(data => {
      console.log(data);
      localStorage.removeItem('key');
      localStorage.removeItem('id');
  }
  );
}
  // checking if i was authorized
  checkLogin(): any {
    return this.http.get('http://localhost:3000/home', {withCredentials: true});
  }

  getAllCompanyUsers(): any {
    return this.http.get('http://localhost:3000/users/allusers', {withCredentials: true});
  }

loggedIn() {
return !!localStorage.getItem('key');
}
 /* checkLogin1(): any {
    this.http.get('http://localhost:3000/users/login', {withCredentials: true})
    .subscribe(() => {
      this.loggedIn.next(false);
      console.log(this.loggedIn);
    });
  }*/

}
