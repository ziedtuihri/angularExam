import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Donation } from '../models/donation';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(
    private http: HttpClient

  ) { }

  baseUrl: string = 'http://localhost:3000/donation/';

  getAllDonation(): Observable<Donation[]>{
    return this.http.get<Donation[]>(this.baseUrl);
  }

  addDonation(donation: Donation): Observable<void>{
    return this.http.post<void>(this.baseUrl, donation);
  }

  getPetById(id: number): Observable<Donation>{
    return this.http.get<Donation>(this.baseUrl + id);
  }
}
