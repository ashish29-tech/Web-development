//2 web API of HTML.
//1. Canvas      2. Svg
//They work as tags but actually they are API's.
//They draw/display graphics(lines, square) on your web page. 

//------------------------------------------------

//Kisi element pe kaam karna hai to use select karna padega 
//canvas is like a white board of a painter.

let canvas = document.querySelector('canvas');

//now we want brush. Brush is present in context...ek method hota hai getContext. Represents 2D things.
let ctx = canvas.getContext('2d');

//paint dip karna hai pehle
// ctx.fillStyle = 'red'; //brush select kiya..style..ki kis tarike se fill hoga

// //Draw Rectangle. We can with the help of brush....rectangle ke liye..fillrect()
//  //4 arguments...x,y, w,h. x and y are co-ordinates....w and h are width and height.
// // ctx.fillRect(120,120,50,100); //fill kar diya rectangle ko

// //dip karo and give color to rect
// ctx.strokeStyle = "purple"

// ctx.strokeRect(150,150,100,100); //sirf outline dikhe rectangle ki..fill na ho


//Draw some paths
//sbse pehle begin karenge...
// ctx.beginPath(); //beginPath method
// ctx.moveTo(20,30); //brush ko utha ke move kar do 20,30 pe
// ctx.lineTo(120,130);
// ctx.lineTo(20,130);
// ctx.lineTo(20,30);
// ctx.lineTo(120,30);
// ctx.lineTo(120,95);
// ctx.strokeStyle = 'red';
// ctx.stroke();
// ctx.fillStyle = 'green'
// ctx.fill();
// ctx.closePath();

//------------------------------------------------------
ctx.font = "28px serif"
ctx.fillStyle = "red";
//Alag-alag text bhi draw kar sakte hai
ctx.fillText('ashish' , 50 , 75 ,); //accepts 4 arguments. string, x, y, undefines optional hota hai









