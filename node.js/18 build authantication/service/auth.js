const sessionIDUserMAp=new Map();


function setUSer(id,User){
    sessionIDUserMAp.set(id,User)
}

function getUSer(id,User){
    return sessionIDUserMAp.get(id);
}


module.exports={
    setUSer,
    getUSer,
}