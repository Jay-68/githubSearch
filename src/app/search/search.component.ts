import { Component, OnInit } from '@angular/core';
import {UsersService} from '../display-profile/users.service'
import {Repositories} from '../repositories'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

}
