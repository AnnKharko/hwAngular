import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  id: number;

  @Input()
  post: Post;
  constructor() {}

  ngOnInit(): void {
  }

}
