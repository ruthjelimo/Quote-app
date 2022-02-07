import { Quote } from './../quote';
import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0,"","","",new Date());
  @Output() addQuote = new EventEmitter<Quote>();
  // addQuote!: undefined;

  submitQuote(){
this.addQuote.emit(this.newQuote);
  }
  // showQuote(showQuote: any) {
  //   throw new Error('Method not implemented.');
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
