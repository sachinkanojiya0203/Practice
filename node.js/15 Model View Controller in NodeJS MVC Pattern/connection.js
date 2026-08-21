const mongoose=require('mongoose')


async function connectionmongoDB(url) {   
    // Connection
    return mongoose.connect(url)

}

module.exports={
    connectionmongoDB,
}