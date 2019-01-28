import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes=[
    new Quote(1, 'Water is life', 'Mammy','Alexianne', 0, 0),
    new Quote(2, 'Sun is light', 'Daddy', 'Alexianne', 0, 0),
    new Quote(3, 'God is all', 'Jesus', 'Alexianne', 0, 0),
  ]

  toogleDetals(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
   
   
}
  constructor() { }

  ngOnInit() {
  }

}
