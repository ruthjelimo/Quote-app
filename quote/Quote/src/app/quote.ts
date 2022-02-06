export class Quote {
    // id!: number;
    // authorName!:string;
    // quote!:string;
    showQuote: boolean;
    constructor(public id: number,public authorName: string,public description: string,public genre:string,public publishDate: Date){
      this.showQuote=false;
    }
  }

