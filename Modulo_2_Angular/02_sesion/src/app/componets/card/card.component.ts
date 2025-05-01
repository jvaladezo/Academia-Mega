import { Component } from '@angular/core';

@Component({
    selector: "app-card",
    imports: [],
    templateUrl: './card.component.html' ,
    styleUrl: './card.component.css'
})

export class cardComponent{
    title = "Esto es una card";
    contenido = "Esto es una card que vamos a estar trabajando";
    botonText = "Conoce más";
    
    img ="https://picsum.photos/640/640?r" + Math.random()
}
