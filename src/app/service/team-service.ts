import { Injectable } from '@angular/core';
import { TournamentTeamsComponent} from '../tournament-teams/tournament-teams.component';

@Injectable()

export class HeadingService {
	headingServiceMethod() {
		return 'Gaming Tournament';
	}

	constructor() {};
}