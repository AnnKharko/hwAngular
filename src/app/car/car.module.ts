import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import {CarService} from './services/car.service';
import {HttpClientModule} from '@angular/common/http';
import { CreateCarComponent } from './components/create-car/create-car.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CarsComponent, CarComponent, CreateCarComponent],
  imports: [
    CommonModule,
    CarRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    CarsComponent
  ],
  providers: [CarService]
})
export class CarModule { }
