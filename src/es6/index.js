console.group("clases anteriores");
//# Clase 2
//--> Ej #1 - Creación de funciones 

function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
};


//es6  
function newFunction2(name = 'oscar', age = 32, country = "MX") {
  console.log(name, age, country);
};

newFunction2();
newFunction2('Jhovan', '38', 'MX');


//--> Ej #2 - concatenación de textos y variables
let hello = "Hello";
let world = "World";

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);



//# Clase 3
//--> Ej #3 - Multilineas
let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
  + "otra frase epica que necesitamos."

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);


//--> Ej #4 - Destructuración de elementos 
let person = {
  'nombre': 'Jhovan',
  'age': 38,
  'country': 'MX'
}

console.log(person.nombre, person.age);

// es6
let { nombre, country } = person;
console.log(nombre, country);

//--> Ej #5 - operadores de propagación, expandir de varias situaciones varios elementos 
let education = ['David', 'Oscar', 'Julian', 'Ricardo', 'Valeria', 'Yesica', 'Camila'];


// es6
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education2 = ['David', ...team1, ...team2];

console.log(education2);


/*-- Ej #6 - Variable Let: solo está disponible en el scope, esto siginifica en el boquye de codigo el cual va a ser
 llamado y var esta definido de forma global */
{ var globalVar = "Global Var"; }
{ let globalLet = 'Global Let'; console.log(globalLet); }

console.log(globalVar);


//--> Ej # 6 - Variable const: si quisieramos asignarle otro valor no lo va adejar, es una variable que no cambia 
const a = 'b';
//a = 'a'; quisimos darle un valor nuevo a a y nos muestra error que const no cambia
console.log(a);



//# Clase 4
//--> Ej #7 - objetos 

let name = 'oscar';
let age = 32;

//es5
//obj = { name: name, age: age };

//es6
//obj2 = { name, age };
//console.log(obj2);



//--> Ej #8 Arrow Function: sintaxis reducia

const names = [
  { name: 'Jhovan', age: 38 },
  { name: 'Carolina', age: 37 }
]


let listOfNames = names.map(function (item) {
  console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));


/*
const listOfNames3 = (name, age, country) => {
  ... 
}

const listOfNames4 = name => {
  ...
}
*/

function square (num){
  const numero = num * num;
  return console.log(numero); 
}

const square2 = num => num * num;



 //--> Ej #9 Asincronismo / promesas - biene a solucionar el call to action 

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
 // .then(() => console.log('Hola'))
  .catch(error => console.log(error));

console.groupEnd();
console.group("Clase actual");

//# Clase 5
//--> Ej 10  Clases y constructor 

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(6, 4));


//-->   Impor y export : trabajar con modulos 
//import * as exp from './module.js';  exportar todas las funciones exitentes en el archivo module.js

import { mensaje } from './module.js';
mensaje();

//--> Generations, retorna una serie de valores segun el algoritmo definido

function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);  /* next: permite ejecutar la primer logica y obtener el valor y al 
utilizar le siguiente next va a recordar en donde estaba para mostrar el siguiente valor y asi susesivamente */
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

console.groupEnd();