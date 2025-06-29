const express = require('express');
const userRouter = require('./Routes/user');
const {connectMongoDB} = require("./connection");
const {logTheDetails} = require("./Middlewares");

const app = express();
const PORT = 8000;
//Listening the server at a specific port
app.listen(PORT, () => console.log(`Server is listening at port: ${PORT}`));

//Setting up Mongo DB
//Conneting to MongoDB
connectMongoDB("mongodb://127.0.0.1:27017/nodejs-practice");


//Middlewares
app.use(express.urlencoded({extended:false}));
app.use((request,response,next)=>{
    logTheDetails(request,"logs.txt");
    next();
});


//Routes
app.use('/api/users',userRouter);
