import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor( private httpClient: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>('http://92.253.239.109/cars');
  }

  postCar(car: Car): Observable<any>{
   const body = {id: car.id, brand: car.brand, model: car.model, year: car.year};
   return this.httpClient.post('http://92.253.239.109/cars', body);
  }
}
