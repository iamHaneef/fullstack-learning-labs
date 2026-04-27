import express from "express"; //import the express

const app = express(); //instance of server

const port = 8000; //port number

//Get request
app.get("/",(req,res)=>{
    res.send("Get Method Worked !!");
})

//html elemets
app.get("/check",(req,res)=>{
    res.send("<h2>The World is Yours</h2>");
})

//POST
app.post("/user",(req,res)=>{
    res.send("Post Works");
})

//PUT
app.put("/user/angela",(req,res)=>{
    res.send("PUT Works");
})

//Delete
app.delete("/user/angela",(req,res)=>{
    res.send("DELETE Works");
})

//server start
app.listen(port , ()=>{
    console.log(`The Server is currently running on Port ${port}`);
})
