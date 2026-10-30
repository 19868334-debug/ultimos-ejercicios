let contador = 0;

let botonSumar = document.getElementById("suma");
let botonReiniciar = document.getElementById("reiniciar");
let resultado = document.getElementById("contador"); 

botonSumar.addEventListener("click", function() {
    contador++;
    resultado.textContent = contador;
});

botonReiniciar.addEventListener("click", function() { 
    contador = 0;
    resultado.textContent = contador; 
});