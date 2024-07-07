import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';

// import for the service
import { HttpClientModule } from '@angular/common/http';

// import for the Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReservationFormComponent } from './reservation-form/reservation-form.component';





@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    ReservationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
