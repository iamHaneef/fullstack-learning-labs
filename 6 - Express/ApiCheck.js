import express from "express";
import cors from "cors";
let port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

//post : id
app.post("/post", (req, res) => {
    const { id , fullname, email } = req.body;
    let value = true;

    try {
        if (value) {
            console.log("Name Showed in console ", id);
            res.status(201).json({
                success: true,
                message: "You know POST"
            })
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "You didn't know POST"
        })
    }
})

//get
app.get("/post", (req, res) => {
    
    let value = true;
    try {
        if (value) {
            res.status(201).json({
                success: true,
                message: "You know GET"
            })
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "You didn't know GET"
        })
    }
})

//get : id
app.get("/post/:id", (req, res) => {
    
    let value = true;
    const id = req.params.id;
    try {
        if (value) {
            res.status(201).json({
                success: true,
                message: "You know GET"
            })
            console.log(id);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "You didn't know GET"
        })
    }
})


//PUT : id
app.put("/post/:id", (req, res) => {
    
    let value = true;
    const id = req.params.id;
    try {
        if (value) {
            res.status(201).json({
                success: true,
                message: "You know PUT"
            })
            console.log(id);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "You didn't know GET"
        })
    }
})

app.listen(port, () => {
    console.log("Server is running on port ", port);
})