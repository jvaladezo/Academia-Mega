//Ejercicio
//Crear una funcion que devuekva otra funcion que multiplica

function multiplicador(factor){
    return function (numero){
        return numero* factor;
    }
}

const duplicar = multiplicador(2);
const triplicar = multiplicador(3);

console.log(duplicar(5));
console.log(triplicar(5));