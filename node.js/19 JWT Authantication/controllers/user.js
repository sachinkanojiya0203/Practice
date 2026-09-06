const User=require('../models/user')
const {v4:uuidv4}=require('uuid')
const {setUSer}=require('../service/auth')

async function HandleuserSignup(req,res) {
    const {name,email,password}=req.body
    await User.create({
        name,
        email,
        password
    });
    // return res.render('home');   
    return res.redirect('/');
}
async function HandleuserLogin(req,res) {
    const {email,password}=req.body;
    const user=await User.findOne({
        email,
        password
    });
    if(!user)
        return res.render('login',{
    error:'invalid Username or password'})

    const token= setUSer(user);
    res.cookie('uid',token)
    return res.redirect('/');
}

module.exports={
    HandleuserSignup,   
    HandleuserLogin,
}