import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

const Products = [
  ProductDetailComponent,
  ProductListComponent
]

@NgModule({
  declarations: [
    ...Products
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ...Products
  ]
})
export class ProductsModule { }
