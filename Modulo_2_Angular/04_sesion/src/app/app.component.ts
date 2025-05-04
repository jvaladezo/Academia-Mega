import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludo } from './componets/saludo/saludo.components';
import { cardComponent } from './components/card/card.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saludo, cardComponent, TarjetaComponent, CommonModule, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isVisible = true;

  frutas = [
    "Manzana",
    "Naranja",
    "Uva",
    "Pera",
    "Piña",
    "Platano",
  ]
}
