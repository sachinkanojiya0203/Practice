const {Schema,model}=require("mongoose");
const {createHmac,randomBytes}=require("crypto");
const { createTokenForUser } = require("../services/Authentication");
const UserSchema=new Schema({
    fullname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salt:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    profile_url:{
        type:String,
        default:"/images/avatardefault.png"
    },
    role:{
        type: String,
        enum:["USER","ADMIN"],
        default:"USER"
    },
},{timestamps:true});

UserSchema.pre('save',function(next){
    const user=this;
    if(!user.isModified("password"))return; 

    const salt=randomBytes(16).toString();
    const hashpassword=createHmac("sha256",salt).update(user.password).digest("hex");

    this.salt=salt;
    this.password=hashpassword; 

    next;
})

UserSchema.static('matchPasswordAndGenerateToken',async function(email,password){
    const user=await this.findOne({email});
    if(!user)throw new Error("User not found!");

    const salt=user.salt;
    const hashpassword=user.password;

    const userprovidedHash=createHmac("sha256",salt).update(password).digest("hex");
    if(hashpassword!==userprovidedHash)throw new Error("Incorrect Password!")
    
    const token=createTokenForUser(user);
    return token;
})
const User=model('user',UserSchema);

module.exports=User;