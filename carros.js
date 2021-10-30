//OPCIÓN 1: Partiendo de variables con datos existentes

//Definimos unas variables de ejemplo, serán de tipo array

var marca = [
    "Jeep",
    "Kia",
    "Audi",
    "BMW",	
    "Chevrolet",
    "Fiat",
    "Ford",
    "Mitsubishi",
    "Renault",
    "Hiundai"   	 	 
]

var modelo = [
    "C-Max",
    "Fiesta",
    "Focus",
    "Mondeo",
    "Ka",
    "S-MA",
   " B-MAX",
    "Grand C-Max",
    "Tourneo Custom",
    "Kuga" 
]

var anio = [
    "1988",
    "1989",
    "1978",
    "1989",
    "1928",
    "1989",
    "1968",
    "1989",
    "1989",
    "1918"
]

//Creamos la variable que tendrá todos los carros, será un array de objetos
var listaAutos = [];

//Creamos la función constructora, que recibe 3 parámetros y lo convierte en un objeto
function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

//Creamos la función que agrega un nuevo objeto en el array listaAutos
function agregarAuto(marca, modelo, anio){
    var nuevoAuto = new auto(marca, modelo, anio);
    listaAutos.push(nuevoAuto);
}

//Creamos la tarea que itera los elementos de las variables y agrega cada carro a la variable listaAutos
for(var i = 0; marca.length > i && modelo.length > i && anio.length > i; i++){
    agregarAuto(marca[i],modelo[i],anio[i]);
}

//Se imprime la lista de autos creada
console.log(listaAutos)

//---------------------------------------------------------------
//OPCIÓN 2: Permitiendo al usuario que introduzca los datos

//Creamos la variable que tendrá todos los carros, será un array de objetos
var listaAutos = [];

//Creamos la función constructora, que recibe 3 parámetros y lo convierte en un objeto
function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

//Creamos la función que agrega un nuevo objeto en el array listaAutos
function agregarAuto(marca, modelo, anio){
    var nuevoAuto = new auto(marca, modelo, anio);
    listaAutos.push(nuevoAuto);
}

//Creamos la función que solicita al usuario los datos del carro a registrar
function registrarAuto(){
    var marca = prompt("Ingresa la marca: ");
    var modelo = prompt("Ingresa el modelo: ");
    var anio = prompt("Ingresa el año: ");
    agregarAuto(marca, modelo, anio);
    console.log("¡Agregaste tu nuevo carro con éxito!");
    var salir = prompt("Salir? y/n");
    return salir;
}


var salir = "n";
while(salir == "n"){
    salir = registrarAuto();
}

//Se imprime la lista de autos creada
console.log(listaAutos)