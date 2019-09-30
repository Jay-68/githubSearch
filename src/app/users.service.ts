import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repositories } from '../app/repositories';
import { environment } from '../environments/environment';
import { Profiles } from '../app/profile';


@Injectable()
export class UsersService {
  [x: string]: any;

  constructor(private http: HttpClient) {
    console.log('service is now ready!');
  }


  baseURL = 'https://api.github.com/users/';
  apiKey = environment.apiKey;

  getRepositories(username: string): Observable<Repositories[]> {
    return this.http.get<Repositories[]>(this.baseURL + username + '/repos' + this.apiKey);
  }
  getProfiles(username: string): Observable<Profiles[]> {
    return this.http.get<Profiles[]>(this.baseURL + username + this.apiKey);
  }


}
