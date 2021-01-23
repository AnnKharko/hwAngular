import {Component, Input, OnInit} from '@angular/core';
import {Address} from '../../../models/Address';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input()
  id: number;

  @Input()
  address: Address;

  // constructor(private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.params.subscribe(value => console.log(value));
  // }
  constructor() {
  }

  ngOnInit(): void {
  }

}
