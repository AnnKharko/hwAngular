import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlbumsComponent} from './components/albums/albums.component';
import {FullInfoComponent} from './components/full-info/full-info.component';

const routes: Routes = [
  { path: '', component: AlbumsComponent, children: [
      { path: ':album.id', component: FullInfoComponent}
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
