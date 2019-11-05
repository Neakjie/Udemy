import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLaodingRoutingModule } from './lazy-laoding-routing.module';
import { ProductsComponent } from '../products.component';
import { MaterialModule } from 'src/app/materialRouteModule/material.module';
import { RatingComponent } from '../rating/rating.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductsService } from 'src/app/Services/products.service';
import { TruncatePipe } from 'src/app/truncate.pipe';



@NgModule({
  declarations: [ProductsComponent,TruncatePipe,RatingComponent,ProductListComponent],
  imports: [
    MaterialModule,
    CommonModule,
    LazyLaodingRoutingModule,
    
  ],
  providers:[ProductsService]
})
export class LazyLaodingModule { }
