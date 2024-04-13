// 1- Function que calcule factorial de un numero

// 5! = 1 * 2 * 3 * 4 * 5 = 120
// 1! = 1
// 0! = 1

let numeroSeleccionado = parseInt(prompt(`Ingrese un digito que sea un entero positivo el cual desea conocer su valor FACTORIAL`));
let factorial = 1;

operacionFactorial(numeroSeleccionado);

function operacionFactorial(num) {
    if(num < 0){
        alert(`Por favor ingrese un numero entero positivo`)
    } else if ( num == 0) {
        alert(`El valor de ${num}! es igual a ${factorial}`)
    } else {
        for(let i = 1; i <= num; i++){
            factorial *= i;
        }
        alert(`El valor de ${num}! es igual a ${factorial}`);
    }
};