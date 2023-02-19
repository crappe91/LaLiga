const formulario = document.getElementById('formulario__register'); // Obtener el formulario



formulario.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});



//-------LOCAL STORAGE------!


function checkInputs() {

    const verdadero = true;


    var nombreValidacion = document.getElementById("nombre").value;
    var correoValidacion = document.getElementById("email").value;
    var passwordValidacion = document.getElementById("pswd").value;
    var confirmPasswordValidacion = document.getElementById("pswd2").value;

    // Validar el campo nombre
    var letras = /^[a-zA-Z]+$/;
  
    if (!nombreValidacion.match(letras)) {
        alert("El campo nombre solo puede contener letras.");
        verdadero = false;
    }

    // Validar el campo correo
    var correoExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoValidacion.match(correoExp)) {
        alert("El campo correo electrónico debe tener un formato válido.");
        verdadero = false;
    }

    // Validar el campo contraseña
    var passwordExp = /^[a-zA-Z0-9]{4,}$/;
    if (!passwordValidacion.match(passwordExp)) {
        alert("El campo contraseña debe tener al menos 4 caracteres y no debe contener caracteres especiales.");
        verdadero = false;
    }

    // Validar el campo repetir contraseña
    if (passwordValidacion != confirmPasswordValidacion) {
        alert("El campo repetir contraseña debe ser igual al campo contraseña.");
        verdadero = false;
    }

  

    if (verdadero) {
        var nombre = document.getElementById("nombre").value;
        var contraseña = document.getElementById("pswd").value;



        /*Guardando los datos en el LocalStorage*/
        var usuario = {
            nombre: nombre,
            contraseña: contraseña

        }

        var json = JSON.stringify(usuario);
        localStorage.setItem("user", json);
        //localStorage.setItem("contraseña", json);
        console.log("Okey");
        window.location.replace("/inicio");

    }
}