const mongoose=require('mongoose');

const schema= new mongoose.Schema({
    name:{
        Type:String,
        required:true,
    },
    email:{
        Type:String,
        required:true,
        unique:true,
    },
    password:{
        Type:String,
        required:true,
    }
},{timestamps:true});

const User=mongoose.model('users',userSchema)

module.exports=User;