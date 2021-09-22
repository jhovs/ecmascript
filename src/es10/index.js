// ES9 junio 2019
//# Clase 10

/*/--> array.flat : Devolver una matriz con cualquier sub-matriz aplanada, 
y enterder como esta estrucutrado cada uno de los elementos */
let array = [1,2,3, [4,5,6, [7,8,9]]];
console.log(array.flat(2));

/*/--> array.flatMap  : permitira mapear cada elemento y pasar una funcion y 
aplanar según el resultado  */
let array1 =  [1,2,3,4,5];
console.log(array1.flatMap(value => [value, value * 3]));

/*/-->  string.trimStart : eliminar espacios en blanco de un string al inicio
        string.trimEnd : eliminar espacios en clanco de un string al final */
let hello = '          trimStar';
console.log(hello);
console.log(hello.trimStart());

let hello1 = 'trimEnd      ';
console.log(hello1);
console.log(hello1.trimEnd());

/*/--> optional catsh blinding: podemos pasar de forma opcional el parametro 
de error al valor del catsh */

try {

//}catch (error){ a partir de esta version se puede omitir (error) en el catch 
}catch{
    error
}

/*/--> Object.fromEntries : el cual va a transformar clave valor en un objeto, 
areglo transformarlo en objeto */

//arreglo de dos elementos
let entries = [['name', 'Jhovan'], ['age', '38']];
console.log(entries);
console.log(Object.fromEntries(entries));

/*/--> symbol.description : El objeto de tipo simbolo nos permitira una nueva descripción */
let mySyml = 'My Symbol';
let symbol = Symbol(mySyml);
console.log(symbol.description);