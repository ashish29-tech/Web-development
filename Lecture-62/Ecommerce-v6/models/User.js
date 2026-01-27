const mongoose =  require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');


//schema
const userSchema = new mongoose.Schema({ //schema ka name...userSchema
    // username - Handle by PLM(passport-local-mongoose)
    // password - Handle by PLM(passport-local-mongoose)
    email:{
        type:String,
        trim:true,
        required:true
    },
    role:{ //role bna dete hai...
        type:String,
        default:'buyer'//agr us bande ne kuch nai define kiya toh wo default buyer hi ho jaye. Signup.ejs m bhi change karna hoga
    },
    gender:{
        type:String,
        trim:true,
        required:true
    }
} )


//Ye plugin...upar ke schema and neeche model ke beech m. 
userSchema.plugin(passportLocalMongoose); //always apply on schema. plugin schema pe lagta hai. 


//model
let User = mongoose.model('User' , userSchema);
module.exports = User;