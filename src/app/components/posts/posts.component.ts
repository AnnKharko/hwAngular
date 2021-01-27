import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 posts: Post[];
 id: number;

 constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.posts = value.postData);
    this.id = history.state.navigationId;
 }

  ngOnInit(): void {
    // console.log(this.posts);

  }

}
