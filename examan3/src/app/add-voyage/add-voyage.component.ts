import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Voyage } from '../models/voyage';
import { VoyageService } from '../services/voyage.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-add-voyage',
  templateUrl: './add-voyage.component.html',
  styleUrls: ['./add-voyage.component.css']
})
export class AddVoyageComponent implements OnInit{

  voyage!: Voyage;

  

  voyageForm: FormGroup = this.formBuilder.group({});

  ngOnInit(): void {
    this.voyageForm = this.formBuilder.group({
      description:          ['', [Validators.required, Validators.minLength(6)]], // doit avoir au moins 6 caractére 
      depart:               ['', [Validators.required, Validators.pattern('^Vdepart.*')]], // commence par "Vdepart"
      arrive:               ['', Validators.required],
      nb_place:             ['', Validators.required]
    })
  }

  constructor(
    private formBuilder: FormBuilder,
    private voyageService: VoyageService,
    private router: Router
  ){}

  onSubmit() {

    this.voyage = this.voyageForm.value;

    this.voyage.id = this.getRandomInt(500);
    this.voyage.nb_view = 0;

    console.log("data form ", this.voyage);

    this.voyageService.addVoyage(this.voyage).subscribe( data => {
      this.router.navigate(['/list']);
    })
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
