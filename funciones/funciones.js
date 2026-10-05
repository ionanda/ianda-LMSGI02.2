function darBienvenida() {
  alert("Kaixo! Bienvenido a la web del Gran Premio de Mónaco de F1.");
}

function preguntarPiloto() {
  var piloto = prompt("¿Cuál es tu piloto favorito?", "Fernando Alonso");
  if (piloto != null && piloto != "") {
    document.getElementById("mensajePiloto").innerHTML = "Tu piloto favorito es: " + piloto;
  }
}

function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  if (nombre.length == 0) {
    alert("Usuario está vacío");
    return false;
  }
  alert("Formulario enviado correctamente");
  return true;
}
