const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
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

app.get("/api/products", (req, res) => {
    res.json([{
            id: 1,
            name: "Laptop",
            price: 55000,
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
        },
        {
            id: 2,
            name: "Headphones",
            price: 2500,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        },
        {
            id: 3,
            name: "Smart Watch",
            price: 4000,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        },
    ]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});