import { Component, Input,OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from './../quote'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})

export class QuoteDetailsComponent implements OnInit {
// @Input()Quote:quote;
@Input() quote:Quote | undefined;

@Output() isComplete = new EventEmitter<boolean>();

quoteComplete(complete:boolean){
  this.isComplete.emit(complete);
}

  numberOfLikes: number= 0;
  likeButtonClick(){
   this.numberOfLikes ++;

  }
  numberOfDislikes: number= 0;
  dislikeButtonClick(){
   this.numberOfDislikes--;
  }
  

  constructor() { }

  ngOnInit(): void {
  }


}
