import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Saludo } from './componets/saludo/saludo.components';
import { cardComponent } from './components/card/card.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './components/todo/todo.component';
import { ProductsManagerComponent } from './components/products-manager/products-manager.component';
import { EdadPipe } from './Pipes/edad.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saludo, cardComponent, TarjetaComponent, CommonModule, TodoComponent,ProductsManagerComponent, RouterLink , EdadPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  rolUsuario = 'alguien';
  edad = 3

  tareaImportante = true;

  isUrgente = false;
 
  nombre="José Luis Valadez Olivo"
  fechaNacimiento = "12/03/88"
  salario=5000
  

}
