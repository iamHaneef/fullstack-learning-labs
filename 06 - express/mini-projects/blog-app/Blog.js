import express from "express";
import cors from "cors";

const app = express();
let port = 3000;

app.use(express.json());
app.use(cors());

//create a posts for blogs
let blogs = [];

app.post("/posts", (req, res) => {

    const { id, fullname, email } = req.body;
    if (fullname === undefined || id === undefined || email === undefined) {
        console.log("Invalid Field Details");
        return res.status(400).json("Fields are missing");
    }

    let pureNumber = Number(id);
    const newuser = { id: pureNumber, fullname, email };

    //check the duplicate user entry
    let exists = blogs.find(p => p.id === pureNumber);  // perform type corsion here
    if (exists) {
        return res.status(400).json({
            success: false,
            message: "User Already Exists"
        })
    }

    blogs.push(newuser);
    console.log("Data added in blogs", blogs);

    res.status(201).json({
        success: true,
        data: newuser
    });

})

//get a all blogs
app.get("/posts", (req, res) => {
    console.log("Blogs:", blogs);
    res.status(200).json({
        success: true,
        data: blogs
    });
})

//get user by id
app.get("/posts/:id", (req, res) => {

    const id = Number(req.params.id);
    const item = blogs.find(p => p.id === id);

    if (!item) {
        return res.status(404).json({
            success: false,
            message: "Data Not exists"
        })
    }
    console.log("Blogs:", blogs);
    res.status(200).json({
        success: true,
        data: item
    });

})

//put - update blogs by id

app.put("/posts/:id", (req, res) => {

    const id = Number(req.params.id);
    let index = blogs.findIndex(p => p.id === id); // get the client id

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Not Data Found"
        })
    }

    //before update 
    if (req.body.fullname === undefined && req.body.email === undefined) {
        return res.status(400).json({
            success: false,
            message: "No inputs are provided"
        });
    }

    //update 
    if (req.body.fullname !== undefined) {
        blogs[index].fullname = req.body.fullname;
    }
    if (req.body.email !== undefined) {
        blogs[index].email = req.body.email;
    }
    return res.status(200).json(blogs);
})

//delete a blogs by id:
app.delete("/posts/:id", (req, res) => {
    const id = Number(req.params.id);

    let initaillength = blogs.length;
    blogs = blogs.filter(p => p.id !== id);

    let currentlength = blogs.length;

    if (initaillength === currentlength) {
        return res.status(404).json({
            success: false,
            message: "User Not Found"
        });
    }
    console.log(blogs);
    return res.status(200).json(blogs);
});


app.listen(port, () => {
    console.log("Server is running on localhost " + port);
})