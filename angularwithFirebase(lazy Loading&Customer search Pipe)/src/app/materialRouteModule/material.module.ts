import { NgModule } from "@angular/core";
import { MatButtonModule,MatIconModule, MatCardModule } from "@angular/material";
import { ProductsComponent } from '../products/products.component';

const materialComponent = [MatButtonModule,MatIconModule,MatCardModule]

@NgModule({
    imports:[materialComponent],
    exports:[materialComponent],
   
})

export class MaterialModule{}