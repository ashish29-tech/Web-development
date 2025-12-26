//2 web API of HTML.
//1. Canvas      2. Svg
//They work as tags but actually they are API's.
//They draw/display graphics(lines, square) on your web page. 

//------------------------------------------------

//Kisi element pe kaam karna hai to use select karna padega 
//canvas is like a white board of a painter.

// let canvas = document.querySelector('canvas');

// //now we want brush. Brush is present in context...ek method hota hai getContext. Represents 2D things.
// let ctx = canvas.getContext('2d');

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
// ctx.font = "28px serif"
// ctx.fillStyle = "red";
// //Alag-alag text bhi draw kar sakte hai
// ctx.fillText('ashish' , 50 , 75 ,); //accepts 4 arguments. string, x, y, undefines optional hota hai


//--------------------------------------------------------
//Practice

//canvas hmara white board hota hai
let canvas = document.querySelector('canvas');

//now we want brush. Brush is present in context. We have a method called getContext()...canvas ke andar.
//Ye 2D chizo ko represent karta hai. Jo drawing karenge ya toh x m rahegi ya y m...z m toh hogi nahi...isliye 2d.
let ctx = canvas.getContext('2d'); //ctx naam rakh diya brush ka. Paint brush ko select karne ke kaam ata hai getContext

//draw karne se pehle dip bhi karna padega brush
// ctx.fillStyle = 'green';

//brush ko dip kar ke color dena
// ctx.strokeStyle = 'purple'

//now draw rectangle
//method hai ki brush ki help se draw kar paye. Hover over fillRect()..we can see it's asking for 4 args...x,y,w,h.
// ctx.fillRect(120,120 , 50,50); //sabse pehla hota hai x and y..yha se coordinates mil gaye...uske baad width and height
//we want ki sirf outline dikhe..rectangle ki
// ctx.strokeRect(140,150,100,100)


//now path bnana hai...brush ko pick karenge and move karenge starting point pe...phir jha tak karna chahte hai wha tak ki line draw karenge.
//phir uske leke jani hai toh line to...then phir se toh line to...fir fill kar denge...then close kar denge path ko.
ctx.beginPath();
ctx.moveTo(20,30); //brush utha ke is coorinates pe move kar diya
ctx.lineTo(120,130);
ctx.lineTo(20,130);
ctx.lineTo(20,30);
ctx.lineTo(120,30);
ctx.lineTo(120,130);
ctx.strokeStyle = 'red'
ctx.stroke(); //stroke m line aa rahi hai
ctx.fillStyle = 'green'
ctx.fill() //
ctx.closePath()


//--------------------------------------------






