import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
    selector: "app-card",
    imports: [FormsModule],
    templateUrl: './card.component.html' ,
    styleUrl: './card.component.css'
})

export class cardComponent{
    title = "Esto es una card";
    contenido = "Esto es una card que vamos a estar trabajando";
    botonText = "Conoce más";
    
    img ="https://picsum.photos/640/640?r" + Math.random()
    yo = "https://media.licdn.com/dms/image/v2/C4E03AQGEQjo19Cb4wA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516554089727?e=2147483647&v=beta&t=P9j2LTdlbczRAxjPiLBkq1sgAkPRbsWlGhfMUthsH4w"

    nombre=""

    mostrarAlerta(){
        alert("Hola José Luis");
    }
}
