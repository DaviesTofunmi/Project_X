
const mongoose = require('mongoose')







const userSchema= mongoose.Schema({
    fullname:{type:String, required:true},
    email:{type:String, required:true},
    createdAt:{type:Date, default: Date.now}
})



userSchema.pre('save', function(next){
    console.log(this.email);
    next()
});

 
const usermodel
 = mongoose.model("users_collection", userSchema)
module.exports= usermodel
