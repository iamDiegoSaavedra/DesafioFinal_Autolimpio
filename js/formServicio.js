window.addEventListener("DOMContentLoaded", (loadEvent) => {
    $("header").load("include/header.html");
    $("footer").load("include/footer.html");
});


//Validar Formulario Servicio Lavado
document.querySelector("#form-servicioLavado").addEventListener("click", (evento) => {

    // reviso si están checkeados los servicios
    const lavadoExterior    = $("#lavadoExterior").prop("checked");
    const lavadoMotor       = $("#lavadoMotor").prop("checked");

    // creo variable para hacer cálculo
    let montoNeto           = 0;

    if( lavadoExterior ) {
        montoNeto = montoNeto + 7000;
    }

    if( lavadoMotor ) {
        montoNeto = montoNeto + 5000;
    }

    // cálculo impuesto y total 
    const impuesto  = montoNeto * 0.19;
    const total     = montoNeto + impuesto;

    // cargo los datos a pantalla 
    document.getElementById("neto").innerHTML   = `<span>$ ${montoNeto}</span>`;
    document.getElementById("iva").innerHTML    = `<span>$ ${impuesto}</span>`;
    document.getElementById("total").innerHTML  = `<span>$ ${total}</span>`;

});


//Fomulario Cliente
document.querySelector("#btnCliente").addEventListener("click", (e) => {

    const nombre     = document.getElementById("nombreCli").value; 
    const apellido   = document.getElementById("apellidoCli").value;
    const rut        = document.getElementById("rutCli").value; 
    const dv         = document.getElementById("dgVCli").value;
    const direccion  = document.getElementById("direccionCli").value; 
    const numeroDir  = document.getElementById("numdireccion").value;
    const region     = document.getElementById("sel-region").value; 
    const comuna     = document.getElementById("comuna").value;
    
    const dvValidos     =[0,1,2,3,4,5,6,7,8,9,'k','K'];
    const expresionRegular = /[a-z ]/i;
    const mensajes = [];

    const validacionNombre = validarNombre(nombre);
	if( validacionNombre.length > 0 ) {
		mensajes.push( validacionNombre );
	}

    const validacionApellido = validarApellido(apellido);
	if( validacionApellido.length > 0 ) {
		mensajes.push( validacionApellido );
	}

    const validacionRut = validarRut(rut);
    if( validacionRut.length > 0 ){
        mensajes.push( validacionRut );
    }

    const validacionDv = validarDV(dv);
    if( validacionDv.length > 0 ){
        mensajes.push( validacionDv );
    }

    const validacionDireccion = validarDireccion(direccion);
    if(validacionDireccion.length > 0){
        mensajes.push(validacionDireccion);
    }

    const validacionNumeroDireccion = validarNumeroDireccion(numeroDir);
    if(validacionNumeroDireccion.length > 0){
        mensajes.push(validacionNumeroDireccion);
    }

    const validacionRegion = validarRegion(region);
    if(validacionRegion.length > 0){
        mensajes.push(validacionRegion);
    }
    
    const validacionComuna = validarComuna(comuna);
    if(validacionComuna.length > 0){
        mensajes.push(validacionComuna);
    }

    if( mensajes.length == 0 ) {
		guardarDatosContacto(nombre, apellido, rut, dv, direccion, numeroDir, region, comuna);
	} else {
	    const mostraMensajes = document.getElementById("mensajes")
        mostraMensajes.innerHTML = mensajes.join(", ");
        mostraMensajes.classList.remove("d-none");    
	}
    

});

function validarNombre(nombre) {
	if(nombre.length > 3) {
		return "";
	} else {
		return "El nombre es muy corto.";
	}
};

function validarApellido(apellido) {
	if(apellido.length > 3) {
		return "";
	} else {
		return "El apellido es muy corto";
	}
};

function validarRut(rut){
    if(rutCli == "" ){
        return "Escriba un Rut";
    }
    else if (rutCli < 1000000 && rutCli > 99999999){
        return "Escriba un Rut Valido";
    }
    else{
        return "";
    }
};

function validarDV(dv){
    if(dv.length > 1  && !dvValidos.includes(dv)){
        return "Escriba Digito Verificador Valido";
    }
    else{
        return "";
    }
};

function validarDireccion(direccion){
    if(direccion == "" ){
        return "direccion no Valido";        
    }
    else{
        return "";
    }
};

function validarNumeroDireccion(numeroDir){
    if(numeroDir == "" ){
        return "número no Valido";        
    }
    else{
        return "";
    }
};

function validarRegion(region){
    if(region == "" || region == "0"){
        return "Selección Region Valida";
    }
    else{
        return "";
    }
};

function validarComuna(comuna){
    if(comuna == "" || comuna == "0"){
        return "Selección Comuna no Valida";
    }
    else{
        return "";
    }
};
//fin form-Clientes



//Validar Vehículo
document.querySelector("#form-vehiculos").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const tipo      = document.getElementById("TipoVehiculo").value; 
    const marca     = document.getElementById("marca").value;
    const modelo    = document.getElementById("modelo").value;
    const year      = document.getElementById("year").value;
    const RevisionTecnica = $('input:radio[name=rtecnicas]:checked').val();
    const mensajeVehiculo = [];

    const validacionTipo = validarTipo(tipo);
	if( validacionTipo.length > 0 ) {
		mensajeVehiculo.push( validacionTipo );
	}

    const validacionMarca = validarMarca(marca);
	if( validacionMarca.length > 0 ) {
		mensajeVehiculo.push( validacionMarca );
	}

    const validacionModelo = validarModelo(modelo);
    if( validacionModelo.length > 0 ){
        mensajeVehiculo.push( validacionModelo );
    }
   
    const validacionAno = validarAno(year);
    if( validacionAno.length > 0 ){
        mensajeVehiculo.push( validacionAno );
    }

    const validacionCheckRT = validarCheckRT();
    if( validacionCheckRT.length > 0 ){
        mensajeVehiculo.push( validacionCheckRT );
    }

    if( mensajeVehiculo.length == 0 ) {
		guardarDatosContacto(tipo, marca, modelo, year, RevisionTecnica );
	} else {
	    const mostraMensajeVehiculo = document.getElementById("mensajeVehiculo")
        mostraMensajeVehiculo.innerHTML = mensajeVehiculo.join(", ");
        mostraMensajeVehiculo.classList.remove("d-none");
	}

});

function validarTipo(tipo) {
    if(tipo == "" || tipo == "0"){
        return "Selección no Valida";
    }
    else{
        return "";
    }
};

function validarMarca(marca) {
	if(marca.length < 3 ) {
		return "Marca no valida";
	}
    else{
		return "";
	}
};

function validarModelo(modelo){
    if(modelo == "" ){
        return "Modelo no valido";
    }
    else{
        return "";
    }
};

function validarAno(year){
    if(year.value == "" || year < 1900 ){
        return "Año no valido";
    }
    else{
        return "";
    }
};

function validarCheckRT(RevisionTecnica){

    if (RevisionTecnica == "") {
        return "Se debe seleccionar un campo Revisión Técnica";

    } else {
        return "";
    }
};
//Fin validacion form-Vehiculo

//validacion form-personal
document.querySelector("#form-personal").addEventListener("submit", (ev) => {
    ev.preventDefault();

    const encargadoLavado    = document.getElementById("encargadoLavado").value;
    //const selectPersonal = $("encargadoLavado option:select").val(); 
    const fecha              = document.getElementById("fecha").value;
    const hora               = document.getElementById("hora").value;
    const mensajePersonal    = [];


    const validacionPersonal = validarSeleccionPersonal(encargadoLavado);
    if( validacionPersonal.length > 0 ){
        mensajePersonal.push( validacionPersonal );
    }
   
    const validacionFecha = validarFecha(fecha);
    if( validacionFecha.length > 0 ){
        mensajePersonal.push( validacionFecha);
    }

    const validacionHora = validarHora(hora);
    if( validacionHora.length > 0 ){
        mensajePersonal.push( validacionHora );
    }

    if( mensajePersonal.length == 0 ) {
		guardarDatosPersonaLavado(encargadoLavado, fecha, hora);
	} else {
	    const mostrarMensajePersonal = document.getElementById("mensajePersonal")
        mostrarMensajePersonal.innerHTML = mensajePersonal.join(", ");
        mostrarMensajePersonal.classList.remove("d-none");
	}    

});

function validarSeleccionPersonal(encargadoLavado){
    if(encargadoLavado == "" || encargadoLavado == "0"){
        return "Selección de Personal no Valida";
    }
    else{
        return "";
    }
}

function validarFecha(fecha){
    if(fecha == ""){
        return "Fecha no valida";
    }
    else{
        return "";
    }
}

function validarHora(hora){
    if(hora == "00:00:00"){
        return "hora no valida";
    }
    else{
        return "";
    }
}