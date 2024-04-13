// Barcelona = 4; Estudiante = 5; tarde = 2.
let palabraIngresada = String(prompt(`Ingrese una frase o palabra cualquiera que desea conocer el numero de vocales que posee.`));

alert(contarVocales(palabraIngresada));

function contarVocales (frase) {
    if(typeof frase != 'string'){
        alert(`Error, ingresar por favor una cadena de texto`)
    }

    let vocales = 'aeiouAEIOU';
    let contadorVocales = 0;

    for(let i = 0; i < frase.length; ++i) {
        if(vocales.indexOf(frase[i]) !== -1) {
            ++contadorVocales;
        }
    }

    return contadorVocales;
}