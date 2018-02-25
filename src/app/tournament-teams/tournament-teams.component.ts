import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-teams',
  templateUrl: './tournament-teams.component.html',
  styleUrls: ['./tournament-teams.component.css']
})
export class TournamentTeamsComponent implements OnInit {
	teams = [];
	westernTeams = [];
	northernTeams = [];
	southernTeams = [];
	semiFinals = [];
	finals = [];
	champion = [];

	selectedTeam = {name: ""};


  constructor() { }

  ngOnInit() {
  
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
  onTeamClicked(team) {
  	this.semiFinals.push(team);

  	console.log(team.name);
  };
  onSemiFinalTeamClicked(team) {
  	this.finals.push(team);
  	console.log(team);
  };
  onWinningTeamClicked(team) {
  	this.champion.push(team);
  };

}

