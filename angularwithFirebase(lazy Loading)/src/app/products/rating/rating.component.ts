import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
@Input() iconIndex:number;
@Input() numbersOfReviews = 0
  constructor() { }

  ngOnInit() {
  }
  clickMe(ratingRef){
    this.iconIndex =ratingRef;
    
    }

  showIcon(i){
    //if the iconIndex less or equals than i, 
    //the all small i will return star otherwise return star_border 
  if(this.iconIndex>=i){
    console.log(i,this.iconIndex);
    return "star"
  }else{
    return "star_border"
  }
  }
}
