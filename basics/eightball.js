const respuesta= document.getElementById('respuesta');

function eightball(){
    const opcion = Math.ceil(Math.random()*8);
    let resp;
    switch(opcion){
        case 1:
            resp = 'Todo saldra bien';
            break;
        case 2:
            resp = 'Llevo 2 y ya me canse';
            break;
        case 3:
            resp = 'Todo saldra bien x2';
            break;
        case 4:
            resp = 'Me duele la cabeza';
            break;
        case 5:
            resp = 'Espero y funcione';
            break;
        case 6:
            resp = 'Todo saldra bien y si no sale bien es por que no haz llegado al final Carlo 2023';
            break;
        case 7:
            resp = 'Al menos quedate una luna mas';
            break;
        default:
            resp='No lo se';
    }
    respuesta.innerHTML = resp
}