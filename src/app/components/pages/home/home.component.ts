import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }  

  // Sliders

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

}
