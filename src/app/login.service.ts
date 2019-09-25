import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }


  // logs a user in
  loginUser(user): any {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/login', user, {headers});
}

// logs a user out
logoutUser(): any {
  return this.http.get('http://localhost:3000/users/logout');


}

// checking if i was authorized
checkLogin(): any {

  return this.http.get('http://localhost:3000/home');
}

}
