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


  addVoyage(voyage: Voyage): Observable<void>{
    return this.http.post<void>(this.baseUrl, voyage);
  }

}
