import { Component, OnInit } from '@angular/core';
import { HeadingService } from '../service/team-service';

@Component({
  selector: 'app-tournament-teams',
  templateUrl: './tournament-teams.component.html',
  styleUrls: ['./tournament-teams.component.css'],
  providers: [HeadingService]
})
export class TournamentTeamsComponent implements OnInit {
	easternTeams = [];
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



  addTeam(team, division) {
      console.log(team.value);
      console.log(division);
      if (division === "east") {
      this.easternTeams.push({name: team.value});
    } else if (division === "west") {
      this.westernTeams.push({name: team.value});
    } else if (division === "north") {
      this.northernTeams.push({name: team.value});
    } else {
      this.southernTeams.push({name: team.value});
    }
      team.value = '';
  };


  onTeamClicked(team, side) {
    if (side === "left") {
      this.leftSemiFinals.push(team);
    } else {
      this.rightSemiFinals.push(team);
    }
  };

  onSemiFinalsTeamClicked(team, side) {
    if (side === "left") {
      this.leftFinals.push(team);
    } else {
      this.rightFinals.push(team);
    }
  };

  onWinningTeamClicked(team) {
    this.champion.push(team);
  };

  // addTeamNorth(team) {
  // 	this.northernTeams.push({name: team.value});
  // 	team.value = '';
  // };
  // addTeamSouth(team) {
  // 	this.southernTeams.push({name: team.value});
  // 	team.value = '';
  // };


 //  onLeftTeamClicked(team) {
 //  	this.leftSemiFinals.push(team);
	// console.log(team.name);
 //  };

 //   onRightTeamClicked(team) {
 //  	this.rightSemiFinals.push(team);
	// console.log(team.name);
 //  };




  



  // onLeftSemiFinalTeamClicked(team) {
  // 	this.leftFinals.push(team);
  // 	console.log(team.name);
  // };
  //  onRightSemiFinalTeamClicked(team) {
  // 	this.rightFinals.push(team);
  // 	console.log(team.name);
  // };



 










