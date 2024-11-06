let pantalla = document.getElementById('pantalla');

// Variables para almacenar la operación actual, el operador pendiente y el resultado anterior
let operacionActual = '';
let operadorPendiente = null;
let resultadoAnterior = null;

//? Función para actualizar la pantalla con la operación actual o mostrar '0' si está vacía
function actualizarPantalla() {
    pantalla.textContent = operacionActual || '0';
    // Ajuste de tamaño dinámico del texto
    if (pantalla.innerText.length > 10) {
        pantalla.style.fontSize = "18px"; // Reduce el tamaño si es muy largo
    } else if (pantalla.innerText.length > 5) {
        pantalla.style.fontSize = "24px"; // Tamaño intermedio para números medianos
    } else {
        pantalla.style.fontSize = "32px"; // Tamaño grande para números cortos
    }
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

function calcularFuncion(funcion) {
    const pantalla = document.getElementById("pantalla");
    const valor = parseFloat(pantalla.innerText);

    let resultado;
    switch (funcion) {
        case 'sin':
            resultado = Math.sin(valor);
            break;
        case 'cos':
            resultado = Math.cos(valor);
            break;
        case 'tan':
            resultado = Math.tan(valor);
            break;
        case 'asin':
            resultado = Math.asin(valor);
            break;
        case 'acos':
            resultado = Math.acos(valor);
            break;
        case 'atan':
            resultado = Math.atan(valor);
            break;
        case 'sinh':
            resultado = Math.sinh(valor);
            break;
        case 'cosh':
            resultado = Math.cosh(valor);
            break;
        case 'tanh':
            resultado = Math.tanh(valor);
            break;
        case 'log':
            resultado = Math.log10(valor);
            break;
        case 'exp':
            resultado = Math.exp(valor);
            break;
        case 'sqrt':
            resultado = Math.sqrt(valor);
            break;
        case 'cbrt':
            resultado = Math.cbrt(valor);
            break;
        case 'pow':
            const exponente = prompt("Ingrese el exponente:");
            resultado = Math.pow(valor, parseFloat(exponente));
            break;
        case 'factorial':
            resultado = factorial(valor);
            break;
        case 'pi':
            resultado = Math.PI;
            break;
        case 'e':
            resultado = Math.E;
            break;
        default:
            resultado = "Error";
    }
    operacionActual = resultado.toString();
    operadorPendiente = null;
    resultadoAnterior = null;
    actualizarPantalla();
}

function factorial(n) {
    if (n < 0) return "Error";
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
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

function toggleCientifica() {
    const calculadora = document.getElementById('calculadora');
    const botonesCientificos = document.getElementById('grupo-cientifico');
    const boton = document.getElementById('boton-cientifica');

    if (calculadora.classList.contains('cientifica')) {
        calculadora.classList.remove('cientifica');
        botonesCientificos.classList.remove('visible');
        boton.textContent = 'Modo Científico';
    } else {
        calculadora.classList.add('cientifica');
        botonesCientificos.classList.add('visible');
        boton.textContent = 'Modo Estándar';
    }
}

// Inicializa la pantalla mostrando '0'
actualizarPantalla();