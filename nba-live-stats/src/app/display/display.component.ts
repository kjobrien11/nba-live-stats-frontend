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
import { Matchup } from '../interfaces/matchup';
import { MatchupStats } from '../interfaces/matchup-stats';

@Component({
  selector: 'app-display',
  imports: [TeamComponent, TeamScoreComponent, TeamStatsComponent, TimeComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {

  constructor(private api: DataService) { };

  gameIndex: number = 0;
  maxGameIndex!: number;

  todaysGames!: Matchup[];
  todaysGamesStats!: MatchupStats[];


  ngOnInit() {
    this.api.getTodaysGames().subscribe(data => {
      this.todaysGames = data;
      this.maxGameIndex = this.todaysGames.length;
    });

    this.api.getTodaysBoxScores().subscribe(data => {
      this.todaysGamesStats = data;
    })
  }

  nextMatchup(): void {
    if (this.gameIndex + 1 == this.maxGameIndex) {
      this.gameIndex = 0;
    } else {
      this.gameIndex = this.gameIndex + 1;
    }
  }

  getNextHomeTeam(): Team {
    return {
      teamName: this.todaysGames[this.gameIndex].homeTeam,
      wins: this.todaysGames[this.gameIndex].homeTeamWins,
      loses: this.todaysGames[this.gameIndex].homeTeamLoses
    };
  }

  getNextAwayTeam(): Team {
    return {
      teamName: this.todaysGames[this.gameIndex].awayTeam,
      wins: this.todaysGames[this.gameIndex].awayTeamWins,
      loses: this.todaysGames[this.gameIndex].awayTeamLoses
    };
  }

  getNextGameStatusText(): GameInformation {
    return {
      "gameStatusText": this.todaysGamesStats[this.gameIndex].gameStatusText
    }
  }

  getNextHomeTeamScore(): TeamScore {
    return {
      score: this.todaysGamesStats[this.gameIndex].homeScore,
      inBonus: this.todaysGamesStats[this.gameIndex].homeInBonus === "1",
      timeoutsRemaining: this.todaysGamesStats[this.gameIndex].homeTimeoutsRemaining,
    };
  }

  getNextAwayTeamScore(): TeamScore {
    return {
      score: this.todaysGamesStats[this.gameIndex].awayScore,
      inBonus: this.todaysGamesStats[this.gameIndex].awayInBonus === "1",
      timeoutsRemaining: this.todaysGamesStats[this.gameIndex].awayTimeoutsRemaining,
    };
  }
  
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


}
