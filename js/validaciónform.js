function validaformulario(){

    var nombre = document.getElementById("txtnombre").value;
    var apellido = document.getElementById("txtapellido").value;
    var email = document.getElementById("txtemail").value;
    var seleccion = document.getElementById("select2").value;
    var mensaje = document.getElementById("txtmensaje").value;

    if((nombre.length != 0)&&(apellido.length != 0)&&(email.length != 0)&&(nombre.length != 0)&&(seleccion != "")
    &&(mensaje.length != 0)){
        var confirmacion = confirm("¿Desea enviar su mensaje?");
        if (confirmacion) {
            alert("Mensaje enviado");
            return true;
        } else {
            alert("Su mensaje no ha sido enviado");
            return false;
        }
    }else{
    if(nombre.length == 0) {
        alert("Debe ingresar su Nombre");
        document.getElementById("txtnombre").focus();
        return false;
    }else if(apellido.length == 0){
        alert("Debe ingresar su Apellido");
        document.getElementById("txtapellido").focus();
        return false;
    }else if(email.lenght == 0){
        alert("Debe ingresar su Email");
        document.getElementById("txtemail").focus();
        return false;
    }else if(seleccion == ""){
        alert("Debe seleccionar un motivo de mensaje");
        document.getElementById("select2").focus();
        return false;
    }else if (mensaje == 0){
        alert("Debe ingresar Mensaje");
        document.getElementById("txtmensaje").focus();
        return false;
    }
}
}

