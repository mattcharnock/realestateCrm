import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private imageService: ImagesService,
    private http: HttpClient,
  ) { }

  selectedFile = null;
  propertyId: string;
  pictureData: any;
  pictureURL: any;
  pictureReturned: any;

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    // console.log(this.selectedFile);
  }

  onUpload() {

    this.uploadImages();


  }


  uploadImages() {
    const fd = new FormData();
    fd.append('', this.selectedFile, this.selectedFile.name);
    this.http.post(`http://localhost:3000/property/uploadphotos/${this.propertyId}`, fd, {withCredentials: true} )
    .subscribe(data => {
      console.log(data);
    },
    (err) => {

    },
    () => {
      location.reload();
    });

  }

  getPropertyId() {
    this.propertyId = this.activeRoute.snapshot.paramMap.get('id');
   // console.log(this.propertyId);


  }

  ngOnInit() {
    this.getPropertyId();
  }

}
