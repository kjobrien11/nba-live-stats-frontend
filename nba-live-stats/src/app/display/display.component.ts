import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class DisplayComponent implements OnInit, OnDestroy {

  constructor(private api: DataService) { };

  gameIndex: number = 0;
  maxGameIndex!: number;

  todaysGames!: Matchup[];
  todaysGamesStats!: MatchupStats[];

  interval: any;


  ngOnInit() {
    this.refreshStats();
    this.interval = setInterval(() => {
      this.nextMatchup();
    }, 10000);
    
  }
    ngOnDestroy() {
    clearInterval(this.interval);
  }

  refreshStats():void {
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
      this.refreshStats();
      this.gameIndex = 0;
    } else {
      this.gameIndex = this.gameIndex + 1;
    }
  }

  getNextTeam(side: "home" | "away"): Team {
    const team = this.todaysGames[this.gameIndex];
    return {
      teamName: team[`${side}Team`],
      wins: team[`${side}TeamWins`],
      loses: team[`${side}TeamLoses`],
    };
  }

  getNextTeamScore(side: "home" | "away"): TeamScore {
    const team = this.todaysGamesStats[this.gameIndex];
    return {
      score: team[`${side}Score`],
      inBonus: team[`${side}InBonus`] === "1",
      timeoutsRemaining: team[`${side}TimeoutsRemaining`],
    };
  }

  getNextTeamStats(side: "home" | "away"): TeamStats {
    const team = this.todaysGamesStats[this.gameIndex];
    return {
      assists: team[`${side}TeamAssists`],
      reboundsPersonal: team[`${side}TeamRebounds`],
      reboundsOffensive: team[`${side}TeamOffensiveRebounds`],
      reboundsDefensive: team[`${side}TeamDefensiveRebounds`],
      turnoversTotal: team[`${side}TeamTurnovers`],
    };
  }

  getNextGameStatusText(): GameInformation {
    return {
      "gameStatusText": this.todaysGamesStats[this.gameIndex].gameStatusText
    }
  }

}
