let pantalla = document.getElementById('pantalla');

// Variables para almacenar la operación actual, el operador pendiente y el resultado anterior
let operacionActual = '';
let operadorPendiente = null;
let resultadoAnterior = null;

//? Función para actualizar la pantalla con la operación actual o mostrar '0' si está vacía
function actualizarPantalla() {
    pantalla.textContent = operacionActual || '0';
}

//? Función para agregar un número a la operación actual
function agregarNumero(numero) {
    // Si la operación actual es '0' o está vacía, se reemplaza con el nuevo número
    if (operacionActual === '0' || operacionActual === '') {
        operacionActual = numero;
    } else {
        // Si no, se concatena el nuevo número a la operación actual
        operacionActual += numero;
    }
    // Actualiza la pantalla con la nueva operación actual
    actualizarPantalla();
}

//? Función para agregar un operador (+, -, *, /) a la operación
function agregarOperador(operador) {
    // Si ya hay un operador pendiente, resuelve la operación anterior primero
    if (operadorPendiente !== null) {
        resolver();
    }
    // Guarda el valor actual como el resultado anterior y limpia la operación actual
    resultadoAnterior = parseFloat(operacionActual);
    operacionActual = '';
    // Establece el operador pendiente
    operadorPendiente = operador;
}

//? Función para resolver la operación pendiente
function resolver() {
    // Si no hay operador pendiente o resultado anterior, no hace nada
    if (operadorPendiente === null || resultadoAnterior === null) return;

    let resultado;
    // Convierte la operación actual a un número
    const valorActual = parseFloat(operacionActual);

    // Realiza la operación correspondiente según el operador pendiente
    switch (operadorPendiente) {
        case '+':
            resultado = resultadoAnterior + valorActual;
            break;
        case '-':
            resultado = resultadoAnterior - valorActual;
            break;
        case '*':
            resultado = resultadoAnterior * valorActual;
            break;
        case '/':
            resultado = resultadoAnterior / valorActual;
            break;
    }

    // Actualiza la operación actual con el resultado y limpia los operadores y resultados pendientes
    operacionActual = resultado.toString();
    operadorPendiente = null;
    resultadoAnterior = null;
    // Actualiza la pantalla con el resultado
    actualizarPantalla();
}

//? Función para agregar un punto decimal a la operación actual
function agregarDecimal() {
    // Solo agrega el punto si no hay ya uno en la operación actual
    if (!operacionActual.includes('.')) {
        operacionActual += '.';
        actualizarPantalla();
    }
}

//? Función para limpiar la operación actual y los operadores/resultados pendientes
function limpiar() {
    operacionActual = '';
    operadorPendiente = null;
    resultadoAnterior = null;
    actualizarPantalla();
}

// Inicializa la pantalla mostrando '0'
actualizarPantalla();