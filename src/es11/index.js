// ES11 junio 2020
//# Clase 11

/*/--> dinamic import:  realizar una importación de forma dinamica, para llamar piezas de codigo 
que utilicemos mejor en el proyecto */

const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
}) 