var num1 = 0;
var num2 = 0;
var result = 0;

function suma(){
    num1 = parseInt(prompt("Ingresa un número para sumar"));
    num2 = parseInt(prompt("Ingresa el segundo número para sumar"));
    
    result = num1 + num2;

    alert("El resultado fue " + result);
}