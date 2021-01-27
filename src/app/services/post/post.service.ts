import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/Post';
import {Observable} from 'rxjs';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   posts: Post[];

    url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }


  getPosts(): Observable<Post[]> {
    return  this.httpClient.get<Post[]>(this.url);
  }
  getPostByUserId(id): Post[] {
   this.httpClient.get<Post[]>(this.url).subscribe(value => this.posts = value);
   return this.posts.filter(el => el.userId === id);
  }
}
