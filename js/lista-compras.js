const input = document.getElementById('ingresar-tarea');
const botonCompra = document.getElementById('boton-lista');
const listaDeTareas = document.getElementById('lista-de-tareas');
let montoTotal = document.getElementById('monto-total');
let total = 0;
let valores = [];
let valorItem;
let suma = 0;


function agregarTarea() {
  if (input.value) {
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');
    // texto ingresado por el usuario
    let texto = document.createElement('p');
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);
    // crear y agregar contenedor de iconos
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos);
    // iconos
    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', completarTarea);

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarea);

    iconos.append(completar, eliminar);

    // agregar tarea a la lista
    listaDeTareas.appendChild(tareaNueva);
  } else {
    alert('por favor ingresa una tarea.')
  }
}

/*function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('completada');
  valorItem = parseFloat(prompt("ingresar monto"));
  if (isNaN(valorItem)) {
    valorItem = parseFloat(prompt("ingresar solo numeros"));
  }
  else {
    valores.push(valorItem);


    // Inicializar una variable para la suma
    let suma = 0;
    // Recorrer el array con forEach y una función anónima
    valores.forEach(function (numero) {
    // Sumar el valor del elemento actual a la variable suma
    suma = suma + numero;
    });
    // Mostrar la suma
    console.log(suma); // 150
    montoTotal.innerText ="Total " + "$" + suma;

//total = total + valorItem;
//montoTotal.innerText ="Total " + "$" + total;
console.log(listaDeTareas);
  }



  }*/

  function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
    valorItem = parseFloat(prompt("ingresar monto"));
    if (isNaN(valorItem)) {
      valorItem = parseFloat(prompt("ingresar solo numeros"));
    }
    else {
      // obtener el índice de la tarea en la lista de tareas
      let indice = Array.from(listaDeTareas.children).indexOf(tarea);
      // insertar el valor de la tarea en la posición que le corresponde en el array valores
      valores.splice(indice, 0, valorItem);
  
      // Inicializar una variable para la suma
      let suma = 0;
      // Recorrer el array con forEach y una función anónima
      valores.forEach(function (numero) {
      // Sumar el valor del elemento actual a la variable suma
      suma = suma + numero;
      });
      // Mostrar la suma
      console.log(suma); // 150
      montoTotal.innerText ="Total " + "$" + suma;
  
  //total = total + valorItem;
  //montoTotal.innerText ="Total " + "$" + total;
  console.log(listaDeTareas);
    }
  
    }


/*function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
                tarea.remove();   
}*/

function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  // obtener el índice de la tarea en la lista de tareas
  let indice = Array.from(listaDeTareas.children).indexOf(tarea);
  // crear un nuevo array valores sin el elemento que se elimina
  valores = valores.filter((valor, i) => i !== indice);



  // obtener la suma de los elementos del nuevo array valores
  suma = valores.reduce((a, b) => a + b, 0);
  // actualizar el monto total
  montoTotal.innerText ="Total " + "$" + suma;
  // eliminar la tarea de la lista
  tarea.remove();   
}


botonCompra.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregarTarea();
  }
});