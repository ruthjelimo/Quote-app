import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

transform(value:any) :number{

  let today:any = new Date();
  let dateDifference = Math.abs(Date.parse(today)-Date.parse(value))*0.001; 
  let differenceInDays= dateDifference/(60*60*24);  
  return Math.round(differenceInDays);

}



}