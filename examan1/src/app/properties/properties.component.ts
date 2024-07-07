import { Component, OnInit } from '@angular/core';

import { Property } from '../models/property';

import { PropertyService } from '../services/property.service';

import { Router } from '@angular/router';

import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit{

  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) {}

  min!: number;
  max!: number;
  
  propertyList: Property[] = [];

  filteredPropertyList: Property[] = [];

ngOnInit(): void {
    this.propertyService.getProperties().subscribe( data => {
      this.propertyList = data;
      this.filteredPropertyList = data;
    });
}

changed() {

  this.filteredPropertyList = this.propertyList.filter(property => {
    return (!this.min || property.price >= this.min) && (!this.max || property.price <= this.max);
  });

}


reservation(id: number) {
    this.router.navigate(['/reserve', id]);
}

delete(id: number) {
      this.propertyService.deleteProperties(id).subscribe(data => {
        console.log("data delete :: ", data);
        this.propertyService.deleteReservation(id).subscribe(data => {
          console.log("data delete reservation !", data);
        })
        this.router.navigate(['/listP']);

      });

      
}

}
