import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeVoyageComponent } from './liste-voyage/liste-voyage.component';
import { AddVoyageComponent } from './add-voyage/add-voyage.component';


const routes: Routes = [
  {path:'list',         component:ListeVoyageComponent},
  {path:'addVoyage',    component:AddVoyageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
