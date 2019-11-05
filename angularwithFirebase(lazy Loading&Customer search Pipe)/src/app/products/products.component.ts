import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../Services/products.service";


//no problem
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
iconIndex:number;
 search:string;
 products;
 isValid:boolean=true;
 imageUrl:string="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
  constructor(products:ProductsService) { 
    this.products = products.getproduct();
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

  ngOnInit() {
  }

}
