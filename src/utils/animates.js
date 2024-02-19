// Función para detectar el scroll y añadir la clase para mostrar el elemento
function mostrarElemento() {
    var elementos = document.querySelectorAll('.elemento-a-aparecer');
    
    elementos.forEach(function(elemento) {
        if (elemento.getBoundingClientRect().top < window.innerHeight) {
            elemento.classList.add('mostrar');
        }
    });
}

// Llama a la función al cargar la página y al hacer scroll
document.addEventListener('DOMContentLoaded', mostrarElemento);
document.addEventListener('scroll', mostrarElemento); 