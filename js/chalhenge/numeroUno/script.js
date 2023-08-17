/**
 *  1 - Crear estructura básica del HTML
 *  2 - Crear un h1 con el título "solicitud de datos"
 *  3 - crear un botón que diga solicitar datos
 *  4 - el botón debe llamar los siguientes prompt
 *  5 - nombre - cédula - direccion - edad - telefono -
 *      tipo de sangre - estado civil
 *  6 - en el HTML se deben mostrar todos estos datos
 *  7 - los textos deben tener el mismo tamaño de fuente de 20px
 *      y cada texto debe tener un color diferente
 *  8 - validar que ningun dato esté vacío null o NaN
 *  9 - sacar un alert("Datos incompletos") no se mostraría
 *      ningun dato en pantalla
 *
 */

const botonUno = document.getElementById("botonUno");

function isNull(valores) {
    return valores === null || valores === "";
  }

function challenge() {
  //datos ingresados por el usuario
  const nombre = prompt("Ingrese su nombre: ");
  const cedula = prompt("Ingrese su cédula: ");
  const direccion = prompt("Ingrese su direción: ");
  const edad = parseInt(prompt("Ingrese su edad: "));
  const telefono = prompt("Ingrese su teléfono: ");
  const tiposangre = prompt("Ingrese su tipo de sangre: ");
  const estadocivil = prompt("Ingrese su estado civil: ");
 
  if (
    isNull(nombre) ||
    isNaN(cedula) ||
    isNull(direccion) ||
    isNaN(edad) ||
    isNaN(telefono) ||
    isNull(tiposangre) ||
    isNull(estadocivil)
  ) {
    alert("Datos incompletos, por favor ingrese todos los datos");
  }
  //Etiquetas H2 o sobrescribir en el html
  const nombreHTML = document.getElementById("nombre");
  const cedulaHTML = document.getElementById("cedula");
  const direccionHTML = document.getElementById("direccion");
  const edadHTML = document.getElementById("edad");
  const telefonoHTML = document.getElementById("telefono");
  const tiposangreHTML = document.getElementById("tiposangre");
  const estadocivilHTML = document.getElementById("estadocivil");

  //Guardar datos Html
  nombreHTML.innerHTML = "Tu nombre es: " + nombre;
  cedulaHTML.innerHTML = "Tu cédula es: " + cedula;
  direccionHTML.innerHTML = "Tu dirección es: " + direccion;
  edadHTML.innerHTML = "Tu edad es: " + edad;
  telefonoHTML.innerHTML = "Tu edad es: " + telefono;
  tiposangreHTML.innerHTML = "Tu edad es: " + tiposangre;
  estadocivilHTML.innerHTML = "Tu edad es: " + estadocivil;
}

botonUno.onclick = function () {
  challenge();
};
