const lienzo= document.querySelector('#lienzo');

const ctx= lienzo.getContext('2d');


ctx.fillStyle='red';
ctx.beginPath();
ctx.fillRect(130,20, 50,  10);// sombrero
//            x   y  ancho alto
ctx.fillRect(120,30, 90,  10);// 

ctx.fillStyle='brown';
ctx.beginPath();
ctx.fillRect(120,40, 30,  10);//patilla y cabello
ctx.fillRect(130,50, 10,  10);//patilla y cabello
ctx.fillRect(130,60, 10,  10);//patilla y cabello
ctx.fillRect(140,60, 10,  10);//patilla y cabello
ctx.fillRect(110,60, 10,  10);//patilla y cabello
ctx.fillRect(120,70, 10,  10);//patilla y cabello
ctx.fillRect(110,70, 10,  10);//patilla y cabello
ctx.fillRect(110,50, 10,  10);//patilla y cabello
ctx.fillRect(160,60, 50,  20);
// bigote

ctx.fillStyle='#FFA661 ';
ctx.beginPath();
ctx.fillRect(150,40, 20,  10);
ctx.fillRect(180,40, 10,  20);
ctx.fillRect(120,50, 10,  20);
ctx.fillRect(130,70, 10,  20);
ctx.fillRect(140,70, 10,  20);
ctx.fillRect(150,70, 10,  20);
ctx.fillRect(160,70, 10,  20);
ctx.fillRect(140,50, 10,  10);
ctx.fillRect(170,60, 10,  10);
ctx.fillRect(150,40, 20,  30);
ctx.fillRect(180,50, 30,  10);
ctx.fillRect(190,60, 30,  10);
ctx.fillRect(170,80, 30,  10);

ctx.fillStyle='black';
ctx.beginPath();
ctx.fillRect(170,40, 10,  20);

ctx.fillStyle='blue';
ctx.beginPath();
ctx.fillRect(120,90, 60,  10);
ctx.fillRect(110,100, 100,  10);
ctx.fillRect(100,110, 120,  10);
ctx.fillRect(120,120, 80,  10);

ctx.fillStyle='red';
ctx.beginPath();
ctx.fillRect(140,120, 40,  10);
ctx.fillRect(140,90, 10,  30);
ctx.fillRect(170,100, 10,  30);
ctx.fillRect(130,130, 60,  10);
ctx.fillRect(120,140, 80,  10);
ctx.fillRect(120,150, 30,  10);
ctx.fillRect(170,150, 30,  10);
ctx.fillStyle='#FFA661 ';
ctx.beginPath();
ctx.fillRect(200,120, 10,  30);
ctx.fillRect(210,120, 10,  30);
ctx.fillRect(190,130, 10,  10);
ctx.fillRect(100,120, 10,  30);
ctx.fillRect(110,120, 10,  30);
ctx.fillRect(120,130, 10,  10);

ctx.fillStyle='#893D02';// pies
ctx.beginPath();
ctx.fillRect(110,160, 30,  10);
ctx.fillRect(100,170, 40,  10);
ctx.fillRect(180,160, 30,  10);
ctx.fillRect(180,170, 40,  10);

ctx.fillStyle='yellow';// botones
ctx.beginPath();
ctx.fillRect(140,130, 10,  10);
ctx.fillRect(170,130, 10,  10);