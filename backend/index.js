const express = require("express");
const {connection}=require("./configs/db")
const {user}=require("./routes/user_route")
const cors = require("cors")
const app = express();

app.use(express.json())
app.use(cors({
    origin:"*"
}))


app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/users",user)


app.listen((4500),async()=>{
    try {
        await connection;
        console.log(`DB is connected`);
    } catch (error) {
        console.log(error);
    }
    console.log(`server is running`);
})