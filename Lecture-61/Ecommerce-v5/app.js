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

let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}

app.use(session(configSession)); //session ke baad niche passport cuz serialize and deserialize session ke andar hoga...toh session pehle ham use kar paye 
app.use(flash());


// use static serialize and deserialize of model for passport session support...https://www.npmjs.com/package/passport-local-mongoose
//passport m jo serialize and deserialize karte hai...iske liye passport pe bhi session ko karna padta hai..taki passport session ko ustemal kar paye...session and passport do alag-alag package
app.use(passport.initialize()); //passport ko hamare session ka acces mil jaye taki use use kar paye...passport initialise and upar require kar liya.
app.use(passport.session()); //pass. session is a different package and passport is a different package...so we want our passport to get the access of session....passport ab mere session ka bhi use kar sakta hai.
passport.serializeUser(User.serializeUser()); //passport command...ye passport ke andar serialise iske liye passport ke session ko 
passport.deserializeUser(User.deserializeUser()); //passport command

// use static authenticate method of model in LocalStrategy...https://www.npmjs.com/package/passport-local-mongoose
passport.use(new LocalStrategy(User.authenticate())); //jha serialise kiya hai user ko wha user bhi to chahiye hoga...upar require kar liya


app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

// Routes
app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes); //upar auth routes bnaya and yha use kar rahe hai. 

const port = 8080;
app.listen(port,()=>{
    console.log(`server connected at port : ${port}`);
})