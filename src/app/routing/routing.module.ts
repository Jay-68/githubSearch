import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { GithubSearchComponent } from '../github-search/github-search.component';
import { ReposComponent } from '../repos/repos.component';


//Defining routes
const routes:Routes=[
  {path:"github-search",component:GithubSearchComponent},
  {path:"repos",component:ReposComponent},
  {path:"",redirectTo:"/github-search",pathMatch:"full"},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
