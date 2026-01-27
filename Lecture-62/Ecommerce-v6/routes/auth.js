const express =  require('express');
const User = require('../models/User');
const passport = require('passport');
const router = express.Router();


router.get('/register' , (req,res)=>{ //register kar rahe user ko 
    res.render('auth/signup'); //response pe render kar diya signup ka page...auth ke andar ja and signup wala page uthalo..views m auth m bnaya signup.ejs. 
})

//POST request se data...request ki body m se milta hai.
router.post('/register' , async (req,res)=>{ //jab signup pe click karega toh DB m aa jana chahiye...so DB m changes hote hai to POST request and /register path pe hi kara rahe hai.
    // console.log(req.body);
    let { username , password , email ,role, gender} = req.body; //npm passport local mongoose m...static method m register naam ka method. Yha destructure kar liya...request ki body m se jo ayega. new field add kari hai...toh yha role ayega.
    // res.send('hi')
    let user = new User({ username , email , gender, role}); //object. yha role bhejna padega
    let newUser = await User.register(user , password);//register is a static method which means ye hamare model pe seedha lag jayega. register 2 chize accept kar rha...1st is user and 2nd is password. And since it's a DB operation...it'll take timea amd return a promise...so async and await. Ye register apne aap hi sare kaam karega...DB m store, username ko unique and password ko hash etc.
    // res.send(newUser);
    res.redirect('/login')//redirect kar denge
})

router.get('/login' , (req,res)=>{ //login ka route
    res.render('auth/login');
})

//login DB m jayega..DB m chizo ko check akrega...password ko match karega...
router.post('/login', //path sirf login hai..isi pe hit karaya hai
  passport.authenticate('local', //local strategy ke sath jana  hai. Passport ka use kar rahe hai toh ise reaquire karna padega.
  { 
    failureRedirect: '/login', //authentication fail ho gya toh firse login pe jana hai
    failureMessage: true 
  }),
  function(req, res) { //else ye function run kar denge
    // console.log(req.user , "User"); //jab bhi login hote hai toh...toh jo request hai usme automatically 1 object hota hai req.user. Check kar lete hai console kar ke..and string m User print karwa diya so that dikkat na ho. Now we want ki req.user hai iska access throughout the app available ho har jgah..toh jaise app.js m succes and error ko store kiya tha waise hi user ko store kar sakte hai...
    req.flash('success' , `Welcome Back ${req.user.username}`) //evaluate kara liya
    res.redirect('/products');
});

router.get('/logout' , (req,res)=>{
    req.logout(()=>{ //call back function bnaya jo automatically call ho rha hoga
        req.flash('success' , 'Logged out successfully')
        res.redirect('/login');
    });
})

module.exports = router;