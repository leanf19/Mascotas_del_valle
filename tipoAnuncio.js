function cambiarPerdidos() {

    //obtengo el tag body
    var etiquetaBody = document.getElementById("estilo");
    //obtengo el nombre del class del tag body
    var claseBody = document.getElementsByTagName('body')[0].className;


    switch (claseBody) {

        case "login": {
            etiquetaBody.classList.remove("login");
            etiquetaBody.classList.add("perdidos");
            break;
        }
        case "encontrados": {
            etiquetaBody.classList.remove("encontrados");
            etiquetaBody.classList.add("perdidos");
            break;
        }
        case "en-adopcion": {
            etiquetaBody.classList.remove("en-adopcion");
            etiquetaBody.classList.add("perdidos");
            break;
        }

    }
}


function cambiarEncontrados() {

    //obtengo el tag body
    var etiquetaBody = document.getElementById("estilo");
    //obtengo el nombre del class del tag body
    var claseBody = document.getElementsByTagName('body')[0].className;
    switch (claseBody) {


        case "login": {
            etiquetaBody.classList.remove("login");
            etiquetaBody.classList.add("encontrados");
            break;
        }
        case "perdidos": {
            etiquetaBody.classList.remove("perdidos");
            etiquetaBody.classList.add("encontrados");
            break;
        }
        case "en-adopcion": {
            etiquetaBody.classList.remove("en-adopcion");
            etiquetaBody.classList.add("encontrados");
            break;
        }

    }
}

function cambiarEnAdopcion() {

    //obtengo el tag body
    var etiquetaBody = document.getElementById("estilo");
    //obtengo el nombre del class del tag body
    var claseBody = document.getElementsByTagName('body')[0].className;
    switch (claseBody) {


        case "login": {
            etiquetaBody.classList.remove("login");
            etiquetaBody.classList.add("en-adopcion");
            break;
        }
        case "perdidos": {
            etiquetaBody.classList.remove("perdidos");
            etiquetaBody.classList.add("en-adopcion");
            break;
        }
        case "encontrados": {
            etiquetaBody.classList.remove("encontrados");
            etiquetaBody.classList.add("en-adopcion");
            break;
        }

    }
}