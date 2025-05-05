import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products-manager',
  imports: [CommonModule],
  templateUrl: './products-manager.component.html',
  styleUrl: './products-manager.component.css'
})
export class ProductsManagerComponent {
  categoriaSeleccionada="ropa";

  productos = {
    electronica:[
      {nombre: "Laptop", precio:1200, disponible:true, descuento:10},
      {nombre: "Smartphone", precio:800, disponible:true, descuento:0},
    ],
    ropa:[
      {nombre: "Camisa", precio:30, disponible:true, descuento:0},
      {nombre: "Jeans", precio:50, disponible:true, descuento:0},
    ],
    alimentos:[
      {nombre: "Carne", precio:15, disponible:true, descuento:0},
      {nombre: "Verduras", precio:10, disponible:true, descuento:10},
    ]
  }
}
