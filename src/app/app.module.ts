import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TournamentTeamsComponent } from './tournament-teams/tournament-teams.component';


@NgModule({
  declarations: [
    AppComponent,
    TournamentTeamsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
  AppComponent,
  TournamentTeamsComponent
  ]
})
export class AppModule { }
