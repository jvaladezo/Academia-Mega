import { Component } from '@angular/core';
import { HijoComponent } from '../../components/hijo/hijo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HijoComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  usuarios = [
    { nombre: "Juan", edad: 25, profesion: "Ingeniero" },
    { nombre: "Ana", edad: 25, profesion: "Diseñadora" },
    { nombre: "Luis", edad: 25, profesion: "Estudiante" },
  ]

  mensajeDelHijo: string = "";

  recibirMensaje(mensaje: any) {
    this.mensajeDelHijo = mensaje
  }

}
