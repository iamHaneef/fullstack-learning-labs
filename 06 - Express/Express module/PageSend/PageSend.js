import express from "express";

//fundamental package for file handle
import {dirname} from "path";
import {fileURLToPath} from "url";

//bodyparser 
import bodyParser from "body-parser";

//express server

const app = express();
const port = 8000;

const __dirname =  dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended : true}));

app.get("/" , (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/marugo" , (req,res)=>
{
    console.log(req.body);
});

app.listen(port , ()=>{
    console.log(`server start run on port ${port}`);
})
