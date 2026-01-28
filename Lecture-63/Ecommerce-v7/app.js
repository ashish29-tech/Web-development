const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const methodOverride  = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/review");
const authRoutes = require("./routes/auth"); //auth route bna diya.
const productApi = require("./routes/api/productapi"); //auth route bna diya.
const passport = require('passport'); //passport command
const LocalStrategy = require('passport-local'); ///passport command
const User = require('./models/User'); ///passport command...user yha require ho gya..niche user pe click karte hi.


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/julybatch')
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})
 

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));
// now for public folder
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// seeding dummy data
// seedDB();

let configSession = { //ye session ka middleware hai.
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { //cookie ke andar 1 object bheja
        httpOnly: true, //abhi secure itna nai rakhna toh isrf http...and sessionId hp hi rahe....and ye seesion id 
        expires: Date.now() + 7*24*60*60*1000, //abhi time ka pta lag rha hai Date.now() se...7 days * 24 ghante * 60 minute * 60 seconds * 1000 millisecond in 1 minute....itni der baad expire ho jaye
        maxAge: 7*24*60*60*1000 //yahi iski umr hui...7 days. This is how we manage session ka time. Expire ya maxAge dono m se jo pehle aa jaye..isliye ham dono ko same likhte hai
    }
}

app.use(session(configSession)); //session ke baad niche passport 
app.use(flash());


// use static serialize and deserialize of model for passport session support
app.use(passport.initialize()); //passport initialise and upar require kar liya.
app.use(passport.session()); //pass. session is a different package and passport is a different package...so we want our passport to get the access of session....passport ab mere session ka bhi use kar sakta hai.
passport.serializeUser(User.serializeUser()); //passport command...ye passport ke andar serialise iske liye passport ke session ko 
passport.deserializeUser(User.deserializeUser()); //passport command

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate())); //jha serialise kiya hai user ko wha user bhi to chahiye hoga...upar require kar liya


app.use((req,res,next)=>{
    res.locals.currentUser = req.user; //user throughout the app available ho har jgah. user ko currentUser name de diya and ye value req.user se lega. Toh ab aisa karenge ki...current user login hai toh login mat dikhao...and if current user login nai hai to dikhao.
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

// Routes
app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes); //upar auth routes bnaya and yha use kar rahe hai. 
app.use(productApi);// yha use kar liya

const port = 8080;
app.listen(port,()=>{
    console.log(`server connected at port : ${port}`);
})