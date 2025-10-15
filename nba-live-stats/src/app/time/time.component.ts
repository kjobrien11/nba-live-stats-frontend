import { Component, Input } from '@angular/core';
import { GameInformation } from '../interfaces/game-information';

@Component({
  selector: 'app-time',
  imports: [],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {

  @Input()gameStatusText!: GameInformation;

}
