import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../../../../models/Album';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input()
  album: Album;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  showUser(): void {
    this.router.navigate([this.album.id], {relativeTo: this.activatedRoute, state: this.album});
  }
}
