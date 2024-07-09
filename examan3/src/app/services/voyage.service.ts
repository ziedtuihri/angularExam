import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// models
import { Voyage } from '../models/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  constructor(
    private http: HttpClient

  ) { }

  baseUrl: string = 'http://localhost:3000/voyage/';


  getAllVoyages(): Observable<Voyage[]>{
    return this.http.get<Voyage[]>(this.baseUrl);
  }

  getVoyageById(id: number): Observable<Voyage>{
    return this.http.get<Voyage>(this.baseUrl + id);
  }


  updateVoyage(id: number, updateVoyage:  Voyage): Observable<void> {
    return this.http.put<void>(this.baseUrl +id, updateVoyage);
  }


  addVoyage(voyage: Voyage): Observable<void>{
    return this.http.post<void>(this.baseUrl, voyage);
  }

}
