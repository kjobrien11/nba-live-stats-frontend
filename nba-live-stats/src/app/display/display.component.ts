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

@Component({
  selector: 'app-display',
  imports: [TeamComponent, TeamScoreComponent, TeamStatsComponent, TimeComponent],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent implements OnInit {

  constructor(private api: DataService) { };

  todaysGames!: Matchup[];

  gameIndex:number = 0;
  maxGameIndex!:number;

  ngOnInit() {
    this.api.getTodaysGames().subscribe(data => {
      this.todaysGames = data;
      this.maxGameIndex = this.todaysGames.length;
    });

    this.api.getTodaysBoxScores().subscribe(data =>{
      let boxscore = data[0]
    })
  }

  nextMatchup():void {
    if(this.gameIndex+1 == this.maxGameIndex){
      this.gameIndex = 0;
    }else{
      this.gameIndex = this.gameIndex +1;
    }
  }

  getNextHomeTeam(): Team {
    return {
        teamName: this.todaysGames[this.gameIndex].homeTeam,
        wins:this.todaysGames[this.gameIndex].homeTeamWins,
        loses:this.todaysGames[this.gameIndex].homeTeamLoses
      };
  }

  getNextAwayTeam(): Team {
    return {
        teamName: this.todaysGames[this.gameIndex].awayTeam,
        wins:this.todaysGames[this.gameIndex].awayTeamWins,
        loses:this.todaysGames[this.gameIndex].awayTeamLoses
      };
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
