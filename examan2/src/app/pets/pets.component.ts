import { Component, OnInit } from '@angular/core';

import { Pet } from '../models/pet';

import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit{

  unvaccinatedPets: Pet[] = [];

  ngOnInit(): void {
    this.petService.getAllPets().subscribe(data => {
      this.unvaccinatedPets = data.filter(pet => !pet.vaccinated);
      console.log("Unvaccinated Pets: ", this.unvaccinatedPets);
    });
  }



  constructor(
    private petService: PetService
  ) {}

}
