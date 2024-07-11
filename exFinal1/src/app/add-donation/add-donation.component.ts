import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Donation } from '../models/donation';

import { Router } from '@angular/router';

import { DonationService } from '../services/donation.service';


@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.css']
})
export class AddDonationComponent implements OnInit{

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private donationService: DonationService

  ){}

  donor!: any;

  donation!: Donation;

  donationForm: FormGroup = this.formBuilder.group({});

ngOnInit(): void {
  this.donationForm = this.formBuilder.group({
    amount:          ['', [Validators.required, Validators.min(1)]],// est strictement positif
    // phone seulement des chiffre 
    //donationDate:        ['', Validators.required],
    nameDonor:       ['', Validators.required],
    emailDonor:      ['', Validators.required],
    phoneDonor:     ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]]// doit avoir 8 chiffre 
    });
}

  onSubmit(){
    console.log("data : ", this.donationForm.value);

    const formValues = this.donationForm.value;

    // Assign values to owner
    this.donor = {
      id: this.getRandomInt(700),
      name: formValues.nameDonor,
      email: formValues.emailDonor,
      phone: formValues.phoneDonor
    };

    // Assign values to pet
    this.donation = {
      id: this.getRandomInt(500), // Set a default or generate an id
      amount: formValues.amount,
      DonationDate: new Date().toString(),
      Donor: this.donor
    };

    console.log("data donation !! ", this.donation);

    this.donationService.addDonation(this.donation).subscribe(data => {
      this.router.navigate(['/donors']);
    });

  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }


  }
