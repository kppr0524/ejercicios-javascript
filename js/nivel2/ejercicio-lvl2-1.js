//Variables Globales
const btnEjercicioUno = document.getElementById("btnEjercicioUno");
const btnEjercicioDos = document.getElementById("btnEjercicioDos");
const btnEjercicioTres = document.getElementById("btnEjercicioTres");
const btnEjercicioCuatro = document.getElementById("btnEjercicioCuatro");

/**
 * Ejercicio 1
 * DOM (Document Object Model)
 */

function ejercicioUno() {
  const numero1 = parseFloat(prompt("Ingresa el número 1: "));
  const numero2 = parseFloat(prompt("Ingrese el número 2: "));
  const suma = numero1 + numero2;
  alert(suma);
}

/**
 * Ejercicio 2
 * Operaciones matemáticas (suma - resta - multiplicacion - division)
 */

function ejercicioDos() {
  const operacion = parseInt(
    prompt(
      "OPERACIONES MATEMATICAS BÁSICAS: \n Ingresa 1 para sumar. \n Ingresa 2 para restar. \n Ingresa 3 para multiplicar \n Ingresa 4 para dividir."
    )
  );
  //validamos que la op no sea errada o mayor a 4 o menos que 1 operacion === NaN
  if (isNaN(operacion) || operacion > 4 || operacion < 1) {
    return alert("Opción inválida favor ingresar entre 1 y 4");
  }
  //Pedimos los números
  const num1 = parseFloat(prompt("Ingrese numero 1"));
  const num2 = parseFloat(prompt("Ingrese numero 2"));
  let resultado = 0;

  //Validamos que los números no sean errados
  if (isNaN(num1) || isNaN(num2)) {
    return alert("Favor ingresar solo números");
  }

  //Si todo lo anterior esta OK, hacemos las operaciones matematicas
  switch (operaciones) {
    case 1:
      resultado = num1 + num2;
      alert("El resultado de la suma es: " + resultado);
      break;
    case 2:
      resultado = num1 - num2;
      alert(resultado);
      break;
    case 3:
      resultado = num1 * num2;
      alert("El resultado de la multiplicación es: " + resultado);
      break;
    case 4:
      resultado = num1 / num2;
      alert("El resultado de la división es: " + resultado);
      break;
  }
}

/**
 * Ejercicio 3
 * Datos personales
 */

function ejercicioTres() {
  //datos ingresados por el usuario
  const nombre = prompt("Ingrese su nombre: ");
  const cedula = prompt("Ingrese su cédula: ");
  const edad = parseInt(prompt("Ingrese su edad: "));

  //Etiquetas H2 o sobrescribir en el html
  const nombreHTML = document.getElementById("nombre");
  const cedulaHTML = document.getElementById("cedula");
  const edadHTML = document.getElementById("edad");

  //Guardar datos Html
  nombreHTML.innerHTML = "Tu nombre es: " + nombre;
  cedulaHTML.innerHTML = "Tu cédula es: " + cedula;
  edadHTML.innerHTML = "Tu edad es: " + edad;
}

/**
 * Ejercicio 4
 * Datos personales
 */

/*if (!localStorage.getItem("nombre2")) {
  console.log("entro 1")
} else {
  console.log("entro 2");
}*/

if (localStorage.getItem("nombre2")) {
  const nombre2HTML = document.getElementById("nombre2");
  const cedula2HTML = document.getElementById("cedula2");
  const edad2HTML = document.getElementById("edad2");
  nombre2HTML.innerHTML = "Tu nombre es: " + localStorage.getItem("nombre2");
  cedula2HTML.innerHTML = "Tu cédula es: " + localStorage.getItem("cedula2");
  edad2HTML.innerHTML = "Tu edad es: " + localStorage.getItem("edad2");
}

function ejercicioCuatro() {
  //datos ingresados por el usuario
  const nombre2 = prompt("Ingrese su nombre: ");
  const cedula2 = prompt("Ingrese su cédula: ");
  const edad2 = parseInt(prompt("Ingrese su edad: "));

  //Etiquetas H2 o sobrescribir en el html
  const nombre2HTML = document.getElementById("nombre2");
  const cedula2HTML = document.getElementById("cedula2");
  const edad2HTML = document.getElementById("edad2");

  //Guardar datos Html
  nombre2HTML.innerHTML = "Tu nombre es: " + localStorage.getItem("nombre2");
  cedula2HTML.innerHTML = "Tu cédula es: " + cedula2;
  edad2HTML.innerHTML = "Tu edad es: " + edad2;

  localStorage.setItem("nombre2", nombre2);
  localStorage.setItem("cedula2", cedula2);
  localStorage.setItem("edad2", edad2);
}

//Eventos click
btnEjercicioUno.onclick = function () {
  ejercicioUno();
};

btnEjercicioDos.onclick = function () {
  ejercicioDos();
};

btnEjercicioTres.onclick = function () {
  ejercicioTres();
};

btnEjercicioCuatro.onclick = function () {
  ejercicioCuatro();
};
