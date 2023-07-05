const numero = prompt('Hola paciente, ingrese el numero de su turno. De los 10 turnos disponibles');

function verificarturno(turno) {
    for (contador = 1; contador <= 10; contador++) {
    if (contador === parseint(turno)) {
     console.log('Ahora es tu turno'); 
    }
    }
}

verificarturno(numero)