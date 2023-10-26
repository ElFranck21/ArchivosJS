const teams = ["Liverpool","Dormunt","Chelsea"];

setTimeout(()=> console.log('Tarea asincrona'),2000);
console.log('Sigues ejecutando');
console.log(teams);

function getTeams(){
    return teams;
}

function asincGetTeams(){
    setTimeout(()=>teams,2000);
}

console.log(getTeams());
console.log('Final de codigo');

console.log(asincGetTeams());
console.log('Termina el llamado de funcion');