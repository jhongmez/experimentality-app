import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialNetwork = [
    {
      image: "assets/images/icons/icon-facebook.svg"
    },
    {
      image: "assets/images/icons/icon-twitter.svg"
    },
    {
      image: "assets/images/icons/icon-instagram.svg"
    },
    {
      image: "assets/images/icons/icon-youtube.svg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
