// 2- Crear una funcion capaz de saber si un numero dado es primo, si lo es retornar TRUE y sino retornar FALSE
// numeros primos = 1, 2, 3, 5, 7...

let numeroSeleccionado = parseInt(prompt(`Ingrese un numero cualquiera el cual desee conocer si es primo o no; si llega a ser un numero primo saldra TRUE sino lo es saldra FALSE`));

alert(detectarNumPrimo(numeroSeleccionado));

function detectarNumPrimo(n) {
    if(n <= 0) {
        return false;
    }
    let contadorModulo0 = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0) {
            contadorModulo0++;
        }
    }
    return contadorModulo0 === 2 ? true : false;
}

