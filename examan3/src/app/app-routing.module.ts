import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeVoyageComponent } from './liste-voyage/liste-voyage.component';
import { AddVoyageComponent } from './add-voyage/add-voyage.component';
import { DatailVoyageComponent } from './datail-voyage/datail-voyage.component';


const routes: Routes = [
  {path:'',             component: ListeVoyageComponent},
  {path:'list',         component:ListeVoyageComponent},
  {path:'addVoyage',    component:AddVoyageComponent},
  {path:'details',      component:DatailVoyageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
