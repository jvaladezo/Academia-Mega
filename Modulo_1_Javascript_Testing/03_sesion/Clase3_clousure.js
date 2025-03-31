//Clousoure

function contador(){
    let cuenta = 0;
    return function (){
        cuenta ++;
        return cuenta;
    }
}
const incrementa = contador()

console.log(incrementa());
console.log(incrementa());
console.log(incrementa());
console.log(incrementa());
console.log(incrementa());
console.log(incrementa());