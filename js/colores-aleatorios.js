// seleccionar los elementos del DOM
const boton = document.getElementById("boton-color");
const color = document.getElementById('color');
const seccion = document.getElementById("colorAleatorio");

function generarColorHexAleatorio() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio];
    }

    return colorHex;
}

boton.addEventListener('click', function() {
    let colorAleatorio = generarColorHexAleatorio();
    // actualizar el texto
    color.textContent = colorAleatorio;
    // actualizar el color de fondo
    seccion.style.backgroundColor = colorAleatorio;
});