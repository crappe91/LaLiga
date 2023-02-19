//Personalizar tema claro / oscuro

function switchTheme() {
    var button = document.getElementById("switch");
    if (button.innerHTML === "Dark Theme") {
        button.innerHTML = "Light Theme";
        document.body.classList.add("oscuro");
        button.classList.remove("btn-light");
        button.classList.add("btn-dark");
        button.classList.add("active");
    } else {
        button.innerHTML = "Dark Theme";

        document.body.classList.remove("oscuro");
        button.classList.remove("btn-dark");
        button.classList.add("btn-light");
        button.classList.remove("active");
    }
}

document.getElementById("switch").addEventListener("click", switchTheme);


// Personalizar nombre de usuario en Bienvenida


const nombreUsuario = JSON.parse(localStorage.getItem("user"));

const nombreH1 = document.getElementById('bienvenido');

nombreH1.textContent = `¡Bienvenido ${nombreUsuario.nombre}!`;



