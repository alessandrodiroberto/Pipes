import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pipes';
  fullName = 'Mario Rossi';
  birtData = '1971-01-25 15:30';
  salary = 6620.65469;
  phrase = 'Ciamo come va, spero tutto ok!';
}
