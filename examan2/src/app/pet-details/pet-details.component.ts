import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { PetService } from '../services/pet.service';

import { Pet } from '../models/pet';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit{

  pet!: Pet;

  idPet!: null | string ;

ngOnInit(): void {
  
  let id = this.activatedRoute.snapshot.paramMap.get('id');

  this.idPet = id;

  if(this.idPet ){
    this.petService.getPetById(this.idPet).subscribe(data => {
        this.pet = data;
    });
  }
}

updateVaccinate(){

  let id = this.activatedRoute.snapshot.paramMap.get('id');

  this.pet.vaccinated = true;
  let d = new Date(Date.now());

  this.pet.vaccinationDate = d.toString();

  if(this.idPet )
  this.petService.updatePet(this.idPet, this.pet).subscribe();

}

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private petService: PetService
  ){}

}
