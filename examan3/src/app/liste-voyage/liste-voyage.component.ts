import { Component, OnInit } from '@angular/core';

import { Voyage } from '../models/voyage';

import { VoyageService } from '../services/voyage.service';

@Component({
  selector: 'app-liste-voyage',
  templateUrl: './liste-voyage.component.html',
  styleUrls: ['./liste-voyage.component.css']
})
export class ListeVoyageComponent implements OnInit{

  constructor(
    private voyageService: VoyageService
  ){}

  voyages: Voyage[] = [];

  ngOnInit(): void {

    this.voyageService.getAllVoyages().subscribe(data => {
      this.voyages = data;
    });

  }

}
