//model se review.js cop-paste kar diya yha

const mongoose =  require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose'); //require kar liya 


//schema
const userSchema = new mongoose.Schema({ //schema ka name...userSchema
    // username -nai dal sakte cuz Handle by PLM(passport-local-mongoose)
    // password -nai dal sakte Handle by PLM(passport-local-mongoose)
    email:{
        type:String, //email ka type string
        trim:true,
        required:true
    },
    gender:{
        type:String,
        trim:true,
        required:true
    }
} )

//https://www.npmjs.com/package/passport-local-mongoose Passport-Local Mongoose is a Mongoose plugin that simplifies building username and password login with Passport.
//Ye plugin schema pe lagta hai...upar ke schema and neeche model ke beech m. 
//schema ka naam userSchema hai
userSchema.plugin(passportLocalMongoose); //always apply on schema. plugin schema pe lagta hai. 


//model
let User = mongoose.model('User' , userSchema);
module.exports = User;