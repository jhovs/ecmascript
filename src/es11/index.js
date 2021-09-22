// ES11 junio 2020
//# Clase 11

/*/--> dinamic import:  realizar una importación de forma dinamica, para llamar piezas de codigo 
que utilicemos mejor en el proyecto */

const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
}) 


//# Clase 12

/*/--> bigInt: numeros enteros mayores 2**53 son las dos formas que se puede trabajar con este 
numero, con este nivel de alcance con la parte numerica */
const aBigNumber = 9007199254740991n;
const bBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(bBigNumber);


/*/--> Promise.allSettled :  devolvera una promesa que se resuelve despues que todas las promesas 
sean resueltas o rechasadas, en una serie de objetos que descrive el resultado de cada promesa */
const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve 1"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 2"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));


/*/--> global.dist : tiene el valor global de dist, que es similar al objeto global, si nosotros vemos
 diferentes elementos windows , self, frames o dist, vamos a tener un resultado
 
 proporciona una versión estantadar de acceder al valor global, que no solo desde el navegador si no tambien
 desde nuestraa plicaciones */
console.log(window);
console.log(globalThis);


/*/--> Ayudar a trabajar con los elementos nulos, NULL que es un operador logico que nos devuelve su operando
del lado derecho cuando su operador de lado izquierdo es null o indefinido y de lo contrario devuleve el 
operador del lado izquierdo */
const fooo = null ?? 'default string';
console.log(fooo);



/*/--> optional-chaing "?" : trabajamos con los arreglos y los objetos y acceder a cada uno de estos, y poder
trabajar diferentes niveles de los recursos */ 

// al colocar un ? es vamos a leer hasta este nivel sin romper mi aplicacion 
const user = {};
console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log('email');
}else{
    console.log('fail');
}


