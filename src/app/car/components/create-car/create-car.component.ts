import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Car} from '../../models/Car';
import {CarService} from '../../services/car.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  brand = new FormControl('', Validators.required);
  model = new FormControl('', Validators.required);
  year = new FormControl(+'', [Validators.required, Validators.max(2021), Validators.min(1886)]);

  createForm = new FormGroup({
      brand: this.brand,
      model: this.model,
      year: this.year
    }
  );

  constructor(private carService: CarService, private  router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  createCar(createForm: FormGroup): void {
    console.log(createForm);
    const car = new Car(
      0,
      createForm.controls.brand?.value,
      createForm.controls.model?.value,
      createForm.controls.year?.value
    );

    this.carService.postCar(car).subscribe(value => {
        console.log(value);
        this.router.navigate(['cars']);
      }
    );

    console.log(car);
  }

}
