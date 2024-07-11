import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetComponent } from './add-pet/add-pet.component';
import { PetsComponent } from './pets/pets.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

  {path:'addPet',         component:AddPetComponent},
  {path:'pets',           component:PetsComponent},
  {path:'petDetails/:id', component:PetDetailsComponent},
  {path:'**',             component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
