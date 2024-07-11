import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonationService } from '../services/donation.service';
import { Donation } from '../models/donation';

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.css']
})
export class DonorDetailsComponent implements OnInit {
  donors: Donation[] = [];
  donorDonations: Donation[] = [];
  totalAmount: number = 0;
  donorId!: number;

  constructor(
    private donationService: DonationService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.donorId = +this.route.snapshot.paramMap.get('id')!;
    
    this.donationService.getAllDonation().subscribe(data => {
        this.donors = data;
        this.filterDonorDonations();
        this.calculateTotalAmount();
    });
  }

  filterDonorDonations(): void {
    this.donorDonations = this.donors.filter(donation => donation.Donor.id === this.donorId);
  }

  calculateTotalAmount(): void {
    this.totalAmount = this.donorDonations.reduce((sum, donation) => sum + Number(donation.amount), 0);
  }
}
