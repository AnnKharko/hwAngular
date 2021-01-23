import {Component, Input, OnInit} from '@angular/core';
import {users} from '../../../../data/users';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chosen-one',
  templateUrl: './chosen-one.component.html',
  styleUrls: ['./chosen-one.component.css']
})
export class ChosenOneComponent implements OnInit {

  @Input()
  id: number;

  @Input()
  users = users;

  // constructor() { }
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => this.id = value.id);
  }

  ngOnInit(): void {
  }

}
