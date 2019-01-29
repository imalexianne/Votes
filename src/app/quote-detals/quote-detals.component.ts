import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote-detals',
  templateUrl: './quote-detals.component.html',
  styleUrls: ['./quote-detals.component.css']
})
export class QuoteDetalsComponent implements OnInit {
@Input() quote:Quote;
// upvote=0;
  //downvote=0;
 // constructor() { 
 //   this.upvote = 0;
  //  this.downvote=0;
 // }

  // if ($(button#btn).onclick){
  //   this.upvote=this.upvote+1;
  // }
  //if($(button#button).onclick){
//this.downvote=this.downvote-1;
 // }
@Output() isComplete= new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
  

  ngOnInit() {
  }

}
