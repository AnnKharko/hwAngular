import { Component, OnInit } from '@angular/core';
import {Car} from '../../models/Car';
import {CarService} from '../../services/car.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];
  constructor(private carService: CarService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(value => this.cars = value);
  }

  create(): void {
    this.router.navigate(['create'], {relativeTo: this.activatedRoute});
  }


}
