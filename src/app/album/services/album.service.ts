import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album} from '../../../models/Album';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor( private httpClient: HttpClient) { }

  getAlbums(): Observable<Album[]>{
   return this.httpClient.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }
}
