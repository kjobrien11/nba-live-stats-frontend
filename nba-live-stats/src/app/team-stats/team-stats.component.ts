import { Component, Input } from '@angular/core';
import { TeamStats } from '../interfaces/team-stats';

@Component({
  selector: 'app-team-stats',
  imports: [],
  templateUrl: './team-stats.component.html',
  styleUrl: './team-stats.component.css'
})
export class TeamStatsComponent {

  @Input() teamStats!: TeamStats;
}
