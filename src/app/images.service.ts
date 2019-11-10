import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(
    private http: HttpClient,
  ) { }


  uploadPhoto(id, photo) {

  return this.http.post(`http://localhost:3000/property/uploadphotos/${id}`, photo);

  }
}
