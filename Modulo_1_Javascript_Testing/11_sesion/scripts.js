document.getElementById("testForm").addEventListener("submit", function (e) {
    e.preventDefault();//Evita el comportamiento por defecto del formulario

    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const resultado = document.getElementById("resultado");

    try {
        validarDatos(nombre, edad)
        resultado.textContent = `Hola ${nombre}, tienes ${edad} años`;
        resultado.style.color = "green";
    } catch (error) {
        console.log("Error:", error)
        resultado.textContent = error.menssage
        resultado.style.color = "red"
    }

})

//Funcion para validar datos
function validarDatos(nombre, edad) {
    console.log("Validando datos...")

    if (!nombre || !edad) {
        throw new Error("Por favor completa todos los campos");
    }

    if (edad <= 0) {
        throw new Error("La edad debe ser un numero valido");
    }
    if (nombre.lenght > 30) {
        throw new Error("El nombre es demaciado largo");
    }

    console.log("Datos validados correctamente")
}