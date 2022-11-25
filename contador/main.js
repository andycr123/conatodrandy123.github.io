let contar = document.getElementById("numero");
let bajar = document.getElementById("botonRestar");
let Reseteo = document.getElementById("botonReset");
let subir = document.getElementById("botonSumar");
let conteo = 0;

function incremente () {
    conteo ++
    contar.textContent = conteo
}
function restamos () {
    conteo --
    contar.textContent = conteo
}
function nuevo () {
    conteo = 0
    contar.textContent = 0
}