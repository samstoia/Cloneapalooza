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
  names: any[];

  constructor(private data: ApiService) { }

  ngOnInit() {
    this.data.getArtists().subscribe(data => {
      this.artists = data;
      this.names = [];
      let arr = this.artists._embedded.events[0]._embedded.attractions;
      for (let i=0; i<arr.length; i++) {
        let artistName: string = arr[i].name;
        this.names.push(artistName);
      }
    })
  }

  sortArray() {

    return this.names.sort();
  }
  
}
