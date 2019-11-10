import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  // registers users
  registerUser(user): any {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers});
}


  // gets user id
  getUserId(id: string): any {
    return this.http.get('http://localhost:3000/users/100' + id, {withCredentials: true});
  }
}
