// Obtén el elemento con la clase "fizzbuzz"
const fizzbuzzContainer = document.querySelector('.fizzbuzz');

// Inicializa una variable para almacenar el contenido de FizzBuzz
let fizzbuzzContent = '';

// Genera el contenido de FizzBuzz
for (let i = 1; i <= 100; i++) {
    fizzbuzzContent += `${i % 3 ? '' : 'Fizz'}${i % 5 ? '' : 'Buzz'}${i % 3 && i % 5 ? i : ''}<br>`;
}

// Agrega el contenido de FizzBuzz al elemento "fizzbuzz"
fizzbuzzContainer.innerHTML = fizzbuzzContent;
