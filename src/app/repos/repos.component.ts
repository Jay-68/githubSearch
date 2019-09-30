import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { Repositories } from '../repositories';
import { Profiles } from '../profile';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  providers: [UsersService],
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  username = '';
  repositories: Repositories[];
  profiles: Profiles[];
  users: any = [];

  loading = false;
  errorMessage;


  constructor(private usersService: UsersService, private http: HttpClient) { }
  public getRepositories() {
    this.loading = true;
    this.errorMessage = ' ';
    this.usersService.getRepositories(this.username)
      .subscribe((response) => {
        this.repositories = response;
        console.log(response);
      },
        (error) => { this.errorMessage = error; this.loading = false; },
        () => { this.loading = false; });
  }

  public getProfiles(event: any) {

    this.usersService.getProfiles(this.username)
      .subscribe((response) => {
        this.users = response;
        console.log(response);
      });
  }

  ngOnInit() {
  }

}
