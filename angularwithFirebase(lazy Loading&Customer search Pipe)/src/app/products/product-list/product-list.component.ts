import { Component, OnInit, Input } from '@angular/core';
import { RatingComponent } from '../rating/rating.component'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input() data;

  constructor() { }

  ngOnInit() {
  }

}
