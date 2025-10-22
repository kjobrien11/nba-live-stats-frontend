import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgClass } from '@angular/common';
import { TeamScore } from '../interfaces/team-score';

@Component({
  selector: 'app-team-score',
  imports: [NgClass],
  templateUrl: './team-score.component.html',
  styleUrl: './team-score.component.css'
})
export class TeamScoreComponent implements OnInit, OnChanges {

  @Input() teamScore!: TeamScore;


  displayTimeouts = new Array(7);

  ngOnInit() {
    console.log("INITI")
    this.calculateTimeOutDisplays();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['teamScore'] && this.teamScore) {
      this.calculateTimeOutDisplays();
    }
  }

  calculateTimeOutDisplays() {
    this.displayTimeouts.fill("●", 0, this.teamScore.timeoutsRemaining);
    this.displayTimeouts.fill("○", this.teamScore.timeoutsRemaining, 7);
  }

}
