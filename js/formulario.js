document.querySelector("#form-clientes").addEventListener("submit", (evento) => {

    const nombreCli     = document.getElementById("nombreCli").value; 
    const apellidoCli   = document.getElementById("apellidoCli").value;
    const rutCli        = document.getElementById("nombreCli").value; 
    const dvCli         = document.getElementById("dgVCli").value;
    const direccionCli  = document.getElementById("direccionCli").value; 
    const numeroDirCli  = document.getElementById("numDirCli").value;
    const regionCli     = document.getElementById("sel-region").value; 
    const comunaCli     = document.getElementById("comuna").value;

});

document.querySelector("#form-vehiculos").addEventListener("submit", (evento) => {
    const tipoVehiculo  = document.getElementById("TipoVehiculo").value; 
    const marca         = document.getElementById("marca").value;
    const modelo        = document.getElementById("modelo").value;
    const year          = document.getElementById("year").value;
    const checkRTecnica = document.getElementById("checkRevisionTecnica").value;
});


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

document.querySelector("#form-servicioLavado").addEventListener("submit", (e => {
    e.preventDefault();
    const encargadoLavado    = document.getElementById("encargadoLavado").value; 
    const fecha              = document.getElementById("fecha").value;
    const hora               = document.getElementById("hora").value;

    //let expRegFecha = /^(0[1-9]|1\d|2\d|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
    //let expRegHora = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

    if(encargadoLavado.value == 0|| encargadoLavado.value== "")
    {
        alert("Seleccion no valida")
    }

    if( fecha.value == "")
    {
        alert("fecha no valida")
    }
    else if(expRegFecha.test(fecha.value))
    {
        alert("fecha no valida")
    }

    if( hora.value == "" || hora.value == "00:00:00" )
    {
        alert("hora no valida")
    }

    return false;

});