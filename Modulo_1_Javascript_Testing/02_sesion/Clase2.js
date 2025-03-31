let intentos = 0;
let claveCorrecta = "1234";
let claveIngresada;

while (intentos <3){
    claveIngresada = prompt("Ingresa Contraseña")

    if(claveIngresada === claveCorrecta){
        console.log("Acceso concedido.");
        break;
    }else{
        console.log("Contraseña Incorrecta");
    }
    intentos ++;
}
if(intentos === 3){
    console.log("Haz agotado tus intentos");
}
