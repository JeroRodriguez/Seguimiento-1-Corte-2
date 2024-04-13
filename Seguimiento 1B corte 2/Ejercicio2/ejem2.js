// Array con las denominaciones de las habitaciones que hay
const rooms = [100, 101, 102, 103, 201, 202, 203, 301, 302, 303];

// Asigna a cada valor un estatus como si cada habitacion estuviera vacia en principio
const roomStatus = Array(10).fill(false);

// Crea un objeto vacio con las reservaciones de habitaciones 
const roomReservations = {};

// Crea funcion en la cual se van asignando las habitaciones reservadas
const reserveRoom = (roomNumber, name) => {

  // variable que guarda el indice de posicion dentro del array del numero de la habitacion que se necesite reservar; si el numero de habitacion no existe se guarda en la variable el valor -1
  const index = rooms.indexOf(roomNumber);

  // En caso de que la habitacion ingresada exista y no este reservada entra en el codigo
  if (index !== -1 && roomStatus[index] === false) {

    // EL numero de la habitacion pasa a un estado True.
    roomStatus[index] = true;

    // En el objeto roomReservations se agrega la propiedad numero de la habitacion asignandole como valor el nombre del reservante  
    roomReservations[roomNumber] = name;

    // Imprimiria dando detalle de la habitacion reservada y a nombre de quien fue
    alert(`La habitación ${roomNumber} ha sido reservada por ${name}.`);
  } else {
    // Imprime en caso de estar ya reservada 
    alert(`La habitación ${roomNumber} ya está reservada.`);
  }
};

// Funcion que cambia el estado de las habitaciones reservadas para ser liberadas
const freeRoom = roomNumber => {
  const index = rooms.indexOf(roomNumber);

  if (index !== -1 && roomStatus[index] === true) {
    
    // Si identifica que la habitacion estaba siendo utilizada y ya no hay nadie le cambia el estado a habitacion libre
    roomStatus[index] = false;

    // Elimina la propiedad numero de habitacion que almacenaba el nombre del reservante una vez ya liberada la habitacion
    delete roomReservations[roomNumber];

    // Informa que habitacion se libero
    alert(`La habitación ${roomNumber} ha sido liberada.`);
  } else {
    // Informa que habitacion ya estaba liberada
    alert(`La habitación ${roomNumber} ya está libre.`);
  }
};

// Funcion que muestra las habitaciones disponibles
const showAvailableRooms = () => {

  // Filtra dentro del array y guarda en la variable las habitaciones que tiene un estado false por ende retorna las que no estan reservadas
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false;
  });

  // Si hay siquiera una habitacion disponible nos muestra cual habitaciones son las que estan disponibles
  if (availableRooms.length > 0) {
    alert(`Las habitaciones disponibles son: ${availableRooms.join(', ')}`);
  } else {
    alert('No hay habitaciones disponibles.');
  }
};

// Funcion que muestra las habitaciones ocupadas
const showOccupancy = () => {

  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false;
  });

  // Filtra dentro del array y guarda en la variable las habitaciones que tiene un estado true por ende retorna las que estan reservadas
  const reservedRooms = rooms.filter((room, index) => {
    return roomStatus[index] === true;
  });

  // Imprime el numero de habitaciones que hay disponibles y el numero de las que estan reservadas
  alert(`Hay ${availableRooms.length} habitaciones disponibles y ${reservedRooms.length} habitaciones reservadas.`);
};

// Funcion que interactua con el usuario
const handleUserInput = () => {

  // Variable en la cual se almacenara la opcion del menu elegida por el usuario
  let userInput;

  // Ciclo que funciona como un menu 
  do {
  
    // Pide al usuario una opcion a escoger en el menu de funcionalidades 
    userInput = prompt('Menú \n' + '1. Reservar una habitación '+ 
    ' 2. Liberar una habitación'+
    ' 3. Consultar ocupación' +
  ' 4. Salir');

   // Analiza el valor de la variable userInput
    switch (userInput) {

      // Caso de que elija reservar una habitacion ejecuta el codigo
      case '1':

        // En una variable almacena el numero de habitacion
        const roomNumber = parseInt(prompt('Ingrese el número de la habitación:\n[100, 101, 102, 103, 201, 202, 203, 301, 302, 303]:'));

        // Si el valor ingresado es un valor no numerico y no corresponde al numero de una habitacion dentro del array no entra al codigo y da error
        if (!isNaN(roomNumber) && rooms.includes(roomNumber)) {

          // Pide el nombre al usuario
          const name = prompt('Ingrese su nombre:');

          // Ejecuta funcion que reserva una habitacion
          reserveRoom(roomNumber, name);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;

      // Caso de que elija liberar una habitacion ejecuta el codigo
      case '2':

        // En una variable almacena el numero de la habitacion que el usuario desea liberar
        const roomNumberToFree = parseInt(prompt('Ingrese el número de la habitación que desea liberar:'));

        // Si el valor ingresado es un valor no numerico y no corresponde al numero de una habitacion dentro del array no entra al codigo y da error
        if (!isNaN(roomNumberToFree) && rooms.includes(roomNumberToFree)) {

          // Ejecuta funcion de liberar una habitacion
          freeRoom(roomNumberToFree);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;

      // Caso de que elija consultar ocupacion en el menu ejecuta la respectiva funcion 
      case '3':
        showOccupancy();
        break;

      // Caso de que elija la opcion de salir en el menu 
      case '4':
        alert('Saliendo...');
        break;

      // Caso extraordinario 
      default:
        alert('Opción inválida. Intente de nuevo.');
        break;
    }

    // El ciclo se repite mientras los valores ingresados sean distintos a 4
  } while (userInput !== '4');
};

// Ejecutar la función global que combina la interacción con el usuario y las opciones de la app.
handleUserInput();