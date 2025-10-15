import { Component } from '@angular/core';
import { TeamComponent } from '../team/team.component';
import { TeamScoreComponent } from '../team-score/team-score.component';
import { TeamStatsComponent } from '../team-stats/team-stats.component';
import { TimeComponent } from '../time/time.component';
import { Team } from '../interfaces/team';

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

}
