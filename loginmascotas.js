

function validaciones() {

    var nombre = document.formulario.txtNombre.value;
    var apellido = document.formulario.txtApellido.value;
    var fecha = document.formulario.txtFecha.value;
    var email = document.formulario.txtEmail.value;
    var numero = document.formulario.txtNumero.value;
    var auxFecha = fecha.substr(0, 4);
    var esValido = true;

    if (nombre == null || nombre === "") {
        document.getElementById("txtNombre").style.borderColor = "#ef3737";
        document.getElementById("name").style.color = "#ef3737";
        esValido = false;
    } else {
        document.getElementById("txtNombre").style.borderColor = "#138613";
        document.getElementById("name").style.color = "#138613";
    }
    if (apellido === "" || apellido == null) {

        document.getElementById("txtApellido").style.borderColor = "#ef3737";
        document.getElementById("last").style.color = "#ef3737";
        esValido = false;
    } else {
        document.getElementById("txtApellido").style.borderColor = "#138613";
        document.getElementById("last").style.color = "#138613";
    }
    document.getElementById("txtLocalidad").style.borderColor = "#138613";

    if (fecha === "" || auxFecha > 2003) {
        document.getElementById("txtFecha").style.borderColor = "#ef3737";
        document.getElementById("fecha").style.color = "#ef3737";
        esValido = false;
        alert("Debes ser mayor de edad para registrarte");
    } else {

        document.getElementById("txtFecha").style.borderColor = "#138613";
        document.getElementById("fecha").style.color = "#138613";
    }
    if (email === "" || email == null || !email.includes("@")) {
        document.getElementById("txtEmail").style.borderColor = "#ef3737";
        document.getElementById("email").style.color = "#ef3737";
        esValido = false;
    } else {

        document.getElementById("txtEmail").style.borderColor = "#138613";
        document.getElementById("email").style.color = "#138613";
    }
    if (isNaN(numero)) {

        document.getElementById("txtNumero").style.borderColor = "#ef3737";
        esValido = false;
    } else {

        document.getElementById("txtNumero").style.borderColor = "#138613";
    }


    if (esValido) {
        alert("¡Usted se ha registrado con exito!");
        document.location.replace("publica_tu_anuncio.html");
    } else {
        alert("Datos incompletos");
    }
    return esValido;

}

function loginValido(){
    usuario = document.formulario.emailLogin.value;
    contra = document.formulario.contraseniaLogin.value;
//logica poco trabajada, deberia usar un arreglo para la validacion de varios usuarios
    if (contra =='contraseña1234' && usuario =='usuario@gmail.com'){
        document.formulario.submit();
        document.location.replace("publica_tu_anuncio.html");
    }
    else{
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
    }
}



function validarAnuncio(){
    var esValido = true;
    var titulo = document.formulario.txtTitulo.value;
    var unaFecha = document.formulario.txtFecha.value;
    var localidad = document.formulario.txtLocalidad.value;
    var unEmail = document.formulario.txtEmail.value;
    var descripcion = document.formulario.txtDescripcion.value;
    var claseBody = document.getElementsByTagName('body')[0].className;
    var unNro = document.formulario.txtNro.value;
    var srcImagen = document.getElementById("imagen-anuncio");
    var srcImagenDefault = "http://localhost:63342/Mascotas_del_valle/img";
    var anuncio = document.getElementById("anuncio").innerHTML;
    var botonPublicar = document.getElementById("botonRegistro")
    var otraPubli = document.getElementById("botonRegistro2")

    if ( claseBody == 'login') {
        esValido = false;
        alert("Elegi un tipo de anuncio");


    }
    if(srcImagen.src === srcImagenDefault){
        alert("Carga una foto de tu mascota!")
        esValido = false;
    }
    else{
        //Quita el atributo hidden para visibilizar la foto cargada
        srcImagen.removeAttribute("hidden");

    }
    if (titulo == null || titulo === "") {
        document.getElementById("txtTitulo").style.borderColor = "#ef3737";
        document.getElementById("titulo").style.color = "#ef3737";
        esValido = false;

    } else {
        document.getElementById("txtTitulo").style.borderColor = "#138613";
        document.getElementById("titulo").style.color = "#138613";
    }
    if (unaFecha === "" || unaFecha == null) {

        document.getElementById("txtFecha").style.borderColor = "#ef3737";
        document.getElementById("fecha").style.color = "#ef3737";
        esValido = false;
    } else {
        document.getElementById("txtFecha").style.borderColor = "#138613";
        document.getElementById("fecha").style.color = "#138613";
    }
    if (localidad === "" || localidad == null) {

        document.getElementById("txtLocalidad").style.borderColor = "#ef3737";
        document.getElementById("localidad").style.color = "#ef3737";
        esValido = false;
    } else {
        document.getElementById("txtLocalidad").style.borderColor = "#138613";
        document.getElementById("localidad").style.color = "#138613";
    }
    document.getElementById("txtNro").style.borderColor = "#138613";

    if (unEmail === "" || unEmail == null || !unEmail.includes("@")) {
        document.getElementById("txtEmail").style.borderColor = "#ef3737";
        document.getElementById("email").style.color = "#ef3737";
        esValido = false;
    } else {
        document.getElementById("txtEmail").style.borderColor = "#138613";
        document.getElementById("email").style.color = "#138613";
    }
    if (descripcion === "" || descripcion == null) {
        document.getElementById("txtDescripcion").style.borderColor = "#ef3737";
        document.getElementById("descripcion").style.color = "#ef3737";
        esValido = false;
    } else {
        document.getElementById("txtDescripcion").style.borderColor = "#138613";
        document.getElementById("descripcion").style.color = "#138613";
    }




    if (esValido) {
        alert("¡Tu anuncio ha sido publicado con exito!");
        document.getElementById("anuncio").innerHTML +='<i><h4>Titulo: '+titulo+'<br/>Fecha: '+unaFecha+'<br/>Localidad: '+localidad+'<br/>Contacto:'+unNro+'<br/>Email:'+unEmail+'<br/>Descripcion: '+descripcion+'</h4></i>';
         // document.location.replace("publica_tu_anuncio.html");
        otraPubli.removeAttribute("hidden");
        botonPublicar.setAttribute("hidden", true);

    } else {
        alert("Completa los campos obligatorios");
    }
    return esValido;

}

function cargarFoto(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
        reader.readAsDataURL(archivo );
        reader.onloadend = function () {
           document.getElementById("imagen-anuncio").src = reader.result;
        }
    }
}
function recargarPagina(){
    window.location.reload();
}