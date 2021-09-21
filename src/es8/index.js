// ES8
//# Clase 7

console.group("Clase anterior");
//--> Object.entries : devolver clave y valores de una matriz 
const data = {
    frontend: 'Jhovan',
    backend: 'Susana',
    desing: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length); //mostrara cuentos elementos hay

//--> Object.values : el cual me devuelve los valores de un objeto a un array
const values = Object.values(data);
console.log(values);
console.log(values.length);

//-->padding | padStar() padEnd() : como podemos anteponen o agragra una cadena basia o lementos al string
const string = 'hello';
console.log(string.padStart(8,'Hi '));
console.log(string.padEnd(10,' AAAA'))

console.groupEnd();
console.group("Clase actual");

//# Clase 8 - Async Await 

//-->  generamos una promesa para usar Async y Await
const helloWord = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve('Hello word'), 3000)
            : reject(new Error('Test Error'))
    })
}

//--> Async y Await 
const helloAsync = async () =>{
    const hello = await helloWord();
    console.log(hello);
}

helloAsync();
console.groupEnd();

//--> manejar errores es este tipo de funciones 
const anoterFunction = async () => {
    try {
        const hello = await helloWord();
        console.log(hello);
    } catch (error){
        console.log(error);
    }
}

anoterFunction();