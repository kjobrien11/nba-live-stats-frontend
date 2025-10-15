import { Component, Input } from '@angular/core';
import { Team } from '../interfaces/team';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  @Input() team!: Team;
  
}
