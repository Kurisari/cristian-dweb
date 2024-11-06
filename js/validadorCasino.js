function validarEdad(){
    var edad = parseInt(prompt("Ingrese su edad"));
    if(edad < 0){
        alert("Esa edad no existe");
    } else if (edad > 0 && edad < 18){
        alert("No puedes entrar");
    } else if(edad >= 18 && edad < 40){
        alert("Adelante, pasa")
    } else if(edad >= 40 && edad < 99){
        alert("Qué hace aquí señor?")
    } else {
        alert("Debería estar escribiendo su testamento, no aquí!")
    }
}