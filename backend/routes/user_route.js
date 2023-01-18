const { Router } = require("express");
const jwt = require("jsonwebtoken")
const user = Router()
const { UserModel } = require("../models/user_model")

user.post("/register", async (req, res) => {
    try {
        let data = req.body;
        let new_data = UserModel(data);
        await new_data.save()
        res.send("User Registered")
    } catch (error) {
        console.log(error);
    }
})
 
user.post("/login", async (req, res) => {
    try {
        let payload= req.body;
        let data = await UserModel.find(payload)
        console.log(data);
        if (data.length > 0) {
            res.send("You are logged Successfully")
        } else {
            res.send("Check your data")
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports={user} 