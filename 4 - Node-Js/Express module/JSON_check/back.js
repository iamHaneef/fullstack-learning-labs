import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const tacos = [
  { id: "0001", name: "Chicken Taco", price: 2.99 },
  { id: "0002", name: "Beef Taco", price: 3.49 },
  { id: "0003", name: "Fish Taco", price: 4.99 }
];

// API endpoint
app.get('/tacos', (req, res) => {
  res.json(tacos);
});

app.listen(3000, () => console.log("Server running"));