import { Component, OnInit } from '@angular/core';

// models
import { Pet } from '../models/pet';
import { Owner } from '../models/owner';

// service
import { PetService } from '../services/pet.service';

import {FormBuilder, FormGroup, MinLengthValidator, Validators} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit{

  petForm: FormGroup = new FormGroup({});

  pet!:       Pet;
  owner!:     Owner;

  ngOnInit(): void{
    this.petForm = this.formBuilder.group({
      namePet:          ['', Validators.required],
      // phone doit avoir 8 chiffre 
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      vaccinationDate:    ['', Validators.required],
      // name Owner commance par une lettre majuscule.
      nameOwner: [
        '', 
        [
          Validators.required, 
          Validators.pattern('^[A-Z].*')
        ]
      ],
    });
  }

  constructor(
    private formBuilder:      FormBuilder,
    private petService: PetService,
    private router: Router
  ){}

  onSubmit(){
    if(this.petForm.valid) {
      // Extract form values
      const formValues = this.petForm.value;

      // Assign values to owner
      this.owner = {
        id: this.getRandomInt(100).toString(), // Set a default or generate an id
        name: formValues.nameOwner,
        phone: formValues.phone
      };

      // Assign values to pet
      this.pet = {
        id: this.getRandomInt(500).toString(), // Set a default or generate an id
        name: formValues.namePet,
        vaccinationDate: formValues.vaccinationDate,
        vaccinated: false, // Default value, adjust as necessary
        owner: this.owner
      };

      this.petService.addOwner(this.owner).subscribe({

      });
      this.petService.addPet(this.pet).subscribe(data =>{
          console.log("data // ", data);
          this.router.navigate(['/pets']);
      });
    }

  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

}
