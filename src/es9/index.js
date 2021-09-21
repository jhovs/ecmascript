// ES9 junio 2018
//# Clase 9

/*/--> operador de recurso el cual puede extraer las propiedades de 
un objeto que aun no se a construido */
//creamos objeto 
const obj = {
    name: 'Jhovan',
    age: 38,
    country: 'MX'
}

//usamos operador de reposo para separarar los elementos 
let { name, ...all} = obj;
console.log(name, all);


/*/--> Utilizando propiedades de propagación amos unit n elementos 
que queramos a un nuevo objeto aqui con los "..." indicamos que unimos 
el obj1 con el obj2 */
// creamos objetos 
const obj1 = {
    name: 'Susana',
    age: 39,
}

const obj2 = {
    ... obj1,
    country: 'MX'
}

console.log(obj2);


/*/--> podemos saber cuando a terminado el llamado y porder ejecutar alguna
funcion o logica de codigo segun sea el caso */

// creamos promesa
const helloWord = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve('Hello word'), 3000)
            : reject(new Error('Test Error'))
    })
}


helloWord()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizado'))


/*/ --> como podemos agrupar bloques en regex y como accder a cada uno de ellos  */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year =  match[1]
const mont = match[2]
const day = match[3]

console.log(year, mont, day);