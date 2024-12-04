(function () {
    'use strict'

    var form = document.getElementById('registrationForm')
    var nameInput = document.getElementById('name')
    var passwordInput = document.getElementById('password')

    // Validación del nombre
    function validateName() {
        var nameValue = nameInput.value.trim()
        var words = nameValue.split(/\s+/)
        var isValid = words.length >= 2 && words.length <= 4 && words.every(word => isNaN(word))

        if (!isValid) {
            nameInput.setCustomValidity('El nombre debe tener entre 2 y 4 palabras y no contener números.')
        } else {
            nameInput.setCustomValidity('')
        }
    }

    // Validación de la contraseña
    function validatePassword() {
        var passwordValue = passwordInput.value
        var isValid = passwordValue.length >= 8 && /[A-Z]/.test(passwordValue) && /[a-z]/.test(passwordValue)

        if (!isValid) {
            passwordInput.setCustomValidity('La contraseña debe tener al menos 8 caracteres, una letra mayúscula y una letra minúscula.')
        } else {
            passwordInput.setCustomValidity('')
        }
    }

    // Eventos de entrada para validaciones
    nameInput.addEventListener('input', validateName)
    passwordInput.addEventListener('input', validatePassword)

    // Evento de envío del formulario
    form.addEventListener('submit', function (event) {
        validateName()
        validatePassword()
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            // Aquí puedes agregar el código para enviar los datos del formulario
            console.log('Formulario enviado')
            alert('Formulario enviado con éxito!')
        }

        form.classList.add('was-validated')
    }, false)
})()