export class Quote {
  
  public showDescription:boolean;
  constructor(public id:number, public name:string, public author:string,public submitted:string, public upvote:number, public downvote:number, public completeDate:Date){
 
  this.showDescription=false
}
}
