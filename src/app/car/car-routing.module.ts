import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsComponent} from './components/cars/cars.component';
import {CreateCarComponent} from './components/create-car/create-car.component';

const routes: Routes = [
  { path : '', component: CarsComponent, children: [
      {path: 'create', component: CreateCarComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
