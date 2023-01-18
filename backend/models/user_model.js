const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:String,
    password:String,
    mobile:Number,
    age:Number
})
const UserModel = new mongoose.model("users",userSchema);
module.exports={UserModel}