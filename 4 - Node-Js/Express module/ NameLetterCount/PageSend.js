import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import  {fileURLToPath}  from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));



app.post("/submit" , (req,res)=>{
    let {firstnametext ,  lastnametext} = req.body;
    let  count = firstnametext.length + lastnametext.length;
    res.send(`<h1> The count is ${count} </h1>`);
})

app.get("/" , (req,res)=>{
    res.sendFile(__dirname + "/index.html");
}
)

app.listen(port , ()=>{
    console.log("The server is running on port "+ port);
})