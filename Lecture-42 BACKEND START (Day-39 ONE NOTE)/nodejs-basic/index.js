
//What is nodeJs ?
//is this a framework, library, tool or befizul ?
//Ye inme se kuch bhi nahi
//It's a run time environment

//When js was made in 1995 by Brendan Eich it was limited to browser. That means to use js...one must have a browser
//Browser ke paas khud ke 2 engine hote hai...1st is Layout engine...2nd is js engine
//Layout engine is responsible for HTML,CSS and js engine responsible for js

//In 2009 a person named as Rayn Dohl. He took v8(chrome ka js engine name)..and replicate it and run in an independent machine...yahi se nodejs bna.
//so nodejs is v8 engine + uski kuch independencies...without the help of a browser chalana chahte hai to wo nodejs hai. Ultimately ye js ka code chalane kaam ayega.
//In other words...Nodejs is a js run time environment which is used to run the js code.


//Advantages of nodejs:
//CLT(command line tools)...linux. Khud ki bna sakte hai with the help of node.js
//Servers(web servers)...create kar sakte hai
//native applications(desktop applications) bna sakte hai...mtlb android ya ios tak restricted nai rehta. It includes everything...Android, IOS, destop app etc.


//MERN...N is nodejs
//Why nodejs ? 
//Backend ke liye no need to learn new programming lang...we can write backend in js...cuz nodejs understand js.
//Browser and Nodejs comparison.
//Browser m: Document naam ka object available hai..means DOM is available. In Nodejs..it isn't available.
//Browser m: We have read...whenever js code is run a GEC is created..and along with that Global Object is also created...Global Object hamara window hai... this keyword wgr kar rahe the. Window is the name of global object in case of browser...and in case of nodejs...global is the name of global object.
//Browser ke case m filesystem ka access nai hota....nodejs m filesystem ka access hota hai.
//What is filesystem ? Jab DB use nai hote the ya na ke barabar use hote the...tab filesystem ka use karte the data ko store karne ke liye


//-----------------------------------------------------------------
//Open terminal...by pressing: ctrl + backticks
//Type node and press enter.
//now you can do what you were able to do on browser...1+1, 'ashish'.toUpperCase() etc
//console is a REPL. so here...it is our node ka REPL
//if we type...window...and press enter...nothing will happen...will show "window isn't defined"...cuz yha window nai hota
//Type...global....yha global hota hai
//Yha 1 aur benefit hai...HTML file banane ki jarurat nai hai...abc.js jo bhi naam ki file hai wo nodejs pe directly chal jayegi.

let pi = 3.145;
let favNumber = 7;

function sqr(num){ //square ka function bna diya. 
  return num*num //upar argument m catch kar lete hai
}

let ans = sqr(6); //square ko call kar liya with the value of 6

console.log(pi);
console.log(favNumber);
console.log(ans);

//open terminal
//type ls...means list...nodejs-basic ayega means...ye folder hai
//ye(index.js) js file nodejs-basic m hai...toh nodejs-basic tak jana padega...we'll type...cd(change directory) nodejs-basic
//iske andar ab index.js ki file hai jise nodejs se chalana hai...to kisi bhi chiz ko node se chalane ke liye... node spce file name....node index.js
//print ho jayega sara console wali statement


// .exit or ctrl + c....to come out of node REPL



//--------------------------------------------
//COMMAND. THIS TOPIC IS UNRELATED TO SYLLABUS BUT IMPORTANT.
//download git bash....for command. Ispe mac ya linux wali sari command chal jati hai.
//gitbash nai hai to.... dir likho...isse list aa jayegi
//folder ko kehte hai directory. TO change directory... cd space folder name
//ek level peeche jane ke liye... 'cd ..'(dot dot 2 times)
//mkdir name of directory: make a directory...to make new folder
// touch index.js: to make a file. Example: touch app.css, touch index.js
// code . : Jis bhi lecture pe hai...use open karo vs code m.
// rmdir app.css: It deletes a directory not file.
//rm file name(app.css): removes a file
//can we remove folder with the help of rm ?
//clear karne ke liye mac m...cmnd k...and windom m cls
//if rmdir filename...karne pe "directory not empty" aa rha hai to pehle directory empty karni padegi
//rm -rf lecture name....to delete. rf is a flag. rf means recursively forcefully....tab tak delete karte raho jab tak pura khali na ho jaye. Jha pe bhi -(negative) lgta hai unhe kehte hai flag.
//cat index.js: Kisi lecture tak cmd m open kar ke ye type karna hai...isse sara content nazar aa jayega. In other words..cat command shows you the entire content.
//THIS COMMAND SHOULD NOT BE USED.  vim index.js(file name). File ko  delete karne ke liye. i press kiya..isse insert kar sakte hai...then press escape..then write :(colon)wq...mtlb :wq...isse override ho jayega
//mv Lecture-40 Lecture-50: TO change name of a file. Lecture-40 Leacture-50

//-------------------------------------------------------------
//node ke repl ke andar ek object hota hai jise process kehte hai
//What is Process: Object which carries all the info about your nodejs. 
//Is process m aur bhi object hai...process.argv. process.argv..gives an array..and path where my nodejs is installed.
//Folder pe gaye...nodejs-basic...and node enter kiya...toh node m aa gaye...and then process pe click kiya...we'll see massive object.
// and then prcess type and enter kiya....process.argv...ye node ke REPL(terminal) se run kiya hai..isse hame array milega where our nodejs is installed
//Bhr ayenge pehle...2 time ctrl c/.exit...











