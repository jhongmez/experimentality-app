import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: () => import('./components/pages/home/home.module')
    .then(m => m.HomeModule) 
  },
  { 
    path: 'product-list', 
    loadChildren: () => import('./components/pages/products/product-list/product-list.module')
    .then(m => m.ProductListModule) 
  },
  { 
    path: 'product-detail/:id', 
    loadChildren: () => import('./components/pages/products/product-detail/product-detail.module')
    .then(m => m.ProductDetailModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
