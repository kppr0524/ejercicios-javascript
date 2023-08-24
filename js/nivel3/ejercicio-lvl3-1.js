/**
 * variables gobales
 */

const btnEjercicioUno = document.getElementById("btnEjercicioUno");

/**
 * Ejercicio 1: ciclo for
 */

function ejercicioUno() {
  let escalones = 5;
  let piramide = "";
  //i siempre empieza en 0 - i++ es igual a i = i + 1
  for (let i = 0; i < escalones; i++) {
    piramide = piramide + "*";
  }
  console.log(piramide);
}

/*
 * eventos click es igual a tener oneclick en el html
 */

btnEjercicioUno.onclick = function () {
    ejercicioUno();
  };