import {Component, Input, OnInit, Output} from '@angular/core';
import {CommentType} from '../../../models/CommentType';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: CommentType;

  @Output()
  bubbleUp = new EventEmitter<CommentType>();

  constructor() { }

  ngOnInit(): void {
  }

  getCommentMore(comment): void {
    this.bubbleUp.emit(comment);
  }
}
