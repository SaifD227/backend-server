require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes"); 

connectDB();

const app = express();


app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000", "https://your-frontend.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true 
  }));
  
app.use(bodyParser.json());


app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on: http://localhost:${PORT}`));
