// 3- Calcular la suma de digitos de un numero entero y mostrar el resultado de dicha suma.
// 34 = 7; 355 = 13; 5 = 5; 15 = 6.

function sumaDigitos(num) {
    // Convertir numero a cadena de texto
    const numString = Math.abs(num).toString();

    // Inicializar la variable para almacenar la suma
    let suma = 0;

    // Iterar sobre cada digito de la cadena de texto
    for(let i = 0; i < numString.length; i++) {
        // Convertir el digito actual de cadena a numero 
        const digito = parseInt(numString[i]);

        // Sumar digito a la variable suma
        suma += digito;
    }
    return suma;
}

console.log(sumaDigitos("2345"));
