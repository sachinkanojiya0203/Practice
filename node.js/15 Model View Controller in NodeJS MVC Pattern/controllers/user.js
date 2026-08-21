const User = require('../models/user')

async function HandleAllusers(req, res) {
    const allDBusers = await User.find({})
    return res.json(allDBusers)
};

async function Handle_CreateNewUser(req,res) {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_Title) {
        return res.status(400).json({ msg: "All Field are Required!" })
    }
    const result = await User.create({
        Firstname: body.first_name,
        Lastname: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_Title
    })
    // console.log('result',result);
    return res.status(201).json({ msg: "sucess" ,id:result._id});
}

async function HandlegetuserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User nor found!" })
    return res.json(user)
};

async function Handle_updateUserById(req, res) {
    // TODO: edit user with id
    await User.findByIdAndUpdate(req.params.id, { Lastname: "Changed" })
    return res.json({ status: "Success!" });
}

async function Handle_deleteuserById(req, res) {
    // TODO: edit user with id
    await User.findByIdAndDelete(req.params.id)
    return res.json({ status: `data Delete success!` });
}

module.exports = {
    HandleAllusers,
    Handle_CreateNewUser,
    HandlegetuserById,
    Handle_updateUserById,
    Handle_deleteuserById
}