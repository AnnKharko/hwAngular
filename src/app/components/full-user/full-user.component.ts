import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/User';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  user: User;
  post: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      console.log('asasdas');
      // console.log(this.router.getCurrentNavigation().extras.state.id);
      this.user = this.router.getCurrentNavigation().extras.state as User;
    });
  }

  ngOnInit(): void {
  }

  showPosts(): void {
    this.router.navigate(['posts'], {relativeTo: this.activatedRoute, state: this.post});
  }

}
