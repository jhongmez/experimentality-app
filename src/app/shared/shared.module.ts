import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormSearchComponent } from './components/form-search/form-search.component';

const components = [
  HeaderComponent,
  FooterComponent,
  FormSearchComponent
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components,
  ]
})
export class SharedModule { }
