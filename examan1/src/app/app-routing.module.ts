import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertiesComponent } from './properties/properties.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

const routes: Routes = [
  {path: "listP",         component: PropertiesComponent},
  {path: "reserve/:id",   component: ReservationFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
