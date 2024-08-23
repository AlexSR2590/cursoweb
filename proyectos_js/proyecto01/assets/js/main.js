var nombre = "Alexis";
var apellido = "Solís";
var edad = 30;
var pais = "México";
var conocimiento = ["HTML", "Python", "Django", "MySql", "CSS", "Git", "Tkinter"];

alert("Proyecto 1 de JavaScript")
console.log("Mi nombre es: %s", nombre)
console.log("Mi apellido es: %s", apellido)
console.log("Tengo %d años", edad)
console.log("Vivo en %s", pais)
console.log("Mis conocimientos son:")
for(var i = 0; i < conocimiento.length; i++){
    console.log("%d- %s", i+1, conocimiento[i])
}

edad = 34;
conocimiento.push("Diseño de Bases de Datos")
console.log("Edad modificada: %d", edad)
for(var i = 0; i < conocimiento.length; i++){
    console.log("%d- %s", i+1, conocimiento[i])
}