import express from "express";

//fundamental package for file handle
import {dirname} from "path";
import {fileURLToPath} from "url";

//bodyparser 
import bodyParser from "body-parser";

//express server

const app = express();
const port = 8001;

const __dirname =  dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended : true}));

app.get("/" , (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/submit" , (req,res)=>{
    let pass = req.body.Password;
    if (pass === "Aile")
    {
        res.sendFile(__dirname + "/secret.html");
    }
    else{
        console.log("Incorrect Password");
    }
})

app.listen(port , ()=>{
    console.log(`server start run on port ${port}`);
})
