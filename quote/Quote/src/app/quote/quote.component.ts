import { Quote } from './../quote';
import { Component, OnInit } from '@angular/core';
// import{Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes:Quote[]=[
  new Quote(1,'Albert Schwetwezer','Example is leadership','LOVE ',new Date(2020,9,20)),
  new Quote(2,'Tim tebow','Dont be normal,be an example','POETRY',new Date(2022,1,4)),
  new Quote (3,'Ruth jelimo','Action is the foundational key to all success','EDUCATIONAL',new Date(2022,2,6)),
  new Quote(4,'Lee Lacocca','If you set a good example you need not to worry about setting rules','LEADERSHIP',new Date(2012,8,4)),
  ];
  toggleDetails(index:any){
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }
quoteComplete(isComplete:any, index:any){
  if (isComplete) {
    this.quotes.splice(index,1);
  }
}

addNewQuote(quote:any){
  let quoteLength = this.quotes.length;
  quote.id = quote.Length;
  quote.publishDate = new Date(quote.publishDate)
  this.quotes.push(quote)
}

  constructor() { } 
  ngOnInit(): void {
  }
}
