const { Router } = require("express");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const user = Router()
require("dotenv").config()
const { UserModel } = require("../models/user_model")

user.post("/register", async (req, res) => {
    try {
        let { name, password, mobile, email } = req.body;
        bcrypt.hash(password, 6, async (err, hash) => {
            let new_data = UserModel({ name, password:hash, mobile, email });
            await new_data.save()
            res.send("Registration Successfull")
        });
    } catch (err) {
        console.log(err);
    }
})

user.post("/login", async (req, res) => {
    try {
        let { name, password } = req.body;
        let new_data = await UserModel.find({ name });
        let hashed_pass = new_data[0].password;
        if (new_data.length > 0) {
            bcrypt.compare(password, hashed_pass, async (err, result) => {
                if (result) {
                    const token = jwt.sign({ course: "backend" }, process.env.secret);
                    res.send({ "message": "Logged Successfullyy", "token": token })
                } else {
                    res.send("Wrong Information1")
                }
            });
        } else {
            res.send("Wrong Information2")
        }

    } catch (error) {
        console.log(error);
    }
})
module.exports = { user } 