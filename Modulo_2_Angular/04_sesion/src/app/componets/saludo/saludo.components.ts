import { Component } from '@angular/core';

@Component({
    selector: "app-saludo",
    standalone:true,
    imports: [],
    templateUrl: './saludo.component.html' ,
    styleUrl: './saludo.component.css',
})

export class Saludo{
    name = "José Luis Valadez Olivo"
}
