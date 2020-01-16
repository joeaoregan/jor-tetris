/*
app.component.ts
board component
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <game-board></game-board>
    <app-info></app-info>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-tetris';
}