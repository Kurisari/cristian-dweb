function validarEdad(){
    document.getElementById("edad");
    console.log(edad.value);
    if(edad.value < 18){
        alert("Usted es menor de edad");
    } else {
        alert("Usted es mayor de edad");
    }
}