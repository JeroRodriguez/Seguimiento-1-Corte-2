// Denominacion de los diferentes tipos y valores de billetes almacenados en un array
const denominations = [50000,20000,10000,5000, 2000, 1000];

// Obtiene y guarda en una variable el monto de dinero a retirar
function getWithdrawalAmount() {
  const userInput = prompt("¿Cuánto dinero deseas retirar  ?");
  return parseFloat(userInput);
}

// Calcula los billetes necesitados para realizar el retiro 
function calculateBilletsNeeded(amount) {

  // Itera sobre cada uno de los elementos del array de denomitations.
  return denominations.map(denomination => {

    // Almacena el calculo de los billetes necesitados para realizar el retiro. Si la cantidad solicitada (amount) es menor que alguna denomincacion de algun billete esto dara 0 por tal la denominacion de este billete no sera tenida en cuenta.
    const billetsNeeded = Math.floor(amount / denomination);

    // A la cantidad inicial recogida (amount) se le resta la multiplicacion de la variable (billetsNeeded) y la denominacion de cada uno de los elementos del array. 
    amount -= billetsNeeded * denomination;

    // Retorna el valor de la cantidad de billetes que se necesitan para hacer el retiro
    return billetsNeeded;
  });
}

// Retorna true siempre que un numero es mayor que 0.
function isValidWithdrawalAmount(amount) {
  return amount > 0 && amount % 1 === 0;
}

// Funcion general del funcionamiento del cajero
function ATMTransaction() {

  // En la variable (withdrawalAmount) se guarda la cantidad de dinero a retirar 
  const withdrawalAmount = getWithdrawalAmount();

  // Retorna la alerta en caso de que el monto sea negativo
  if (!isValidWithdrawalAmount(withdrawalAmount)) {
    alert("El monto solicitado no es válido.");
    return;
  }

  // Variable billetes necesitados
  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount);

  // Arroja una alerta que dice cual es el valor a retirar
  alert("Para retirar $" + withdrawalAmount + ", necesitas:");

  // Itera el array de las denominaciones de los billetes leyendo el valor de cada elemento y el indice. Repite este ciclo hasta arrojar todos las denominaciones de los billetes.
  denominations.forEach((denomination, index) => {
    // Si los billetes necesitados son mayores a 0 entra en el condicional
    if (billetsNeeded[index] > 0) {
      // Devuelve los billetes necesitados de cada denominacion.
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}

ATMTransaction();