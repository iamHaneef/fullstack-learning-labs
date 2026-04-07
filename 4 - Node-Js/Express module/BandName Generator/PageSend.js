import express from "express";

//fundamental package for file handle
import { dirname } from "path";
import { fileURLToPath } from "url";

//bodyparser 
import bodyParser from "body-parser";

//express server

const app = express();
const port = 8000;

var ans = "";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/submit", (req, res) => {
    ans = req.body.StreetNametext + req.body.PetNametext + "✌️";
    res.send(`<h1>Your band name is : </h1><h2>${ans}</h2>`);
});
app.listen(port, () => {
    console.log(`server start run on port ${port}`);
})
