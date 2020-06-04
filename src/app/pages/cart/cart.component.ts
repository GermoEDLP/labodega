import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {

  cart= [
    {
      nombre: 'Fernet Branca',
      precio: 400,
      cant: 3,
      imagen: 'fernet.jpg'
    },
    {
      nombre: 'Smirnoff',
      precio: 370,
      cant: 2,
      imagen: 'smirnoff.png'
    },
    {
      nombre: 'Alma Mora',
      precio: 200,
      cant: 1,
      imagen: 'alma.jpg'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
