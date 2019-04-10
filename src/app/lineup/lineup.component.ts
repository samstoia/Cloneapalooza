import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css'],
  providers: [ApiService]
})
export class LineupComponent implements OnInit {

  artists: Object;

  constructor(private data: ApiService) { }

  ngOnInit() {
    this.data.getArtists().subscribe(data => {
      this.artists = data;
      console.log(this.artists)
    })
  }

}
