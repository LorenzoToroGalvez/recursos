let selectRol = document.getElementById("selectRol");
      
function Activar() {
    let inputOrganizacion = document.getElementById("InputOrganizacion");
    let rol = selectRol.options[selectRol.selectedIndex].text;

    if(rol === "Creador de Eventos"){
        inputOrganizacion.disabled = false;
    }else{
        inputOrganizacion.disabled = true;
    }
}

selectRol.onchange = Activar;
selectRol.onselectionchange = Activar;
