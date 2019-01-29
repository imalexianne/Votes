import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes=[
    new Quote(1, 'Water is life', 'Mammy','Alexianne', 0, 0, new Date(2019,0,28)),
    new Quote(2, 'Sun is light', 'Daddy', 'Alexianne', 0, 0, new Date(2019,0,28)),
    new Quote(3, 'God is all', 'Jesus', 'Alexianne', 0, 0,new Date(2019,0,28)),
  ]

  completeQuote(isComplete,index){
    if (isComplete){
        this.quotes.splice(index,1);
        }
        }
  toogleDetals(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
   
   }

   addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}
  constructor() { }

  ngOnInit() {
  }

}
