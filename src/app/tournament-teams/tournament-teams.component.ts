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

	selectedTeam = {name: ""};


  constructor() { }

  ngOnInit() {
  
  }
  addTeam(team) {
  	this.teams.push({name: team.value});
  	team.value = '';
  };
  addTeamWest(team) {
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

  	console.log(team);
  }
  // nextRound(team) {
  // 	this.semiFinals.push({name: team.value});
  // }

}

