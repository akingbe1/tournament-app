import { Component, OnInit } from '@angular/core';
import { HeadingService } from '../service/team-service';

@Component({
  selector: 'app-tournament-teams',
  templateUrl: './tournament-teams.component.html',
  styleUrls: ['./tournament-teams.component.css'],
  providers: [HeadingService]
})
export class TournamentTeamsComponent implements OnInit {
	teams = [];
	westernTeams = [];
	northernTeams = [];
	southernTeams = [];
	leftSemiFinals = [];
	rightSemiFinals = [];
	leftFinals = [];
	rightFinals = [];
	champion = [];

	selectedTeam = {name: ""};

	title:string;


   constructor(private _headingService: HeadingService) {

  }

  ngOnInit() {
  	this.title = this._headingService.headingServiceMethod();
  }



  addTeam(team) {
  	this.teams.push({name: team.value});
  	team.value = '';
  };
  addTeamWest(team) {
  	console.log(team.value);
  	this.westernTeams.push({name: team.value});
  	team.value = '';

  };
  addTeamNorth(team) {
  	this.northernTeams.push({name: team.value});
  	team.value = '';
  };
  addTeamSouth(team) {
  	this.southernTeams.push({name: team.value});
  	team.value = '';
  };


  onLeftTeamClicked(team) {
  	this.leftSemiFinals.push(team);
	console.log(team.name);
  };

   onRightTeamClicked(team) {
  	this.rightSemiFinals.push(team);
	console.log(team.name);
  };




  onLeftSemiFinalTeamClicked(team) {
  	this.leftFinals.push(team);
  	console.log(team.name);
  };
   onRightSemiFinalTeamClicked(team) {
  	this.rightFinals.push(team);
  	console.log(team.name);
  };



  onWinningTeamClicked(team) {
  	this.champion.push(team);
  };




}

