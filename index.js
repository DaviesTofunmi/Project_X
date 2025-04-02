const express= require("express");
const app= express();
app.use(express.json());
require("dotenv").config()
const PORT= process.env.PORT
const cors= require("cors")
const mongoose= require('mongoose');
const adminRouter= require('./routes/admin.route')
const userRouter= require('./routes/user.route')
const uri = process.env.MONGODB_URI



const connect = () =>{
    try{
        const connected =  mongoose.connect(uri) 
        if (connected) {
            console.log("connected to database");
         }

    } catch (error) {
        console.log(error);  }
}
connect()



app.use('/admin', adminRouter)
app.use('/user', userRouter)
app.listen(PORT, ()=>{
    console.log("server is running at port" + PORT);

})

