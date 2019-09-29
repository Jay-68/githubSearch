import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';
import { GithubSearchService } from './github-search.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
