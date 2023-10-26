// Funciones de Orden Superior
// High Order Functions

/*
   Funciones que reciben funciones 
   como parametros
*/
const myFunction=()=>{
    console.log('Ejecuta mi Funcion');
}
myFunction();
const sameFunction=myFunction;
sameFunction();

const otherSameFunction=myFunction;
otherSameFunction();

const funOne=()=>{
    console.log('Ejecuta funcion One');
}

const funTwo = (username)=> {
    console.log('Ejecuta funcion two');
    console.log('Holaaa '+ username);
}

const funThree=(otherFunction)=>{
    console.log('inicia funcion 3');
    otherFunction();
    console.log('termina funcion 3')
}

funOne();
funTwo('El Franck ');
funTwo('Leon S. Kennedy');
funThree(funOne);
funThree(()=> console.log('Soy una Arrow Function'));