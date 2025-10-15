import { Component } from '@angular/core';
import { TeamStats } from '../interfaces/team-stats';

@Component({
  selector: 'app-team-stats',
  imports: [],
  templateUrl: './team-stats.component.html',
  styleUrl: './team-stats.component.css'
})
export class TeamStatsComponent {

  teamStats: TeamStats = {
    assists: 8,
    reboundsPersonal: 10,
    reboundsOffensive: 3,
    reboundsDefensive: 7,
    turnoversTotal: 2,
  }
}
