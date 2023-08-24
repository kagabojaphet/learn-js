//create a schema 
import mongoose from "mongoose";
const userSchemas = new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confrimpassword:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:user
    },
    createdat:{
        type:Date,
        default:Date.now()
    }
});

//declare a variable that hold a schema
const User=mongoose.model("User",userSchemas)
export default User