import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  productos = {
    'vinos': [
      {
        nombre: 'Alma mora',
        precio: '300',
      },
      {
        nombre: 'Alma mora',
        precio: '300',
      },
      {
        nombre: 'Alma mora',
        precio: '300',
      },
      {
        nombre: 'Alma mora',
        precio: '300',
      }
    ],
    'cervezas': [
      {
        nombre: 'Otro mundo',
        precio: '230',
      },
      {
        nombre: 'Otro mundo',
        precio: '230',
      },
      {
        nombre: 'Otro mundo',
        precio: '230',
      },
      {
        nombre: 'Otro mundo',
        precio: '230',
      }
    ],
    "blancas": [
      {
        nombre: 'Smirnoff',
        precio: '370',
      },
      {
        nombre: 'Smirnoff',
        precio: '370',
      },
      {
        nombre: 'Smirnoff',
        precio: '370',
      },
      {
        nombre: 'Smirnoff',
        precio: '370',
      }
    ],
    'wiskys': [
      {
        nombre: "Jack Daniel's",
        precio: '1500',
      },
      {
        nombre: "Jack Daniel's",
        precio: '1500',
      },
      {
        nombre: "Jack Daniel's",
        precio: '1500',
      },
      {
        nombre: "Jack Daniel's",
        precio: '1500',
      }
    ],

  };

  ngOnInit(): void {}
}
