import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  // Lista en la barra de navegacion
  navbarList = ['Hombre', 'Mujer', 'Junior', 'Niños', 'Accesorios', 'Ofertas'];

  constructor() { }

  ngOnInit(): void {
  }

}
