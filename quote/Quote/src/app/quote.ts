export class  Quote{
  
    showQuote: boolean;
    constructor(public id: number,public authorName: string,public nameOfPublisher:string,public description: string,public genre:string,public publishDate: Date){
      this.showQuote=false;
    }
  }

