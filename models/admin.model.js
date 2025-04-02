
const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
// const { v4: uuidv4 } = require("uuid");
// const uuid = uuidv4();






const adminSchema= mongoose.Schema({
    fullname:{type:String, required:true},
    company_name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    createdAt:{type:Date, default: Date.now}
})

let saltRound = 10


adminSchema.pre('save', function(next){
    console.log(this.password);
    bcrypt.hash(this.password, saltRound).then((hashpassword)=>{
        this.password= hashpassword
        next()
    }).catch((err)=>{
        console.log(err);
    })
    
})

 
const adminmodel = mongoose.model("admin_collection", adminSchema)
module.exports= adminmodel