const datos=[1,2,3,4,5];

const getDataPromise= new Promise(
    (resolve, reject)=>{
        setTimeout(()=> {
           // resolve(datos)
           reject('No se pudo: /')
        }, 3000);
    }
);

//console.log(getDataPromise);

console.log('inicia promesa')
getDataPromise.then((result)=>{
    console.log(result);
    confirm.log('termina promesa');
}).catch(error=>console.log(error));