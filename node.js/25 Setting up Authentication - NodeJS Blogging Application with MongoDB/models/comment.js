const { Schema, model } = require("mongoose");


const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    blogId: {
        type: Schema,
        ref: "blog"
    },
    createdBy: {
        type: Schema,
        ref: "user"
    },
},{timestamps:true});


const Comment=model("comment",commentSchema);

module.exports=Comment;