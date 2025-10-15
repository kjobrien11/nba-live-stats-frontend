import { Component } from '@angular/core';
import { TeamComponent } from '../team/team.component';
import { TeamScoreComponent } from '../team-score/team-score.component';
import { TeamStatsComponent } from '../team-stats/team-stats.component';
import { TimeComponent } from '../time/time.component';
import { Team } from '../interfaces/team';
import { TeamScore } from '../interfaces/team-score';
import { TeamStats } from '../interfaces/team-stats';
import { GameInformation } from '../interfaces/game-information';

@Component({
  selector: 'app-display',
  imports: [TeamComponent, TeamScoreComponent, TeamStatsComponent, TimeComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  team: Team = {
    teamName: "hawks",
    spread: "-7",
    wins: 5,
    loses: 2
  }

  team2: Team = {
    teamName: "cavs",
    spread: "",
    wins: 3,
    loses: 4
  }

  teamScore: TeamScore = {
    score: 92,
    inBonus: 0,
    timeoutsRemaining: 4
  };

  teamScore2: TeamScore = {
    score: 102,
    inBonus: 1,
    timeoutsRemaining: 2
  };

  teamStats: TeamStats = {
    assists: 8,
    reboundsPersonal: 10,
    reboundsOffensive: 3,
    reboundsDefensive: 7,
    turnoversTotal: 2,
  }


  teamStats2: TeamStats = {
    assists: 12,
    reboundsPersonal: 19,
    reboundsOffensive: 10,
    reboundsDefensive: 9,
    turnoversTotal: 2,
  }

  gameStatusText: GameInformation = {
 "gameStatusText": "Q3 5:46"
  }
}
