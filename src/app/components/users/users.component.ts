import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {users} from '../../../data/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()
  users = users;

  constructor() { }

  ngOnInit(): void {
  }

}
