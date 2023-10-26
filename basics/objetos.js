// Objeto es una coleccion de datos 
// a travez de key/value llave/valor

/*
objeto ={
    key: 'valor',
    'key':'valor'
}
objeto.key
objeto['key']
*/
const alumno={
    name: 'Ale',
    age:21,
    city:'Bancuver',
    califications:[10,10,9],
    career:'Lic.Medicina',
    'Last name':'Emily',
    'gender':'Female'
}

console.log(alumno);
console.log(alumno.name);
console.log(alumno['califications']);
console.log(alumno['Last name']);

alumno.height = 1.55;
console.log(alumno);

const group ={
    name: '4A DSM',
    career: 'TIADSM',
    classroom: 'Lab Redes 1',
    subjects: ['Aplicaciones','Modelado','Databses'],
    alumns: [alumno, alumno, alumno]
}

console.log(group);
console.log(group.subjects[1]);
console.log(group.alumns[0].califications[1]);