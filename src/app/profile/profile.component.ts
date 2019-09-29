import { GithubSearchService } from './../github-search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any[];
  repos: any[];

  constructor(private githubSearchService: GithubSearchService) {
    this.githubSearchService.profileData().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.githubSearchService.profileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}
