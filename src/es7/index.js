// ES7
//# clase 6

//--> includes
//validar dentro del arreglo si esta el numero 7 eso lo obtenemos con el "includes"
let numbers = [1,2,3,7,8];

if(numbers.includes(7)){
    console.log('si esta el valor');
}else{
    console.log('no se encuentra el valor');
}

//--> operaciones en forma exponencial
// para poder indicar a mi variable result que vamos a exponenciar base se coloca **
let base = 4;
let exponet = 3;
let result = base ** exponet;

console.log(`El resultado de ${base} elevado a la pontencia ${exponet} 
es: ${result} `);





