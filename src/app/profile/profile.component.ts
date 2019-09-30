import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any[];
  repos: any[];
  username: string;

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private UsersService: UsersService) {

  }

  findProfile() {
    this.UsersService.updateProfile(this.username);

    this.UsersService.profileData().subscribe((profile) => {
      this.profile = profile;
    });

    this.UsersService.profileRepos().subscribe((repos) => {
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}
