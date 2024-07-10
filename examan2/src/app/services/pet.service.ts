import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// models
import { Pet } from '../models/pet';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  baseUrl: string = 'http://localhost:3000/';

  apiUrlPet: string = this.baseUrl + 'pet/';

  apiUrlOwner: string = this.baseUrl + 'owner/';

  constructor(
    private http: HttpClient
  ) { }

  addPet(pet: Pet): Observable<void>{
    pet.id.toString();
    return this.http.post<void>(this.apiUrlPet, pet);
  }

  addOwner(owner: Owner): Observable<void>{
    return this.http.post<void>(this.apiUrlOwner, owner);
  }

  getAllPets(): Observable<Pet[]>{
    return this.http.get<Pet[]>(this.apiUrlPet);
  }

  getPetById(id: string): Observable<Pet>{
    return this.http.get<Pet>(this.apiUrlPet + id);
  }

  updatePet(id: string, pet: Pet): Observable<void> {
      return this.http.put<void>(this.apiUrlPet + id, pet);
  }

}

