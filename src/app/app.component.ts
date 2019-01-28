import { Component } from '@angular/core';
import{Quote}from'./quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Votes';

  quotes=[
    new Quote(1, 'Water is life'),
    new Quote(2, 'Sun is light'),
    new Quote(3, 'God is all'),
  ]
}
