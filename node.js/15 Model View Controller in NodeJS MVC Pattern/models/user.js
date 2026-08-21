const mongoose=require('mongoose');

// Schema

const userschema= new mongoose.Schema({
    Firstname:{
        type:String,
        required:true,
    },
    Lastname:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    jobTitle:{
        type:String,
    },
    gender:{
        type:String,
    }
},{timestamps:true}
)

const User=mongoose.model('user',userschema);

module.exports=User;