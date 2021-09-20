function Confirmar(){
    var confirmacion = confirm("Está a punto de abandonar la página. ¿Desea continuar?");
    if (confirmacion) {
        return true;
    } else {
        return false;
    }
  }
