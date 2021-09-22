// ES11 junio 2021
//# Clase 13

/*/--> string.remplaceAll : remplaza todos los elementos del string que se solicitan, mientras 
string.remplace lo hace solo remplasando el primer elemento que encuentra unicamente */
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
const replacedString = string.replace("JavaScript", "Python"); 
const replacedString2 = string.replaceAll("JavaScript", "Python");

console.log(string);
console.log(replacedString);
console.log(replacedString2);

/*/--> metodos privados: utilizar dentro de las clases, con esto podemos agregar un prefijo que
nos permitira decir que es privado y no podremos acceder de forma como podemos acceder algun metodo
interno de esa clase */
class Message {
    #show(val){  // al agregar el # volvemos de forma privada este elemento y solo es dentro de la clase
        console.log(val);
    };
 //   get #add(val){
 //       console.log(val);
 //   }
}
const message = new Message();
//message.show('Hola!');


/*/--> Promise.any() : objeto global cuyo argumento va a ser un array de promesas que vamos apasarle
gestionando y capturando la primera que sea satisfactoria */

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

/*/--> WeakRef() : un objeto que permite mantener una referencia debil a otro objeto sin evitar que sea
pasado por garbege collector, hacer referencia debil a este objeto    */
class anyClass{
    constructor(element){
        this.ref = new WeakRef(element);
    }
}


/*/--> Nueva ayuda con elementos de expreciones y operadores,  */
let isTrue = true;
let isFalse = false;

console.log(isTrue &&= isFalse); // AND lógico 
console.log(isTrue ||= isFalse); // OR lógico 
console.log(isTrue ??= isFalse); // Anulacion Lógica