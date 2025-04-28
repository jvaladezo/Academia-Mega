document.getElementById("formularioNotas").addEventListener("submit", function (e) {
    e.preventDefault();

    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    const resultado = document.getElementById("resultado")


    try {
        const promedio = calcularPromedio(nota1, nota2, nota3);

        resultado.textContent = `El promedio es ${promedio.toFixed(2)}`;
        resultado.style.color = "green";
        console.log(promedio);
    } catch (error) {
        console.log(error.message)

        resultado.textContent = error.message;
        resultado.style.color = "red";
    }
})

function calcularPromedio(n1, n2, n3) {
    console.log("Calculando promedio...")

    if ([n1, n2, n3].some(isNaN)) {
        throw new Error("Todas las notas deben ser numeros validos")
    }

    if ([n1, n2, n3].some(n => n < 0 || n > 10)) {
        throw new Error("Las notas deben de estar entre cero y diez")
    }
    return (n1 + n2 + n3) / 3
}