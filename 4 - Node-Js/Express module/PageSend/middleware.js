import express from "express";
import morgan from "morgan";

const app = express();
const port = 8000;

//morgon middleware
app.use(morgan("tiny"));
app.use(morgan('combined'))

//Own middleware DIY

app.use((req,res,next)=>{
    console.log(req.method);
    console.log(req.url);
    next();
})

app.get("/home" , (req,res)=>{
    res.send("hello");
})

app.listen(port , ()=>{
    console.log(`server run on port ${port}`)
})