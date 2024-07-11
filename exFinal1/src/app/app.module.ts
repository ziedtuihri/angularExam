import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import for the service
import { HttpClientModule } from '@angular/common/http';

// import for the Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonationComponent } from './models/donation/donation.component';
import { AddDonationComponent } from './add-donation/add-donation.component';
import { DonorsComponent } from './donors/donors.component';
import { DonorDetailsComponent } from './donor-details/donor-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DonationComponent,
    AddDonationComponent,
    DonorsComponent,
    DonorDetailsComponent
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
