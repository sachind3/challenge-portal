import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';
import { ChallengeIntroComponent } from './challenge-intro/challenge-intro.component';
import { ChallengeDetailComponent } from './challenge-detail/challenge-detail.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectWinnerComponent } from './select-winner/select-winner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChallengeListComponent,
    ChallengeIntroComponent,
    ChallengeDetailComponent,
    SelectWinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
