import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  private username: string;
  private clientId = 'a2aa3c7096e2d3662fea';
  private clientSecret = 'fd627ea04ab35116458ddc02c5c9b4b87fa1b605';

  constructor(private _http: Http) {
    console.log('service is now ready');
  }
}
