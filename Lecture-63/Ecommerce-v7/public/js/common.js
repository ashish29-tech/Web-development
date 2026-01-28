
//Ye like ke liye hai.
//ye common.js file ko include karna padega...views->partials->footer.ejs m

// console.log("common js file")

//jo bhi like button hai uspe functionality lagani hai...


//like button pe event lagana hai
//Irrespective of the product...har ek product ke is like button pe event lagega
//means event will be applied on all the button which are present inside my diff-diff product.
//sare buttons ko ek sath like karna hai to means loop karna padega...
//jaise calculator m har ek button pe loop karna tha...same yha karna hai


let allLikeButton = document.querySelectorAll('.like-btn') // .like-btn class de di hai products m index.ejs m....jitne bhi button ke paas class .like-btn hai..they all will be getting selected inside this variable called like button..


async function likeButton(productId){ //Niche argument bheja hai usey yha catch kar liya...now axios ki help se request bhej sakte hai
  // console.log('liked the product');
  //task is to add liked product in the wishlist...for that we'll need that particular id...product id.....product id ko we can push in the array of wishlist
  //product ki unique id milegi kaise ? 
  //axios ki help se request send kar sakte hai

  try{
    //POST request axios se le lenge..axios docs se.
    //jo bhi output miilega wo response hoga
    let response = await axios({//axios returns a promise isliye await and axios. Jo bhi output milega wo mera response hoga. Axios ke andar object
    method: 'post', //method define kar diya
    url: `/products/${productId}/like`, //kon se url pe bhejni hai wo define kar denge. Is route pe hit karana hai hame. Is url ke corresponding ek route bhi bnana padega...productapi m.
    headers: {'X-Requested-With' : 'XMLHttpRequest'} //https://www.tutorialspoint.com/express-js-req-xhr-property  headers m object daldiya...object ke andar key:value. Ab hame terminal m true dikhega..ab ye hamari ajax request complete hui hai.
  }); 
    console.log(response); //let's see kya hame response mil rha hai ya nai...
  }
  catch(e){
    window.location.replace('/login'); //agr error aa rha hai to login kara dete hai...redirect jaise karte hai waise hi window se bhi wahi kiya
    console.log(e.message , 'error hai ye window wali line ka') //error ka message dikha do
  }
}

for(let btn of allLikeButton){ //har ek button pe loop kiya
  btn.addEventListener('click', ()=>{ //btn pe addEventListener lga diya click naam ka...and function run karna hai
    // console.log(btn.getAttribute('product-id')); //console karwa ke dekh lete hai. console m unique id milegi jitni baar like pe click karenge. 
    // btn.getAttribute('product-id');//getAttribute se mere self-defined attribute...product-id 
    // likeButton(); //jab function chale to ye likeButton naam ka function chal jaye
    //products folder m index.ejs m self defined attribute bna diya
    let productId = btn.getAttribute('product-id'); //So now we have Axios so we can send like ka request is 'product-id' pe....store kar lete hai..and niche args m bhej diya and upar function m catch kar liya
    likeButton(productId); //is product id ko as an argument bhej dete hai.
  })
}


//common.js pe hit hoga
//id mil jayegi
//id ke sath likeButton naam ka function hit ho jayega
//id catch ho rahi
//axios ke andar post request jayegai../products/${productId}/like par
//check karna padega kha pe hit ho rahi...api jo hamne bna rakha hai wha check karenge.


