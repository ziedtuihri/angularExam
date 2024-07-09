import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { PropertyService } from '../services/property.service';

import {FormBuilder, FormGroup, MinLengthValidator, Validators} from '@angular/forms';

import { Reservation } from '../models/reservation';
import { Property } from '../models/property';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{

  propertyID: string | null = "";

  reservationForm: FormGroup = new FormGroup({});

  property!: Property;

  constructor(
    private formBuilder:      FormBuilder,
    private activatedRoute:   ActivatedRoute,
    private propertyService:  PropertyService,
    private router:           Router
  ){}


  ngOnInit(): void {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      this.propertyID = id;

      this.reservationForm = this.formBuilder.group({
            nom:          ['', [Validators.required, Validators.minLength(5)]],
            // phone seulement des chiffre 
            phone:        ['', Validators.required, Validators.pattern('^[0-9]*$')],
            dateStart:    ['', Validators.required],
            dateEnd:      ['', Validators.required]
      });

      this.propertyService.getPropertiesById(Number(id)).subscribe(data => {
        
        this.property = data;
        console.log("data // ", this.property);
      });
  }


  onSubmit() {

    let reservation: Reservation = this.reservationForm.value;
    this.property.available = false;
    reservation.property = this.property;
    console.log("reservation *** ", reservation);

      this.propertyService.addReservation(reservation).subscribe(data => {
        console.log("result add : ", data);
        this.propertyService.updateProperties(Number(this.propertyID), this.property).subscribe();
        this.router.navigate(['/listP']);
      });

  }

}
