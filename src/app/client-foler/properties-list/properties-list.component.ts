import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../../services/properties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-properties-list',
  templateUrl: './properties-list.component.html',
  styleUrls: ['./properties-list.component.css']
})
export class PropertiesListComponent implements OnInit {

  constructor(
    private propertyService: PropertiesService,
    private route: Router,
  ) { }

  properties: any;

  ngOnInit() {
    this.getProperties();
  }

  getProperties() {
    this.propertyService.getProperties()
    .subscribe(data => {
      this.properties = data;
      console.log(this.properties);
    });
  }
  propertyDetail(id) {

    this.route.navigateByUrl(`/property/detail/${id}`);

  }

}
