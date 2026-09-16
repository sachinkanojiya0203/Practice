const {Schema,model}=require("mongoose");
const {createHmac,randomBytes}=require("crypto")
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
        required:true,
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

    next();
})
const User=model('user',UserSchema);

module.exports=User;