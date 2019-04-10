import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey } from './api-keys';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }


  getArtists() {
    return this.http.get('https://app.ticketmaster.com/discovery/v2/events?apikey=' + apiKey + '&id=vv178Z4JGkS6JSZS%20&countryCode=US');
  }
}


