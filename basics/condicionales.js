// Condicionales Javascript
// if(exp) {Body}
const age=18;
if (age >= 18){
    console.log('Es mayor');
}
//if (exp) {body} else {body}
if (age>=18){
    console.log('Es mayor');
} else {
    console.log('Es menor')
}
// if ternario (exp)? true: false;
(age >= 18)? console.log('Es mayor'): console.log('Es menor');
(age >= 18)? 
console.log('Es mayor'):
console.log('Es menor');
// if(exp) {} else if (exp) {}else {}
const ppt = Math.ceil(Math.random()*3);
if (ppt ===1){
    console.log('Cayo Piedra');
} else if(ppt ===2){
    console.log('Cayo Papel');
}else {
    console.log('Cayo Tijera');
}
// swich / case 
const day= Math.ceil(Math.random()*7);
switch(day){
    case 1:
        console.log('Es Domingo');
        break;
    case 2:
        console.log('Es Lunes');
        break;
    case 3:
        console.log('Es Martes');
        break;
    case 4:
        console.log('Es Miercoles');
        break;
    case 5:
        console.log('Es Jueves');
        break;
    case 6:
        console.log('Es Viernes');
        break;
    default:
        console.log('Es Sabado' )

}
// Truthy and Falsy
// Distintos tipos de datos evaluados como boolean
// 0 -> false 
// Not 0 ->  true
// '' -> false
// 'algo' -> true
let apples =0;
if (apples >0){
    console.log(`Tenemos ${apples} manzanas`);
}else {
    console.log(`No hay manzanas`);
}
apples = 10;
if (apples){
    console.log(`Tenemos ${apples} manzanas`);
}else {
    console.log(`No hay manzanas`);
}

let userLoggeado='';
let usuarioActual;
userLoggeado?
    usuarioActual = userLoggeado:
    usuarioActual = 'Invitado';

    console.log(usuarioActual);

    userLoggeado = 'El Franck';

usuarioActual= userLoggeado|| 'Invitado';
console.log(usuarioActual);
