import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVoyageComponent } from './add-voyage/add-voyage.component';
import { ListeVoyageComponent } from './liste-voyage/liste-voyage.component';

// import for the service
import { HttpClientModule } from '@angular/common/http';

// import for the Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatailVoyageComponent } from './datail-voyage/datail-voyage.component';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVoyageComponent,
    ListeVoyageComponent,
    DatailVoyageComponent,
    ErrorsComponent
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
