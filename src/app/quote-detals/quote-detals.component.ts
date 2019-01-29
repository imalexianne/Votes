import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote-detals',
  templateUrl: './quote-detals.component.html',
  styleUrls: ['./quote-detals.component.css']
})
export class QuoteDetalsComponent implements OnInit {
@Input() quote:Quote;

@Output() isComplete= new EventEmitter<boolean>();


  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

 
 
  downvote(){
    this.quote.downvote++
  }
  upvote(){
    this.quote.upvote++
  }
  ngOnInit() {
  }

}
