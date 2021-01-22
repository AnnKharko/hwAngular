import {Component, Input, OnInit} from '@angular/core';
import {CommentType} from '../../../models/CommentType';

@Component({
  selector: 'app-chosen-comment',
  templateUrl: './chosen-comment.component.html',
  styleUrls: ['./chosen-comment.component.css']
})
export class ChosenCommentComponent implements OnInit {

  @Input()
  chosenComment: CommentType;
  constructor() { }

  ngOnInit(): void {
  }

}
