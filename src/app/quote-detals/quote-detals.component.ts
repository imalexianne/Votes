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
@Output() isViewed= new EventEmitter<boolean>();
@Output() isUpvoted= new EventEmitter<boolean>();
@Output() isDownvoted= new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }

  quoteViewed(viewed:boolean){
    this.isViewed.emit(viewed);
  }
 
  downVote(complete:boolean){
    this.isDownvoted.emit(complete);
  }
  upVote(complete:boolean){
    this.isUpvoted.emit(complete);
  }
  ngOnInit() {
  }

}
