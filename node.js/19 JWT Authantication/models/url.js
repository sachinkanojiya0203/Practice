const mongoose=require('mongoose')



// schema

const urlschema=new mongoose.Schema({
    ShortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true
    },
    VisitHistory:[{timestamp:{type:Number}}],
    CreateBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',    
    }
},
{timestamps:true}
);

const URL=mongoose.model('url',urlschema);

module.exports=URL;