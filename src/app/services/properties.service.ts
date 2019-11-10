import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(

    private http: HttpClient,

  ) { }


  getProperties() {
    return this.http.get('http://localhost:3000/property/myproperties', {withCredentials: true});
  }


  getPropertyPhotos(id) {
    return this.http.get(`http://localhost:3000/property/propertyphotos/${id}`, {withCredentials: true});
  }

}
