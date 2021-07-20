import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'product-list', 
    loadChildren: () => import('./components/pages/products/product-list/product-list.module').then(m => m.ProductListModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
