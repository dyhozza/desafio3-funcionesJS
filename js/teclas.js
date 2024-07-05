// la variable es global porque se declara fuera de la funcion
let colorGlobalDeCambio;

// La letra A guardará el color rosado.
// La letra S guardará el color naranjo.
// La letra D guardará el color celeste.

//Crea un nuevo div con el id “key”, de 200px de ancho y alto y de color blanco y borde negro.
    const elemento = document.getElementById('key');
    //valores fijos
    elemento.style.backgroundColor = 'white';
    elemento.style.width = '200px';
    elemento.style.height = '200px';
    elemento.style.border = '5px solid black';

// keydown = EVENTO que se activa cuando una tecla del teclado es presionada
// event.key = propiedad para capturar eventos de teclado

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        elemento.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
        elemento.style.backgroundColor = 'orange';
    } else if (event.key === 'd') {
        elemento.style.backgroundColor = 'skyblue';
    }})

// al presionar las teclas Q, W o E se deberá crear un div nuevo de las mismas dimensiones antes mencionadas con los colores morado, gris y café respectivamente

// appendChild = se utiliza para añadir un nodo como hijo de otro nodo existente en el DOM (Document Object Model). En términos simples, permite agregar un elemento dentro de otro elemento en una página web.

const nuevoDiv = document.getElementById('key');

document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        crearNuevoDiv('purple');
    } else if (event.key === 'w') {
        crearNuevoDiv('grey');
    } else if (event.key === 'e') {
        crearNuevoDiv('brown');
    }
});

function crearNuevoDiv(color) {
    const divCreado = document.createElement('div');
    divCreado.className = 'nuevoDiv';
    divCreado.style.backgroundColor = color;
    divCreado.style.width = '200px';
    divCreado.style.height = '200px';
    divCreado.style.border = '5px solid black';
    nuevoDiv.appendChild(divCreado);
}