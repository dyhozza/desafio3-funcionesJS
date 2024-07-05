// REQUERIMIENTO 2

/* Se tiene como base el siguiente ejercicio que cambia el color de fondo de un elemento de HTML al hacerle click

function pintar(){
    ele.style.backgroundColor = 'yellow'
  }
  const ele = document.getElementById("ele1")
  ele.addEventListener("click", pintar);
*/

// Modifica la función para que reciba el elemento clickeado de forma de no tener que seleccionarlo nuevamente dentro de la función

function pintar(element, color = 'green') {
    element.style.backgroundColor = color;
  }
  const ele = document.getElementById("ele1");
  ele.addEventListener("click", () =>
  {pintar(ele, 'yellow');
  });




