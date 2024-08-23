let velocidad1 = 64,
    velocidad2 = 135;

let caja = document.querySelector("#result");

if(velocidad2<= 65){
    caja.innerHTML = `Todo va bien`;
} else{
    caja.innerHTML = `Baja la velocidad`;
}