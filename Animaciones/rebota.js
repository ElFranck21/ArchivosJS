const lienzo= document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let idx= 10;
let idy= 10;

let directionX=1;
let directionY=1;

let color = 0;

function pelota(x,y){
    ctx.fillStyle=`hsl(${color},50%,50%)`;
    color++;
    ctx.beginPath();
    ctx.arc(x,y,20,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();
}

function cuadro(x,y){
    ctx.fillStyle=`hsl(${color},50%,50%)`;
    color++;
    ctx.fillRect(x,y,30,30)
}


setInterval(()=>{
    ctx.clearRect(0,0,650,400);
    cuadro(idx,idy);
    if(directionX===1 && directionY===1){
        idx+=10;
        idy+=10;
    }else if(directionX===2 && directionY===1){
        idx-=10;
        idy+=10;
    }else if(directionX===1 && directionY===2){
        idx+=10;
        idy-=10;
    }else {
        idx-=10;
        idy-=10;
    }
    if(idx>650)directionX=2;
    if(idx<10)directionX=1;
    if(idy>400)directionY=2;
    if(idy<10)directionY=1;
},0);