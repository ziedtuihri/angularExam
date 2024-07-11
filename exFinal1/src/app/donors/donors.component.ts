import { Component, OnInit } from '@angular/core';

import { DonationService } from '../services/donation.service';

import { Donation } from '../models/donation';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit{

  constructor(
    private donationService: DonationService
  ){}

  donors: Donation[] = [];

  ngOnInit(): void {
    this.donationService.getAllDonation().subscribe(data => {
        this.donors = data;

        console.log("donors : ",this.donors);
    });
  }
}
