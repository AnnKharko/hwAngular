import {Component, Input, OnInit} from '@angular/core';
import {usersWithAddress} from '../../data/data';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  users = usersWithAddress;
//   for (let x of users){
//     address.push(x.address)
// }
  @Input()
  address: any;
  constructor() { }

  ngOnInit(): void {
  }

}
