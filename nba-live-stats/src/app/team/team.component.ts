import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Team } from '../interfaces/team';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnChanges{

  @Input() team!: Team;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['team'] && this.team) {
      if(this.team.teamName == "Trail Blazers"){
        this.team.teamName = "Blazers";
      }
    }
    
  }
  
}
