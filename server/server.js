const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dns').setDefaultResultOrder('ipv4first');
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/ProductRoutes");
app.use("/api/products", productRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("ShopSphere API Running");
});

const Product = require("./models/product");

app.get("/add", async(req, res) => {
    const product = new Product({
        name: "Laptop",
        price: 50000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        description: "Gaming Laptop",
        category: "Electronics",
    });

    await product.save();

    res.send("Product Added");
});


// 🔥 DATABASE PRODUCTS FETCH
app.get("/api/products", async(req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});