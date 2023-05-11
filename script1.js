const $lucesDelCirculo = document.querySelectorAll(".luces-circulo");
let contadorDDeLuz = 0;

const mostrarLuz = () =>{
    $lucesDelCirculo[contadorDDeLuz].className = "luces-circulo";
    contadorDDeLuz++;

    if(contadorDDeLuz > 2) contadorDDeLuz = 0;

    const luzActual = $lucesDelCirculo[contadorDDeLuz];
    luzActual.classList.add(luzActual.getAttribute("color"))
}
setInterval(mostrarLuz,1000)