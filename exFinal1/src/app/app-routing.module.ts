import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDonationComponent } from './add-donation/add-donation.component';
import { DonorsComponent } from './donors/donors.component';
import { DonorDetailsComponent } from './donor-details/donor-details.component';

const routes: Routes = [
  {path:'',             component: AddDonationComponent},
  {path:'add',          component:AddDonationComponent},
  {path:'donors',       component:DonorsComponent},
  {path:'details/:id',       component:DonorDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
