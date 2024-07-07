import { Injectable } from '@angular/core';

// import models
import { Property } from '../models/property';
import { Reservation } from '../models/reservation';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  baseUrl: string = 'http://localhost:3000/';


  private properties: Property[] = [];

  constructor(
    private http: HttpClient
  ) { }

  // CRUD Properties
  apiUrlProperties: string = this.baseUrl + 'properties/';

  getProperties(): Observable<Property[]>{
    return this.http.get<Property[]>(this.apiUrlProperties);
  }

  getPropertiesById(id: number): Observable<Property>{
    return this.http.get<Property>(this.apiUrlProperties + id);
  }

  updateProperties(id: number, updateProperties:  Property): Observable<void> {
    return this.http.put<void>(this.apiUrlProperties +id, updateProperties);
  }

  deleteProperties(id: number): Observable<void>{
    return this.http.delete<void>(this.apiUrlProperties + id);
  }

  // CRUD Reservation
  apiUrlReservation: string = this.baseUrl + 'reservation/'; 
  
  addReservation(reservation: Reservation): Observable<void> {
    reservation.id = Date.now();
    return this.http.post<void>(this.apiUrlReservation, reservation);
  }

  deleteReservation(propertyId: number): Observable<void> {
    // Fetch all reservations
    return this.http.get<Reservation[]>(this.apiUrlReservation).pipe(
      switchMap((reservations: Reservation[]) => {
        // Find the reservation with the matching property ID
        const reservationToDelete = reservations.find(reservation => reservation.property.id === propertyId);
  
        if (reservationToDelete) {
          // Delete the reservation using its reservation ID
          return this.http.delete<void>(`${this.apiUrlReservation}${reservationToDelete.id}`);
        } else {
          // Handle the case where no reservation was found
          throw new Error('Reservation not found for the given property ID');
        }
      })
    );
  }
  

}
