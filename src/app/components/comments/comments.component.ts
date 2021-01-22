import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {CommentType} from '../../../models/CommentType';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: CommentType[];

  chosenComment: CommentType;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments().subscribe(value => this.comments = value);
  }

  getBubble(comment: CommentType): void{
    this.chosenComment =  comment;

  }
}
