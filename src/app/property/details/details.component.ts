import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from '../../images.service';
import {PropertiesService} from '../../services/properties.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private propertyService: PropertiesService,
    private http: HttpClient,
  ) { }

  propertyId: string;
  images: any;
  imagesUrl: string;


  ngOnInit() {
    this.getPropertyId();
    this.getPropertyImages();
  }


  getPropertyImages() {
    this.propertyService.getPropertyPhotos(this.propertyId)
    .subscribe(data => {
      console.log(data);
      this.images = data;
      this.imagesUrl = this.images.data;
      console.log(this.imagesUrl);

    },
    (err) => {

    },
    () => {

    });
  }

  getPropertyId() {
    this.propertyId = this.activeRoute.snapshot.paramMap.get('id');
  }

}

