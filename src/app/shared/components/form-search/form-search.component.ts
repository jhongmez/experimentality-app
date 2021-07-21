import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(value: string) {
    console.log('=>', value);
    
    // Nos permite consultar en la API luego de escribir mas de 3 caracteres
    // queryParams: Query para consultar en la API
    if (value && value.length > 3) {
     this.router.navigate(['/product-list'], {
       queryParams: { q: value}
     }); 
    }

    
  }

}
