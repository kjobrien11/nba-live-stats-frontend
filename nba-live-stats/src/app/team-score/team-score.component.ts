import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { TeamScore } from '../interfaces/team-score';

@Component({
  selector: 'app-team-score',
  imports: [NgClass],
  templateUrl: './team-score.component.html',
  styleUrl: './team-score.component.css'
})
export class TeamScoreComponent implements OnInit {

  teamScore: TeamScore = {
    score: 92,
    inBonus: 0,
    timeoutsRemaining: 4
  };


  displayTimeouts = new Array(7)

  ngOnInit() {
    this.calculateTimeOutDisplays();
  }

  calculateTimeOutDisplays() {
    this.displayTimeouts.fill("●", 0, this.teamScore.timeoutsRemaining);
    this.displayTimeouts.fill("○", this.teamScore.timeoutsRemaining, 7);
  }

}
