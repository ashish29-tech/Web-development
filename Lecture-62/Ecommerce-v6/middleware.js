const Product = require("./models/product");
const { productSchema } = require("./schema");
const { reviewSchema } = require("./schema");

const validateProduct = (req,res,next)=>{
    const {name, img, price , desc} = req.body;
    const {error} = productSchema.validate({name,img,price,desc});
    
    if(error){
        const msg = error.details.map((err)=>err.message).join(',');
        return res.render('error' , {err:msg});
    }
    next();
}

const validateReview = (req,res,next)=>{

    const {rating, comment} = req.body;
    const {error} = reviewSchema.validate({rating,comment});

    if(error){
        const msg = error.details.map((err)=>err.message).join(',');
        return res.render('error' , {err:msg});
    }
    next();
}

//new middleware bna dete hai...
//- Jab user login na ho toh wo products dekh sake sirf...comment ya details wgr na dekh sake...iske liye login naam ka middleware bna sakte hai cuz ye route hit karne se pehle check karna hai..toh middleware toh for sure banega.....isLoggedin naam de dete hai. isLoggedin hoga toh hi ye next() next middleware pe ja payega wrna return ho jayega. Middleware ke liye page bna hi rakha hai.
const isLoggedIn = (req,res,next)=>{ //isLoggedIn naam se bna liya middleware
    //ek method hota hai...isAuthenticated..it will return true if user is logged in
    //if user login nai hai 
    if(!req.isAuthenticated()){ ////req.isAuthenticated ye true or false return karta hai...aise hi check apne middleware m lga sakte hai. If false hai..means user login nai hai..
        req.flash('error', 'You need to login first'); //error show kara do and message dikha do...You need...
        return res.redirect('/login') //redirect /login page par
    } 
    next(); //if statement m nai jata mtlb login hota hai toh next middleware chala do. 
}


const isSeller = (req,res,next)=>{ //if seller nai hai toh wo na add, delete, edit kar payega...toh ek middleware..seller ka bnana padega..
    let {id} = req.params; //destructure
    if(!req.user.role){ //seller ke liye....user ka role hona jaruri hai..now role kha milega ? request hai toh req.user ka bhi access hoga and us user ke andar role naam ki chiz toh hogi hi...pehle check kar lete hai role hi nai hua toh
        req.flash('error', 'You do not have the permissions'); 
        return res.redirect('/products')
    }
    else if(req.user.role !== "seller"){ // seller ke barabar nai hua toh
        req.flash('error', 'You do not have the permissions'); 
        return res.redirect(`/products/${id}`) //id yha slash m lga di destructure kar ke
    }
    next();//agr sab shi hai toh..permission hogi toh next kar dete hai
}

//product ka author hai ya nahi...
const isProductAuthor = async (req,res,next)=>{ //if seller hai..toh kya wo us product ka author hai..author nai hai toh edit, delete nai kar sakta...toh middleware bnayenge kya wo product ka author hai ya nai hai
    let {id} = req.params;//product ka author hai ya nai iske liye sabse pehle product ki id chaiye hogi
    let product = await Product.findById(id) //product id mil gyi toh product mil sakta hai..findById se pura product mil jayega...and since it's a DB command to it'll return us a promise...and promise works with async and await...jis product ki baat kar rahe hai wo mil jayega pura ka pura
    console.log(product.author, 'author');// jo bande ne product bnaya hai. This is an object id.
    console.log(req.user , 'user'); //jo bnda logged in hai. This is also an object id.
    //jab 2 object id ko compare karte hai toh directly nahi kar sakte...tab method hota hai .equals().... so == ya === se compare nahi kar sakte
    //jo banda logged in hai and jo banda us product ka author hai agr dono ki id match kar tabhi toh uska author mana jayega
    //product ka author..req.user ki id ke equal nahi hua toh
    if(!product.author.equals(req.user._id)){ //product author...req.user._id ke equal nai hua toh. 2 object id(product.author, req.user._id) ko cpmapre directly nai kar sakte...uske liye .equals method.
        req.flash('error', 'You are not the owner of this product'); 
        return res.redirect(`/products/${id}`) //
    }
    next();
} //isProductAuthor...ko export kar diya niche and jha chahiye wha add kar diya...routes m productRoutes.js m edit and delete m 


module.exports = {validateProduct ,validateReview, isLoggedIn, isSeller, isProductAuthor} ; //ye teeno export kar diye yha se...and require kar diya productRoute.js m...ab isSeller ko bhi bhej diya