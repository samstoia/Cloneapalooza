import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css'],
  providers: [ApiService]
})
export class LineupComponent implements OnInit {

  artists;
  names: any[];
  ignoreName: any[];
  artistInfo;

  constructor(private data: ApiService) { }

  ngOnInit() {
    this.data.getArtists().subscribe(data => {
      this.artists = data;
      this.names = [];
      this.ignoreName = [];
      let arr = this.artists._embedded.events[0]._embedded.attractions;
      for (let i=0; i<arr.length; i++) {
        if (arr[i].name === 'Lollapalooza') {
          let ignoreValue: string = arr[i].name;
          this.ignoreName.push(ignoreValue);
        } else {
          let artistName: string = arr[i].name;
          this.names.push(artistName);
        }
        
      }
    })
  }

  sortArray() {
    return this.names.sort();
  }

  getArtistDetails() {
    this.data.getArtists().subscribe(data => {
      this.artistInfo = data
      console.log(data)
    })
  }
}
