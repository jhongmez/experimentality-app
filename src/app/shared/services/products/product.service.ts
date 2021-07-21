import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from '../../interfaces/product.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor( private http: HttpClient) { }

  // Variables para traer la API de productos
  productList   = `${environment.baseUrlAPIProducts}`;
  productDetail = `${environment.baseUrlAPIProductDetail}`;

  
  // Buscar por todos los productos
  // query = '': Inicializa vacia la  busqueda
  searchProducts(query = '') {
    
    // Product[]: La interface que creamos con los campos que usaremos
    return this.http.get<Product[]>(`${this.productList}/?title=${query}`);

  }
  
  // Obtener todos los productos de la categoria
  getProducts() {
    return this.http.get<Product>(`${this.productList}`);
  }
  
  // Obtener el detalle del producto
  getProductDetail(id: string) {
    return this.http.get<Product>(`${this.productDetail}/${id}`);
  }

}
