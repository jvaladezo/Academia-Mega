import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  nuevaTarea = "";

  tareas = [
    { texto: "Aprender Angular", completado: false },
    { texto: "Hacer ejercicio", completado: true }
  ]
  agregarTareas() {
    if (this.nuevaTarea.trim()) {
      this.tareas
        .push({ texto: this.nuevaTarea, completado: false });
      this.nuevaTarea = ""

    }
  }

  limpiarTarea(){
    this.tareas = []
  }

  toggleCompletar(index: number){
    this.tareas[index].completado = !this.tareas[index].completado;
  }

}
