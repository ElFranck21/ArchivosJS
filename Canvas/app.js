const lienzo= document.querySelector('#lienzo');

const ctx= lienzo.getContext('2d');
function cuadrito(ctx,x,y){
    ctx.fillStyle='green';
    ctx.fillRect(x,y,10,10)
}
let ejex=0;
let ejey=0;
setInterval(()=>{
    cuadrito(ctx,ejex,ejey);
    ejex+=10;

},1000);
/*
ctx.strokeRect(100,100, 200, 200);// cabeza
ctx.strokeRect(150,150, 20, 20); // ojo iz
ctx.fillRect(160,160, 10, 10); // pupila iz
ctx.strokeRect(230,150, 20, 20);// ojo derecho
ctx.fillRect(240,160, 10, 10);// pupila derecha
ctx.strokeRect(190,180, 20, 50);// nariz
ctx.strokeRect(150,250, 100, 20);// boca 
ctx.strokeRect(180,250,10,10);
ctx.strokeRect(210,250,10,10);

ctx.fillRect(90,90,220,40)
ctx.fillRect(110,80,180,40)

// Corbata 
ctx.fillStyle='red';
ctx.beginPath();
ctx.moveTo(200,300);
ctx.lineTo(230,320);
ctx.lineTo(200,340);
ctx.lineTo(170,320);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(200,330);
ctx.lineTo(240,350);
ctx.lineTo(200,400);
ctx.lineTo(160,350);
ctx.fill();
ctx.stroke();

ctx.fillStyle='black';
ctx.beginPath();
ctx.moveTo(145,300);
ctx.lineTo(240,300);
ctx.lineTo(200,430);
ctx.lineTo(145,350);
ctx.fill();
ctx.stroke();


ctx.strokeRect(70,300, 260, 200);//cuerpo
ctx.strokeRect(10,310, 60, 200);//brazo der
ctx.strokeRect(330,310, 60, 200);//brazo iz
*/

