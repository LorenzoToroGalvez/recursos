$(document).ready(function(){
    $(".mul-select").select2({
            placeholder: "",
            tags: true,
            tokenSeparators: ['/',',',';'," "] 
    });
})
      
function Activar() {
	let radioEventos = document.getElementById("radioEventos");
	let radioUsuarios = document.getElementById("radioUsuarios");

	let titulo = document.getElementById("titulo");
	let descripcion = document.getElementById("descripcion");

	let anioevento = document.getElementById("anioevento");
	let mes = document.getElementById("mes");
	let fasedia1 = document.getElementById("fasedia1");
	let fasedia2 = document.getElementById("fasedia2");
	let fasedia3 = document.getElementById("fasedia3");
	let fasedia4 = document.getElementById("fasedia4");
	let preciominimo = document.getElementById("preciominimo");
	let preciomaximo = document.getElementById("preciomaximo");
	let modalidad1 = document.getElementById("modalidad1");
	let modalidad2 = document.getElementById("modalidad2");
	let aforo = document.getElementById("aforo");
	let ciudadevento = document.getElementById("ciudadevento");
	let etiquetas = document.getElementById("etiquetas");

	let nombre = document.getElementById("nombre");
	let apellidos = document.getElementById("apellidos");
	let sexo1 = document.getElementById("sexo1");
	let sexo2 = document.getElementById("sexo2");
	let sexo3 = document.getElementById("sexo3");
	let edad = document.getElementById("edad");
	let ciudadusuario = document.getElementById("ciudadusuario");
	let inscritoa = document.getElementById("inscritoa");
	let aniousuario = document.getElementById("aniousuario");
	let gastominimo = document.getElementById("gastominimo");
	let gastomaximo = document.getElementById("gastomaximo");
	let asistencia1 = document.getElementById("asistencia1");
	let asistencia2 = document.getElementById("asistencia2");
	let asistencia3 = document.getElementById("asistencia3");
	
	if (radioEventos.checked) {
		titulo.disabled = false;
		descripcion.disabled = false;
		anioevento.disabled = false;
		mes.disabled = false;
		fasedia1.disabled = false;
		fasedia2.disabled = false;
		fasedia3.disabled = false;
		fasedia4.disabled = false;
		preciominimo.disabled = false;
		preciomaximo.disabled = false;
		modalidad1.disabled = false;
		modalidad2.disabled = false;
		aforo.disabled = false;
		ciudadevento.disabled = false;
		etiquetas.disabled = false;

		nombre.disabled = true;
		apellidos.disabled = true;
		sexo1.disabled = true;
		sexo2.disabled = true;
		sexo3.disabled = true;
		edad.disabled = true;
		ciudadusuario.disabled = true;
		inscritoa.disabled = true;
		aniousuario.disabled = true;
		gastominimo.disabled = true;
		gastomaximo.disabled = true;
		asistencia1.disabled = true;
		asistencia2.disabled = true;
		asistencia3.disabled = true;
	} else if (radioUsuarios.checked) {
		titulo.disabled = false;
		descripcion.disabled = false;
		nombre.disabled = false;
		apellidos.disabled = false;
		sexo1.disabled = false;
		sexo2.disabled = false;
		sexo3.disabled = false;
		edad.disabled = false;
		ciudadusuario.disabled = false;
		inscritoa.disabled = false;
		aniousuario.disabled = false;
		gastominimo.disabled = false;
		gastomaximo.disabled = false;
		asistencia1.disabled = false;
		asistencia2.disabled = false;
		asistencia3.disabled = false;

		anioevento.value = "";
		mes.selectedIndex = 0;
		fasedia1.reset();
		fasedia2.reset();
		fasedia3.reset();
		fasedia4.reset();
		preciominimo.reset();
		preciomaximo.reset();
		modalidad1.reset();
		modalidad2.reset();
		aforo.reset();
		ciudadevento.selectedIndex = 0;
		etiquetas.reset();
		
		anioevento.disabled = true;
		mes.disabled = true;
		fasedia1.disabled = true;
		fasedia2.disabled = true;
		fasedia3.disabled = true;
		fasedia4.disabled = true;
		preciominimo.disabled = true;
		preciomaximo.disabled = true;
		modalidad1.disabled = true;
		modalidad2.disabled = true;
		aforo.disabled = true;
		ciudadevento.disabled = true;
		etiquetas.disabled = true;
		

	}
}
