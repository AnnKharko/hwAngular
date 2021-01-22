import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommentType} from '../../models/CommentType';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private httpClient: HttpClient) { }

  getComments(): Observable<CommentType[]> {
   return this.httpClient.get<CommentType[]>(this.url);
  }

  // getCommentById(id): Observable<CommentType> {
  //   return this.httpClient.get<CommentType>(this.url + '/' + id);
  // }
}

