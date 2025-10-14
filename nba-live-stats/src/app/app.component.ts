import { Component } from '@angular/core';
import { DisplayComponent } from './display/display.component';

@Component({
  selector: 'app-root',
  imports: [DisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nba-live-stats';
}
