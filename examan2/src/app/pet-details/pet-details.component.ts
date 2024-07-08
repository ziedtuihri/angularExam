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

ngOnInit(): void {
  
  let id = this.activatedRoute.snapshot.paramMap.get('id');

  if(id){
    this.petService.getPetById(id).subscribe(data => {
        this.pet = data;
    });
  }
}

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private petService: PetService
  ){}

}
