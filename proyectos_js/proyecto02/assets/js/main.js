let marca = "Nissan",
    velocidad = 290,
    stock = true,
    modelos = ["GT-R", "370z", "Sentra", "NP-300"];

let frase = `Marca: ${marca} <br/>
            Velocidad: ${velocidad} k/h <br/>
            Stock: ${stock} <br/>
            `;

modelos.forEach(modelo => {
    frase += `- ${modelo} <br/>`

})
let caja = document.querySelector("#result");
caja.innerHTML = frase;