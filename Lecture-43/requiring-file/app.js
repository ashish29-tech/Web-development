//We have app.js...where we have variables and functions... and index.js....if we want to use app.js file content in index.js. So do we need to redeclare them ? No
//We have a principle called DRY and WET.
//DRY: Do not repeat youself.
//WET: Write Everything Twice

//We try to use DRY more...so it reduces baar-baar likhna.



//yha ham path dete hai...jha se require karna hai wha ka path.
//whenever we require a file..wo pehle run hoti hai..yha index file ko require kiya hai toh pehle ye top to bottom krun hogi isliye 4 output aa rahe cuz index.js m 3 console hai and index.js se kuch export nahi kar rahe toh yha empty object aa rha hai
// let math = require('./index'); // ./index likhne se index.js se acquire kar lega. And jab require likhte hai to .js likhne ki jarurat nai padti. Acquire kar ke 1 variable m store kar liya

// console.log(math); //ye run karenge...requiring file m hote hue...node app.js...isse 4 output ayenge..unme se ek object aa rha. 4 kyo aye cuz upar require kiya toh pehle index wali file chali and wha ka sab run hua and wha(index.js) se kuch export nahi kiya toh empty object aya.

//cd requiring-file
//node app.js...isse 4 value aa jaeygi....3.145, 49, 11, {}
//jo bhi file require karte hai wo pehle run hoti hai...isliye index.js wale sare console chal gye...and kuch nhi bheja tha index ki file se...isliye ultimately math m object aya. 
//When u don't export anything from ur file by default empty object is being sent. 

//---------------------------------------
let math = require('./index'); // terminal m run hoga to ye automatically run hoti hai.
console.log(math); //this is an object. We can destructure it. 

// let {PI, ans1, ans2} = math; //object destructure. PI, ans, ans2 naam se bna hua hai

//Math m ek object aa raha tha
// // console.log(math.PI); //objects ke andar ki property ko access
// console.log(PI);
// // console.log(math.ans1(6));
// console.log(ans1(6));
// // console.log(math.ans2(6,7));
// console.log(ans2(6,7));

//---------------------------------------------------------
//Sidha destructure kiya

// let {PI, ans1, ans2} = require('./index'); //jo bhi index se mila use sidha desructure kiya

// console.log(math.PI);
// console.log(PI);
// // console.log(math.ans1(6));
// console.log(ans1(6));
// // console.log(math.ans2(6,7));
// console.log(ans2(6,7));

//------------------------------------------

// let {PII, ans1, ans2} = require('./index'); //jo bhi index se mila use sidha desructure kiya

// console.log(PII); //yha PII naam ki key usi hogi
// // console.log(math.ans1(6));
// console.log(ans1(6));
// // console.log(math.ans2(6,7));
// console.log(ans2(6,7));

//------------------------------------------------------

// let {PII:hello, ans1, ans2} = require('./index'); //kisi aur naam se bhi destructure ho sakta hai

// console.log(PII); //isse nai chalega cuz name changed
// console.log(hello); //hello se chalega cuz name change kar diya
// // console.log(math.ans1(6));
// console.log(ans1(6));
// // console.log(math.ans2(6,7));
// console.log(ans2(6,7));

//-------------------------------------------------------------

// let naam = require('./index'); //variable m daal diya jo bhi index se mil rha hai...string mil rha hai use variable m dal diya
// console.log(naam) //terminal m naam(ashish jo dusri file se bhej rahe hai wo aa jayega)


//folder bnane ke liye...linux command... mkdir folderName







