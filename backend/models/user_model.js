const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name:String,
    password:String,
    mobile:Number,
    email:String
})
const UserModel = mongoose.model("users",userSchema);
module.exports={UserModel}