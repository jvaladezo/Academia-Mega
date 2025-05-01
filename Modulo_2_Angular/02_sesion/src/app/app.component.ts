import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludo } from './componets/saludo/saludo.components';
import { cardComponent } from './componets/card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saludo, cardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'José Luis Valadez Olivo';
  dato = 'Desarrollador se Software';
  dato2= 140;
}
