    
// REQUERIMIENTO 3
  // ASIGNAR ESTILOS DESDE JS
    // Crea 4 divs que tengan alto y ancho de 200px y de colores azul, rojo, verde y amarillo (insertar estilos con atributo style). Cada uno de los divs debe tener un identificador único.

function estiloDiv(id,color) {
    const elemento = document.getElementById(id);
    elemento.style.backgroundColor = color; //generico para usarse con valor diferenre segun el DIV
    elemento.style.width = '200px';         //con valor fijo porque quiero que aplique en todos las DIV por igual
    elemento.style.height = '200px';
    elemento.style.border = '5px solid black';
}
// defino la funcion con dos parametros
//la primera que sera con ID porque con el ID identifico el elemento que voy a acambiar
//la segunda es el valor que quiero cambiar, que es el color que me estan pidiendo

estiloDiv('div1','blue'); // importante LAS COMILLAS SIMPLES!!!! que nunca se me olvide!!!
estiloDiv('div2','red');
estiloDiv('div3','green');
estiloDiv('div4','yellow');

//selecciono el elemento a cambiar con DOM y aplico el addEventListener para que en un click yo pueda aplicar la funcion
document.getElementById('div1').addEventListener('click', function() {
    estiloDiv('div1', 'black');
});

document.getElementById('div2').addEventListener('click', function() {
    estiloDiv('div2', 'black');
});

document.getElementById('div3').addEventListener('click', function() {
    estiloDiv('div3', 'black');
});

document.getElementById('div4').addEventListener('click', function() {
    estiloDiv('div4', 'black');
});