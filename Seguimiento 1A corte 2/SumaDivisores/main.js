// Reciba un numero cualquiera y calcule todos los posibles divisores que tenga y los sume, sin contar el mismo numero
// 2 = 1; 5 = 1; 10 = 3; 12 = 5; "13" = ERROR.

console.log(divisoresPosibles(2));
console.log(divisoresPosibles(5));
console.log(divisoresPosibles(10));
console.log(divisoresPosibles(12));
console.log(divisoresPosibles("13"));

function divisoresPosibles (numero) {
    if(typeof numero != 'number') {
        alert(`Por favor ingrese un valor numerico.`)
    }

    let cantidadTotal = 0;

    for(let i = 1; i < numero; i++){
        if (numero % i == 0) {
            cantidadTotal++;
        }
    }

    return cantidadTotal;
}