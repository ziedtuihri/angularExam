import { Component, OnInit } from '@angular/core';

import { Voyage } from '../models/voyage';

import { VoyageService } from '../services/voyage.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-voyage',
  templateUrl: './liste-voyage.component.html',
  styleUrls: ['./liste-voyage.component.css']
})
export class ListeVoyageComponent implements OnInit{

  constructor(
    private voyageService: VoyageService,
    private router: Router
  ){}

  voyage!: Voyage;

  voyages: Voyage[] = [];

  ngOnInit(): void {

    this.voyageService.getAllVoyages().subscribe(data => {
      this.voyages = data;
    });

  }



  reserve(id: number) {

    this.voyageService.getVoyageById(id).subscribe(data => {
          this.voyage = data;

          this.voyage.nb_place--;

          this.voyageService.updateVoyage(id, this.voyage).subscribe(data => {
            window.location.reload();
          });

    });
  }

  detail(id: number) {
    this.voyageService.getVoyageById(id).subscribe(data => {
      this.voyage = data;

      this.voyage.nb_view++;

      this.voyageService.updateVoyage(id, this.voyage).subscribe(data => {
        this.router.navigate(['/details']);
      });

});
  }

}
