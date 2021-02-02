import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {User} from '../models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hwAngular';


  users: User[] = [];

  user = new User('', +'', '');



  name = new FormControl('', [Validators.required, Validators.minLength(4)]);
  age = new FormControl(+'', [Validators.required, Validators.max(116), Validators.min(16)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  myForm = new FormGroup({
    name: this.name,
    age: this.age,
    email: this.email
  });



  submit(form: NgForm): void {
    console.log(form);
    const user = new User(form.controls.name.value, form.controls.age.value, form.controls.email.value );
    this.users.push(user);
    console.log(this.users);

  }


  saveUser(myForm: FormGroup): void {
    console.log(myForm);
    const user = new User(myForm.controls.name?.value, myForm.controls.age?.value, myForm.controls.email?.value);
    this.users.push(user);
  }


}
