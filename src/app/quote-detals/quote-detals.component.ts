import { Component, OnInit, Input } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote-detals',
  templateUrl: './quote-detals.component.html',
  styleUrls: ['./quote-detals.component.css']
})
export class QuoteDetalsComponent implements OnInit {
@Input() quote:Quote;
  constructor() { }

  ngOnInit() {
  }

}
