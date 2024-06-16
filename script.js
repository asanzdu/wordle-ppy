console.log("HOLA");
//Variables globales 
let intentos=6;
let palabra = "APPLE";

function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
const button = document.getElementById("guess-button")
button.addEventListener("click",intentar)

const input = document.getElementById("guess-input");
const valor = input.value;

//Funciones 

function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        console.log("GANASTE")
        terminar("<h1>CORRECTO!</h1>")
        return
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor= '#80ED99'
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#FFD500';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#8A817C';
        }
        ROW.appendChild(SPAN)
    }
    intentos--
    GRID.appendChild(ROW)
    if (intentos==0){
        console.log("PERDISTE");
        terminar("<h1>INTENTA DE NUEVO!</h1>")
    }
}
function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    if(intento.length !== 5 || intento.includes(" ")){
        alert("Sólo palabras con cinco letras.")
        return
    }
    return intento;
}
function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    input.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
