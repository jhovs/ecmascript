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
class Message {}



/*/-->  */