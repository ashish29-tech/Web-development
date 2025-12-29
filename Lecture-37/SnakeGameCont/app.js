// ---------------------------Step 4------------------------------------
//left-right, top-down
//food gen
//eat food
//score update
//boundary kill snake
//game over

// let canvas = document.querySelector('canvas'); //board
// let ctx = canvas.getContext('2d'); //brush select kiya jise context kehte hai..jo canvas m milta hai

// //Ek var h ka, ek w ka, cell size ka
// //Snake moves from one cell to ankother...means it gets updated.
// //Update ho rha hai kahi aur cell m ja rha...mtlb draw bhi to ho rha hai.
// //So we can create 2 functions...update and draw
// //snake size ? can be of 2 box, 4 box, 40 box..means can be of any size. So we are assuming snake is a rectangle.
// //If snake size is 5 then we have to draw 5 rectangle.
// //Har rectangle ko bnane ke liye uska starting point chahiye...uska x and y.
// //H and W to cell size ke variable se define kar hi rakha hai...50.

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1000;
// let direction = "right"; //cuz snake by default right direction m ja rha

// //snake ke cells jiski wjah se snake rectangle ban rha hai..
// let snakeCells = [ [0,0] , [50,0] , [100,0 ] ]; //snakeCells [[0,0]]...2d array and 0,0 se start hoga. Initial length 1 hoga.
// // let snakeCells1 = [ [0,0] , [50,0] , [100,0]]; //If snake ki length 3 hoti to aise chalta..
// //In the beginning we are assuming that snake will move in right direction.


// //food generate function
// function foodGenerate(){
//   return [ //array return karega...array m co-ordintes honge food ke X and Y
//     Math.round((Math.random()*(boardWidth-cellSize))/cellSize)*cellSize, //50 se divide and multiply taki cellsize se bhr
//     Math.round((Math.random()*(boardHeight-cellSize))/cellSize)*cellSize
//   ]
// }
// let food = foodGenerate(); 



// //snake draw karga...mtlb rectangle ko hi draw karna hai
// function draw(){ // Rectangle draw karne ke liye let snakeCells = [ [0,0] ]...ye array hai..isi ka refernce leke draw karna hai..array ko draw karne ke liye for loop
//   //draw karne se pehle poori screen ko erase kar dena chahiye..phir draw karna chahiye..wrna purane wala bhi show karega screen pe
//   ctx.clearRect(0,0,boardWidth,boardHeight); //shuru se lekar last tak karna hai clear..(0,0,600,1000)
//   for(let cell of snakeCells){ //snakecells ke array ke cells pe gya
//     ctx.fillStyle = 'red';
//     ctx.fillRect(cell[0], cell[1], cellSize, cellSize); //rectangle fill...cell ke 0th se cuz 2d hai na...x and y dono chahiye mtlb..0th index and 1stindex. Issey rectangle ban raha hai.
//   }
//   ctx.fillStyle = 'green';
//   ctx.fillRect(food[0], food[1], cellSize, cellSize ); //food[0], food[1], cellSize, cellSize...X ka co-ordinate, X ka co-ordinate, X length, Y m length
// }

// //After sometime snake gets updated...
// //[[50,50]]..andar wala array is 0....[[100,50]]...andar wala array 1....etc.
// //[[50,50]]...index 0 length 1....[[100,50]]...index 1 and length2..[[150,50]]....index 2 and length3.....so index = length - 1 
// function update(){
//   let headX = snakeCells[snakeCells.length - 1][0]; //snakeCells ke andar jao and snakeCells ki jo length hai..usme se 1 - kar denge so last wala mil jaye..and last wale cell ka pehla co-ordinator [0]
//   let headY = snakeCells[snakeCells.length - 1][1]; //snakeCells ke andar jao and snakeCells ki jo length hai..usme se 1 - kar denge so last wala mil jaye..and last wale cell ka pehla co-ordinator [1]

//   // let newHeadX = headX + cellSize; //new headX ke liye purane headX m jao and cell size se plus kar do
//   // let newHeadY = headY; //cuz maan rahe hai snake is moving in right direction only

//   //Now we'll change through direction
//   let newHeadX;
//   let newHeadY;
//   if(direction === "right"){
//      newHeadX = headX + cellSize; //right m ja rahe hai to ++
//      newHeadY = headY;
//   }
//   else if(direction === "left"){ //agr direction left hai
//     newHeadX = headX - cellSize; //left ja rahe hai to -
//     newHeadY = headY;
//   }
//   else if(direction === "up"){
//     newHeadX = headX;
//     newHeadY = headY - cellSize;
//   }
//   else{
//     newHeadX = headX;
//     newHeadY = headY + cellSize; //baki agr kuch bhi ata hai to +
//   }

//   //Rectanle new head se banega..tab banega jab wo purane cell ke andar....naye ko daal rahe hai to purane ko htana padeaga cuz purana kisi kaam ka nai hai..htana zaruri hai cuz wrna bina khana khaye...
//   snakeCells.push([newHeadX,newHeadY]); //so snake cell ke andar push karna hai array ko jo store karta hai
//   //food bite
//   if(food[0] === newHeadX && food[1] === newHeadY){
//     food = foodGenerate(); //food generate kara do
//   }
//   else{
//     snakeCells.shift(); //and starting se use shift bhi kar dena hai...taki (0,0) wala hat jaye...agr shift nai karte to array ki length 2 ho jati..mtlb bina khana khaye snake ki length badhti rehti...update karte-karte peeche wali value hta rahe hai so that snake ki length 1 hi rahe. 
//   }
//   // snakeCells.shift();
// }

// //Down jane ke liye event listener
// document.addEventListener('keydown' ,function(e){
//   // console.log(e) //check karnege key down karenge to kon sa event trigger ho rha hai...e print kar ke check karenge e m kya-kya aa rha hai
//   if(e.key === 'ArrowUp'){
//     direction = 'up'; //key press karenge toh up
//   }
//   else if (e.key === 'ArrowRight'){
//     direction = 'right';
//   }
//   else if(e.key === 'ArrowDown'){
//     direction = 'down';
//   }
//   else if(e.key === "ArrowLeft"){
//     direction = 'left'
//   }
// })

// //suppose 200ms ke baad update hoga and draw hoga..means ek kaam ko repeat karna hai...for this we have setInterval
// //Ye pehle update karega...phir draw karega
// setInterval(function(){ //setInterval accepts a function.
//   update();
//   draw();
// }, 500) 

//Initially to length 1 hi rahegi...jab tak food nai khata
//baad m size 5 ho jaye to 5 rectangles...5 rectangle ke liye 5 co-ordinates hone chahiye
//1 co-ordinte bnane ke liye we require...X, Y, H(50), W(50)
//Sare co-ordinates ko sambhal ke rakhna hai to array m sambhal ke rakh sakte hai.....[150, 50] [200,50] [250,50]...inse snake ka rectangle banega...in sabko bhi ek sath jodna hoga..can we make it a 2d array ?



//same as snake ki 1 cell ka size is food..means H & W would be 50.
//co-ordinates...random ke through generate karenge. random 0 and 1 ke beech m return karta hai.
//hamari W & H 1000 & 600 hai.
//Width ham food ke liye 950 tak ka lenge cuz food ki W bhi 1 cellsize ke barbar hai that is 50. 
//Height ham food ke liye 550 tak ka lenge cuz food ki H bhi 1 cellsize ke barbar hai that is 50
//0-950 denotes X axis......0-550 denotes Y axis. 
//Food toh 2 cell ke beech m bhi generate ho sakta hai
//0.5 * 950 = 475, 0.47 * 950 = 446....inko round karne ke liye...floor, cell, round..kya use karenge?
//sare cells 50 ke multiples m hai..isliye food bhi 50 ke multiples m lena hoga 


// ----------------------------BY CHATGPT 💻------------------------
// GAME OVER AND WALL SE TAKRAYE TO GAME OVER HO JAYE

// let canvas = document.querySelector('canvas'); //board
// let ctx = canvas.getContext('2d'); //brush select kiya jise context kehte hai..jo canvas m milta hai

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1000;
// let direction = "right"; //cuz snake by default right direction m ja rha
// let gameOver = false; // game over flag

// // Snake ke cells jiski wjah se snake rectangle ban rha hai
// let snakeCells = [ [0,0], [50,0], [100,0] ]; // initial snake length 3

// // Food generate function
// function foodGenerate(){
//   return [
//     Math.round((Math.random()*(boardWidth - cellSize)) / cellSize) * cellSize,
//     Math.round((Math.random()*(boardHeight - cellSize)) / cellSize) * cellSize
//   ]
// }
// let food = foodGenerate(); 

// // Snake draw karega
// function draw(){
//   ctx.clearRect(0, 0, boardWidth, boardHeight); // clear full canvas

//   // Game Over screen
//   if (gameOver) {
//     ctx.fillStyle = "black";
//     ctx.font = "50px Arial";
//     ctx.fillText("Game Over", boardWidth / 2 - 150, boardHeight / 2);
//     return;
//   }

//   // Snake draw
//   for(let cell of snakeCells){
//     ctx.fillStyle = 'red';
//     ctx.fillRect(cell[0], cell[1], cellSize, cellSize);
//   }

//   // Food draw
//   ctx.fillStyle = 'green';
//   ctx.fillRect(food[0], food[1], cellSize, cellSize);
// }

// // Snake update hoga
// function update(){
//   let headX = snakeCells[snakeCells.length - 1][0];
//   let headY = snakeCells[snakeCells.length - 1][1];

//   let newHeadX;
//   let newHeadY;

//   if(direction === "right"){
//     newHeadX = headX + cellSize;
//     newHeadY = headY;
//   }
//   else if(direction === "left"){
//     newHeadX = headX - cellSize;
//     newHeadY = headY;
//   }
//   else if(direction === "up"){
//     newHeadX = headX;
//     newHeadY = headY - cellSize;
//   }
//   else{
//     newHeadX = headX;
//     newHeadY = headY + cellSize;
//   }

//   // Wall collision check
//   if (
//     newHeadX < 0 || newHeadX >= boardWidth ||
//     newHeadY < 0 || newHeadY >= boardHeight
//   ) {
//     gameOver = true;
//     return;
//   }

//   // Self-collision check
//   for (let cell of snakeCells) {
//     if (cell[0] === newHeadX && cell[1] === newHeadY) {
//       gameOver = true;
//       return;
//     }
//   }

//   snakeCells.push([newHeadX, newHeadY]);

//   // Food eaten
//   if(food[0] === newHeadX && food[1] === newHeadY){
//     food = foodGenerate();
//   }
//   else{
//     snakeCells.shift(); // remove tail if not eaten
//   }
// }

// // Controls
// document.addEventListener('keydown', function(e){
//   if(e.key === 'ArrowUp'){
//     direction = 'up';
//   }
//   else if(e.key === 'ArrowRight'){
//     direction = 'right';
//   }
//   else if(e.key === 'ArrowDown'){
//     direction = 'down';
//   }
//   else if(e.key === "ArrowLeft"){
//     direction = 'left';
//   }
// })

// // Game loop 
// let gameLoop = setInterval(function(){
//   if (!gameOver) {
//     update();
//     draw();
//   } else {
//     draw(); // Show game over screen
//     clearInterval(gameLoop); // Stop the game
//   }
// }, 500);

//-----------------------------------------------------------
//Practice

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellSize = 50;
let boardHeight = 600;
let boardWidth = 1000;
let direction = "right";

let snakeCells = [[0, 0], [50,0]];

function draw() {
  ctx.clearRect(0, 0, boardWidth, boardHeight);

  for (let cell of snakeCells) {
    ctx.fillStyle = 'brown';
    ctx.fillRect(cell[0], cell[1], cellSize, cellSize);
  }
}

function update() {
  let headX = snakeCells[snakeCells.length - 1][0];
  let headY = snakeCells[snakeCells.length - 1][1];

  // let newHeadX = headX + cellSize;
  // let newHeadY = headY;

  let newHeadX;
  let newHeadY;

  //direction right hai toh
  if(direction === "right"){
    newHeadX = headX + cellSize;
    newHeadY = headY;
  }
  else if(direction === "left"){
    newHeadX = headX - cellSize; //agr left ja rahe hai toh -(minus) kar diya
    newHeadY = headY; //Y as it is rahega
  }
  else if(direction === "up"){
    newHeadX = headX;
    newHeadY = headY - cellSize;
  }
  else {
    newHeadX = headX;
    newHeadY = headY + cellSize;
  }

  snakeCells.push([newHeadX, newHeadY]);
  snakeCells.shift();
}
//pure body pe event listener lga diya
document.addEventListener('keydown', function(e){
  if(e.key === 'ArrowUp'){ //up karenge toh y axis m jayenge...toh y pe jayenge toh y wala coordinate change hoga. x wala unchanged rahega
    direction = 'up';;
  }
  else if(e.key === 'ArrowRight'){
    direction = 'right'; //right press karenge toh direction right ho jayegi
  }
  else if(e.key === 'ArrowDown'){
    direction = 'down';
  }
  else{
    direction = 'left';
  }
})

setInterval(function () {
  update();
  draw();
}, 200);


//food ke liye...food ka size cell ke size ke barabar...and random jgah generate ho uske liye...coordinates random ke through generate karenge
//Math.random returns b/w 0 & 1. Hamari screen 1000 waidth and 600 height ke beech m generate karna hai.
//coordinate... 950,0 aa sakta hai and 0,550 bhi aa sakta hai...and niche m generate ho rha hai toh...950,550 tak...taki cell se bahar food na generate ho.
//



