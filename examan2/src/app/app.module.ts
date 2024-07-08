import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { PetsComponent } from './pets/pets.component';
import { NotFoundComponent } from './not-found/not-found.component';

// import for the service
import { HttpClientModule } from '@angular/common/http';

// import for the Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetDetailsComponent } from './pet-details/pet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddPetComponent,
    PetsComponent,
    NotFoundComponent,
    PetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
