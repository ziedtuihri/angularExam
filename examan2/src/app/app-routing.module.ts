import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetComponent } from './add-pet/add-pet.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [

  {path:'addPet',     component:AddPetComponent},
  {path:'pets',       component:PetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
