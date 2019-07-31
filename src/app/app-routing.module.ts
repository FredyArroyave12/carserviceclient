import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { addOwnerComponent } from './add-owner/add-owner.component';
import { PropietariosListComponent } from './owner-list/owner-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  },
  {
    path: 'add-pro',
    component : AddPropietarioComponent
  },
  {
    path: 'pro-edit/:dni',
    component : AddPropietarioComponent
  },
  {
    path : 'propietarios-list',
    component : PropietariosListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
