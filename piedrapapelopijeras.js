//Crear variables de cada jugada
var player = "piedra";
var pc = "papel";
var winner;

//Definir la funcion ppt
function ppt(){
    if (
        (player == "piedra" && pc == "papel") || 
        (player == "papel" && pc == "tijeras") || 
        (player == "tijeras" && pc == "piedra")) {
    return winner = "Perdiste :(";
    }
    else if (player == pc ) {
    return winner = "Empate :|";
    }
    else {
    return winner = "Ganaste :)"
    }
}

//Llamar a la funcion ppt e imprimir el resultado en consola
console.log(ppt())
