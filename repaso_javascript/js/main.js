// alert("Hola, soy una alerta de JavaScript");

//variables
let nombre ="Alexis Arturo";
let altura = 170;

// Constantes
const apellido = "Solis"

// Mostrarlo por consola
console.log(nombre)
console.log(altura)

// Concatenación
let concatenar = nombre + " " + apellido;

// Seleccionar elementos del dom(Document Objet Model)
let datos = document.querySelector("#datos")
datos.innerHTML = `
    <hr/>
    <h2>Soy la caja de datos</h2>
    <p>Mi nombre es: ${concatenar}</p>
    <p>Mido: ${altura} cm</p>
`
// Condiciones
if(altura >= 185){
    datos.innerHTML += "<strong>Eres una persona alta!</strong>"
}else{
    datos.innerHTML += "<strong>Eres una persona baja!</strong>"
}

// Bucles
for(let year=2019; year <= 2024; year++){
    datos.innerHTML += `<h3>Año: ${year}</h3>`
}

// Arrays
let frutas = ["Sandia", "Manzána", "Mango", "Carambolo"];

let divFrutas = document.querySelector("#frutas");
divFrutas.innerHTML = "<h1>Listado de frutas</h1><ul>";
frutas.forEach(fruta => {
    divFrutas.innerHTML += "<li>"+fruta+"</li>";
});

divFrutas.innerHTML += "<hr/>"
for (let fruta of frutas){
    divFrutas.innerHTML += "<li>"+fruta+"</li>";
}
divFrutas.innerHTML += "</ul>";

// Funciones
const misDatos = (nombre, altura) => {
    let informacion = `
        <hr/>
        <h2>Soy la caja de datos</h2>
        <p>Mi nombre es: ${nombre}</p>
        <p>Mido: ${altura} cm</p>
    `
    return informacion;
}

const imprimir = () => {
    let datos = document.querySelector("#datos") 
    datos.innerHTML = misDatos("Andrea", 150)
}
imprimir()