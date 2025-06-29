const mongoose = require('mongoose');

async function connectMongoDB(connectionString)
{
    return mongoose.connect(connectionString)
    .then(()=>console.log("Connected successfully to MongoDB"))
    .catch((err)=>console.log("Error in connecting",err));
}

module.exports = {
    connectMongoDB,
};