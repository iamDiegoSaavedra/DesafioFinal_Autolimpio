window.addEventListener("DOMContentLoaded", (loadEvent) => {
    $("header").load("include/header.html");
    $("footer").load("include/footer.html");
});

document.querySelector("#contacto").addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre     = document.getElementById("nombre").value; 
    const email      = document.getElementById("email").value;
    const motivo     = $('input:radio[name=motivo]:checked').val();
    const textmensaje = document.getElementById("txtMensajes").value;
    //const emailValido     =['@', '.'];
    const mensajeContacto = [];

    const validacionNombre = validarNombre(nombre);
	if( validacionNombre.length > 0 ) {
		mensajeContacto.push( validacionNombre );
	}

    const validacionEmail = validarEmail(email);
	if( validacionEmail.length > 0 ) {
		mensajeContacto.push( validacionEmail );
	}

    const validacionMotivo = validarMotivo(motivo);
    if(validacionMotivo.length > 0 ){
        mensajeContacto.push( validacionMotivo );
    }

    const validacionMensaje = validarMensaje(textmensaje);
    if(validacionMensaje.length > 0 ){
        mensajeContacto.push( validacionMensaje );
    }

    if( mensajeContacto.length == 0 ) {
		guardarDatosContacto(nombre, email, motivo, textmensaje );
	} else {
	    const mostrarMensajeContacto = document.getElementById("mensajeContacto")
        mostrarMensajeContacto.innerHTML = mensajeContacto.join(", ");
        mostrarMensajeContacto.classList.remove("d-none");
	}
  
});

function validarNombre(nombre) {
	if(nombre.length > 3) {
		return "";
	} else {
		return "Escriba Nombre Valido";
	}
};

function validarEmail(email){
    if(email == "" || email.length < 8) {
		return "Escriba un Mail valido";
	} else {
		return "";
	}
};

function validarMotivo(motivo){

    if (motivo == "") {
        return "Se debe seleccionar un Motivo";

    } else {
        return "";
    }
};

function validarMensaje(textmensaje) {
	if(textmensaje == "") {
		return "Escriba un mensaje";
	} else {
		return "";
	}
};