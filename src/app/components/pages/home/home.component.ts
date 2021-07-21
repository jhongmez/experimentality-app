import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/products/product.service';
import { Product } from '../../../shared/interfaces/product.interface';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  constructor( private productSvc: ProductService) { }

  ngOnInit(): void {
    this.getDataFromProductService();
  }  
  
  products: Product[] = [];
  private query: string;

  // Hero slider
  slides = [
    {
      img: "assets/images/backgrounds/banner-principal.jpg",
      imgResponsive: "assets/images/backgrounds/banner-principal-mobile.jpg"
    },
    {
      img: "assets/images/backgrounds/banner-principal.jpg",
      imgResponsive: "assets/images/backgrounds/banner-principal-mobile.jpg"
    },
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
  }

  slideConfigProducts = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow": "<div class='slick-next'></div>",
    "prevArrow": "<div class='slick-prev'></div>",
    "responsive": [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  // Categories
  categories = [
    {
      img: "assets/images/global/banner-moda-infantil.jpg"
    },
    {
      img: "assets/images/global/banner-deportivo.jpg"
    }
  ];

  private getDataFromProductService(): void {
    
    // this.productSvc
    //     .searchProducts(this.query)
    //     .pipe(take(1))
    //     .subscribe( (res: any) => {
            
    //       console.log('=>',res);

    //       const { paging, results }  = res;
    //       this.products = [...this.products, ...results];
    //     });

    this.productSvc
        .getProducts()
        .pipe( take(1))
        .subscribe( (data: any) => {
            // Desestructuracion de array a objeto
            const { results }  = data;
            this.products = [...results];
        });

  }

}
