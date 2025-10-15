import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  teamName:string = "Hawks"
  spread:string = "-7";
  wins:number = 5;
  loses:number = 2;

}
