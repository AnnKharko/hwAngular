import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/album/album.component';
import {HttpClientModule} from '@angular/common/http';
import {AlbumService} from './services/album.service';
import { FullInfoComponent } from './components/full-info/full-info.component';


@NgModule({
  declarations: [AlbumsComponent, AlbumComponent, FullInfoComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    HttpClientModule
  ],
  providers: [AlbumService],
  exports: [HttpClientModule]
})
export class AlbumModule { }
