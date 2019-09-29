import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  private username: string;
  private clientId = 'a2aa3c7096e2d3662fea';
  private clientSecret = 'fd627ea04ab35116458ddc02c5c9b4b87fa1b605';

  constructor(private serviceHttp: HttpClient) {
    console.log('service is now ready');
    this.username = 'Jay-68';
  }
  profileData() {
    // tslint:disable-next-line: max-line-length
    return this.serviceHttp.get('https://api.github.com/users/' + this.username + "?client_id=" + this.clientId + "&client_secret" + this.clientSecret);
  }

  profileRepos() {
    // tslint:disable-next-line: max-line-length
    return this.serviceHttp.get('https://api.github.com/users/' + this.username + "/repos?client_id=" + this.clientId + "&client_secret" + this.clientSecret);
  }
}

