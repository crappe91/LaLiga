function enviarLogin() {
    document.getElementById("formulario__login").submit();

    InicioSesion();

  }

// const formulariologin = document.getElementById('formulario__login');

// formulariologin.addEventListener('submit', e => {
    
//     InicioSesion();
    
// });

function InicioSesion (e){
    event.preventDefault();

    var nombre = document.getElementById("nombrelogin").value;
    var contraseña = document.getElementById("pswdlogin").value;



    var user = localStorage.getItem("user");
    var datos = JSON.parse(user);
    const nombrelocal = datos.nombre;
    const contralocal = datos.contraseña;
    
    if(user==null){
        alert("Datos Incorrectos");

    }else if( nombre == nombrelocal && contraseña == contralocal){

        window.location.replace("/inicio");  
    }else{
        alert("Datos Incorrectos");
    }
}