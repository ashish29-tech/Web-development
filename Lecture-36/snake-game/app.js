// //------------------------Step 1------------------------
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

// //snake draw karga
// function draw(){}

// //After sometime snake gets updated...
// function update(){}

// //suppose 200ms ke baad update hoga and draw hoga..means ek kaam ko repeat karna hai...for this we have setInterval
// //Ye pehle update karega...phir draw karega
// setInterval(function(){ //setInterval accepts a function.
//   update();
//   draw();
// }, 200) 


// //------------------------Step 2------------------------

// let canvas = document.querySelector('canvas'); //board
// let ctx = canvas.getContext('2d'); //brush select kiya jise context kehte hai..jo canvas m milta hai

// //Ek var h ka, ek w ka, cell size ka
// //Snake moves from one cell to another...means it gets updated.
// //Update ho rha hai kahi aur cell m ja rha...mtlb draw bhi to ho rha hai.
// //So we can create 2 functions...update and draw
// //snake size ? can be of 2 box, 4 box, 40 box..means can be of any size. So we are assuming snake is a rectangle.
// //If snake size is 5 then we have to draw 5 rectangle.
// //Har rectangle ko bnane ke liye uska starting point chahiye...uska x and y.
// //H and W to cell size ke variable se define kar hi rakha hai...50.

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1000;

// //snake ke cells jiski wjah se snake rectangle ban rha hai..
// let snakeCells = [ [0,0] ]; //snakeCells [[0,0]]...2d array and 0,0 se start hoga. Initial length 1 hoga.
// // let snakeCells1 = [ [0,0] , [50,0] , [100,0]]; //If snake ki length 3 hoti to aise chalta..
// //In the beginning we are assuming that snake will move in right direction.



// //snake draw karga...mtlb rectangle ko hi draw karna hai
// function draw(){ // Rectangle draw karne ke liye let snakeCells = [ [0,0] ]...ye array hai..isi ka refernce leke draw karna hai..array ko draw karne ke liye for loop
//   //draw karne se pehle poori screen ko erase kar dena chahiye..phir draw karna chahiye..wrna purane wala bhi show karega screen pe
//   ctx.clearRect(0,0,boardWidth,boardHeight); //shuru se lekar last tak karna hai clear..(0,0,600,1000)
//   for(let cell of snakeCells){ //snakecells ke array ke cells pe gya
//     ctx.fillStyle = 'red'
//     ctx.fillRect(cell[0], cell[1], cellSize, cellSize) //rectangle fill...cell ke 0th se cuz 2d hai na...x and y dono chahiye mtlb..0th index and 1stindex. Issey rectangle ban raha hai.
//   }
// }

// //After sometime snake gets updated...
// //[[50,50]]..andar wala array is 0....[[100,50]]...andar wala array 1....etc.
// //[[50,50]]...index 0 length 1....[[100,50]]...index 1 and length2..[[150,50]]....index 2 and length3.....so index = length - 1 
// function update(){
//   let headX = snakeCells[snakeCells.length - 1][0]; //snakeCells ke andar jao and snakeCells ki jo length hai..usme se 1 - kar denge so last wala mil jaye..and last wale cell ka pehla co-ordinator [0]
//   let headY = snakeCells[snakeCells.length - 1][1]; //snakeCells ke andar jao and snakeCells ki jo length hai..usme se 1 - kar denge so last wala mil jaye..and last wale cell ka pehla co-ordinator [1]

//   let newHeadX = headX + cellSize; //new headX ke liye purane headX m jao and cell size se plus kar do
//   let newHeadY = headY; //cuz maan rahe hai snake is moving in right direction only

//   //Rectanle new head se banega..tab banega jab wo purane cell ke andar....naye ko daal rahe hai to purane ko htana padeaga cuz purana kisi kaam ka nai hai..htana zaruri hai cuz wrna bina khana khaye...
//   snakeCells.push([newHeadX,newHeadY ]); //so snake cell ke andar push karna hai array ko jo store karta hai
//   snakeCells.shift(); //and starting se use shift bhi kar dena hai...taki (0,0) wala hat jaye...agr shift nai karte to array ki length 2 ho jati..mtlb bina khana khaye snake ki length badhti rehti...update karte-karte peeche wali value hta rahe hai so that snake ki length 1 hi rahe
// }

// //suppose 200ms ke baad update hoga and draw hoga..means ek kaam ko repeat karna hai...for this we have setInterval
// //Ye pehle update karega...phir draw karega
// setInterval(function(){ //setInterval accepts a function.
//   update();
//   draw();
// }, 200) 

// //Initially to length 1 hi rahegi...jab tak food nai khata
// //baad m size 5 ho jaye to 5 rectangles...5 rectangle ke liye 5 co-ordinates hone chahiye
// //1 co-ordinte bnane ke liye we require...X, Y, H(50), W(50)
// //Sare co-ordinates ko sambhal ke rakhna hai to array m sambhal ke rakh sakte hai.....[150, 50] [200,50] [250,50]...inse snake ka rectangle banega...in sabko bhi ek sath jodna hoga..can we make it a 2d array ?


//------------------------Step 3------------------------

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

// //snake ke cells jiski wjah se snake rectangle ban rha hai..
// let snakeCells = [ [0,0] ]; //snakeCells [[0,0]]...2d array and 0,0 se start hoga. Initial length 1 hoga.
// // let snakeCells1 = [ [0,0] , [50,0] , [100,0]]; //If snake ki length 3 hoti to aise chalta..
// //In the beginning we are assuming that snake will move in right direction.



// //snake draw karga...mtlb rectangle ko hi draw karna hai
// function draw(){ // Rectangle draw karne ke liye let snakeCells = [ [0,0] ]...ye array hai..isi ka refernce leke draw karna hai..array ko draw karne ke liye for loop
//   //draw karne se pehle poori screen ko erase kar dena chahiye..phir draw karna chahiye..wrna purane wala bhi show karega screen pe
//   ctx.clearRect(0,0,boardWidth,boardHeight); //shuru se lekar last tak karna hai clear..(0,0,600,1000)
//   for(let cell of snakeCells){ //snakecells ke array ke cells pe gya
//     ctx.fillStyle = 'red'
//     ctx.fillRect(cell[0], cell[1], cellSize, cellSize) //rectangle fill...cell ke 0th se cuz 2d hai na...x and y dono chahiye mtlb..0th index and 1stindex. Issey rectangle ban raha hai.
//   }
// }

// //After sometime snake gets updated...
// //[[50,50]]..andar wala array is 0....[[100,50]]...andar wala array 1....etc.
// //[[50,50]]...index 0 length 1....[[100,50]]...index 1 and length2..[[150,50]]....index 2 and length3.....so index = length - 1 
// function update(){
//   let headX = snakeCells[snakeCells.length - 1][0]; //snakeCells ke andar jao and snakeCells ki jo length hai..usme se 1 - kar denge so last wala mil jaye..and last wale cell ka pehla co-ordinator [0]
//   let headY = snakeCells[snakeCells.length - 1][1]; //snakeCells ke andar jao and snakeCells ki jo length hai..usme se 1 - kar denge so last wala mil jaye..and last wale cell ka pehla co-ordinator [1]

//   let newHeadX = headX + cellSize; //new headX ke liye purane headX m jao and cell size se plus kar do
//   let newHeadY = headY; //cuz maan rahe hai snake is moving in right direction only

//   //Rectanle new head se banega..tab banega jab wo purane cell ke andar....naye ko daal rahe hai to purane ko htana padeaga cuz purana kisi kaam ka nai hai..htana zaruri hai cuz wrna bina khana khaye...
//   snakeCells.push([newHeadX,newHeadY ]); //so snake cell ke andar push karna hai array ko jo store karta hai
//   snakeCells.shift(); //and starting se use shift bhi kar dena hai...taki (0,0) wala hat jaye...agr shift nai karte to array ki length 2 ho jati..mtlb bina khana khaye snake ki length badhti rehti...update karte-karte peeche wali value hta rahe hai so that snake ki length 1 hi rahe
// }

// //suppose 200ms ke baad update hoga and draw hoga..means ek kaam ko repeat karna hai...for this we have setInterval
// //Ye pehle update karega...phir draw karega
// setInterval(function(){ //setInterval accepts a function.
//   update();
//   draw();
// }, 200) 

//Initially to length 1 hi rahegi...jab tak food nai khata
//baad m size 5 ho jaye to 5 rectangles...5 rectangle ke liye 5 co-ordinates hone chahiye
//1 co-ordinte bnane ke liye we require...X, Y, H(50), W(50)
//Sare co-ordinates ko sambhal ke rakhna hai to array m sambhal ke rakh sakte hai.....[150, 50] [200,50] [250,50]...inse snake ka rectangle banega...in sabko bhi ek sath jodna hoga..can we make it a 2d array ?


//-------------------------------------------------------------------------------------------------------------------------------
//Practice

//---------------------------STEP 1--------------------------------------------------------------------

// //sbse pehle canvas ko select
// let canvas = document.querySelector('canvas');
// //brush select
// let ctx = canvas.getContext('2d'); //canvas ke andar getContext milta hai

// //aage jata hai toh peeche jgah khali chut jat haogi...
// //phir kuch seconds baad aage badhega...means update hoga...
// //Update hone ke baad draw bhi toh ho rha 
// //toh mtlb we can make 2 functions...update and draw...
// //aur peeche wale gayab
// //snake can be of any size
// //we are assuming snake is a rectangle
// //starting m sirf 1 hi length ka hota hai. Mtlb 1 rectangle ka. Iski width and height...ke liye hamne cell size ka variable le rakha hai...50 hai 1 cell ka size..
// //so height bhi 50 and length bhi 50..1 cell/rectangle ki....
// //Toh if 1 rectangle draw kare toh...x,y coordinates ke aage...50,50 ki jgah...we can use variable...cell size
// //Agr snake 3 length ka hai toh....coordinates honge...(x1,y1), (x2,y2), (x3,y3)...toh 3 rectangle bnane hai.
// //Toh agr 1 rectangle ko bnane ke liye uska starting point chahiye..uska x,y..baki height and width toh cell size ke variable se define kar rakhi hai...
// //

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1000;

// //snake draw
// function draw(){

// }

// //snake update har thori der m
// function update(){

// }

// //snake khana khayega and aage badh jayega...ye kaam baar-baar ho raha hai...toh iske liye we have setInterval method..
// setInterval(function(){ //it accepts a callback function..and 2nd chiz is kitni der m tunhe use chalana hai.
//   //Pehle update karega phr draw..phir update and phir draw...
//   update() //update ko call kar liya 
//   draw() //yha draw ko call kar diya
// }, 200)

// //-------------------------------STEP 2------------------------------------------------------------

// //sbse pehle canvas ko select
// let canvas = document.querySelector('canvas');
// //brush select
// let ctx = canvas.getContext('2d'); //canvas ke andar getContext milta hai

// //aage jata hai toh peeche jgah khali chut jat haogi...
// //phir kuch seconds baad aage badhega...means update hoga...
// //Update hone ke baad draw bhi toh ho rha 
// //toh mtlb we can make 2 functions...update and draw...
// //aur peeche wale gayab
// //snake can be of any size
// //we are assuming snake is a rectangle
// //starting m sirf 1 hi length ka hota hai. Mtlb 1 rectangle ka. Iski width and height...ke liye hamne cell size ka variable le rakha hai...50 hai 1 cell ka size..
// //so height bhi 50 and length bhi 50..1 cell/rectangle ki....
// //Toh if 1 rectangle draw kare toh...x,y coordinates ke aage...50,50 ki jgah...we can use variable...cell size
// //Agr snake 3 length ka hai toh....coordinates honge...(x1,y1), (x2,y2), (x3,y3)...toh 3 rectangle bnane hai.
// //Toh agr 1 rectangle ko bnane ke liye uska starting point chahiye..uska x,y..baki height and width toh cell size ke variable se define kar rakhi hai...
// //

// let cellSize = 50;
// let boardHeight = 600;
// let boardWidth = 1000;

// //If snake 3 length ka hai toh coordinates honge..(x1,y1) (150,50), (x2,y2)(200,50), (x3,y3)(250,50)...toh hame ye teeno point sambhal ke rakhne hai..
// //Toh ham array m sambhal ke rakh sakte hai... [150,50] [200,50] [250,50]..in sare points se snake ka rectangle banega...toh in sabko jodna padega
// //Toh ham 2d array bna sakte hai....toh snake ke cells will be a 2d array....jo start hoga bilkul starting se[[0,0]]
// //And uski initial length 1 hai
// let snakeCells = [ [0,0]] //snake ki length initially 1 hai toh coordinates honge 0,0
// // let snakeCells = [ [0,0], [50,0], [100,0]]  //if snake ki length 3 hoti toh 3 coorsinates hote



// //snake draw
// function draw(){
//   //draw karne se pehle erase kar dena chahiye...pure board ko for draw karna chahiye..erase karne ke liye we have clearRect()
//   ctx.clearRect(0, 0, boardWidth, boardHeight) //0,0 se lekar 1000, 600 tak...aur ye hamne varible liya hua hai width and height name se
//   //rectangle draw karna hai...iske liye hamare paas array hai...is array ko reference leke array ko draw karna hai
//   //array ko draw karne ke liye for loop 
//   for(let cell of snakeCells){
//     //fill karne se pehle
//     ctx.fillStyle = 'brown'
//     //[ [0,0] ]..is cell ka 0th index 1st zero and first index next 0....uske baad 50,50 chahiye toh wo hame cellSize se mil rha hai
//     //isse rectangle ban raha hai..
//     ctx.fillRect(cell[0], cell[1], cellSize, cellSize); //rectangle ko fill kar dete hai. Cell se 0th se karna hai cuz 2d hai na..
//   }
// }

// //snake update har thori der m
// function update(){
//   //snakeCells ke andar ja and uske andar snakecells ki jo length hai...usme se 1 minus...taki hame last wala mil jaye and last wale ka jo 1st coordinate hai that will be x
//   let headX = snakeCells[snakeCells.length  - 1][0];
//   let headY = snakeCells[snakeCells.length  - 1][1]; //

//   let newHeadX = headX + cellSize //purane headX m jao and cellSize se plus kar do toh new headX mil jayega
//   let newHeadY = headY;

//   //ab jo rectangle bnana hai wo newhead se bnana hai...toh [0,0] se [50,0] ho gayi...mgr bina khana khaye nahi ho sakti toh purane coordinate [0,0] ko htana padega
//   //toh snakecells m push karna hai array ko...jo newHeadX and newHeadY store karta hai
//   snakeCells.push([newHeadX , newHeadY]);
//   //update karte hue peeche ki value hta di cuz bina khana khaye length nahi badh sakti
//   snakeCells.shift(); //and use sarting se shift bhi kar dena hai taki 0,0 wala hat jaye. Shift starting se hta deta hai.
// }

// //snake khana khayega and aage badh jayega...ye kaam baar-baar ho raha hai...toh iske liye we have setInterval method..
// setInterval(function(){ //it accepts a callback function..and 2nd chiz is kitni der m tunhe use chalana hai.
//   //Pehle update karega phr draw..phir update and phir draw...
//   update() //update ko call kar liya 
//   draw() //yha draw ko call kar diya
// }, 200)


// //As of now we are assuming snake is moving towards right side
// //Suppose starting m snake...50,50 pe tha...and food khaya toh 2 length ho gayi...coordinates milenge..100,50...then fir food kahaya toh 150,50 mila coordinartes..
// //toh ye coordinates baar-baar change ho rahe hai aur rectangle change ho raha hai...toh ye points baar-baar find karna padega
// //toh find karenge... purana point 100,50 + 50(cell size)...toh agr purane head m 50 add kar de toh new head ban jayega
// //Toh new head = head + 50


