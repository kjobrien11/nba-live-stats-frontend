import { Component, OnInit } from '@angular/core';
import { TeamComponent } from '../team/team.component';
import { TeamScoreComponent } from '../team-score/team-score.component';
import { TeamStatsComponent } from '../team-stats/team-stats.component';
import { TimeComponent } from '../time/time.component';
import { Team } from '../interfaces/team';
import { TeamScore } from '../interfaces/team-score';
import { TeamStats } from '../interfaces/team-stats';
import { GameInformation } from '../interfaces/game-information';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-display',
  imports: [TeamComponent, TeamScoreComponent, TeamStatsComponent, TimeComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {

  constructor(private api: DataService) { };

  team!: Team;

  team2!: Team;
  ngOnInit() {
    this.api.getTodaysGames().subscribe(data => {
      console.log(data)
      let game = data[3]
      this.team = {
        teamName: game.homeTeam,
        wins: game.homeTeamWins,
        loses: game.homeTeamLoses
      };

      this.team2 = {
        teamName: game.awayTeam,
        wins: game.awayTeamWins,
        loses: game.awayTeamLoses
      };

    });

    this.api.getTodaysBoxScores().subscribe(data =>{
      let boxscore = data[0]
    })
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
