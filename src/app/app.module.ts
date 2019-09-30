import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {UsersService} from './display-profile/users.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from './repos/repos.component';
import { BackgroundColorDirective } from './background-color.directive';
import { ReverseDatePipe } from './reverse-date.pipe';
import {RoutingModule} from './routing/routing.module'


@NgModule({
  declarations: [
    AppComponent,
    GithubSearchComponent,
    SearchComponent,
    ReposComponent,
    BackgroundColorDirective,
    ReverseDatePipe,
         
  ], 
  
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RoutingModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
