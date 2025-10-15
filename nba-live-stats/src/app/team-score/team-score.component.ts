import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-team-score',
  imports: [NgClass],
  templateUrl: './team-score.component.html',
  styleUrl: './team-score.component.css'
})
export class TeamScoreComponent implements OnInit{
  score:number = 92;
  inBonus: number = 0;
  timeoutsRemaining:number = 4;

  displayTimeouts = new Array(7)

  ngOnInit(){
    this.calculateTimeOutDisplays();
  }

  calculateTimeOutDisplays(){
    this.displayTimeouts.fill("●", 0, this.timeoutsRemaining);
    this.displayTimeouts.fill("○", this.timeoutsRemaining, 7);
  }

}
