const express = require("express");
const router = express.Router();

const Product = require("../models/product");

router.get("/", async(req, res) => {
    const products = await Product.find();

    res.json(products);
});

router.post("/", async(req, res) => {
    const product = new Product(req.body);

    const savedProduct = await product.save();

    res.json(savedProduct);
});

router.put("/:id", async(req, res) => {
    const updatedProduct =
        await Product.findByIdAndUpdate(
            req.params.id,
            req.body, { new: true }
        );

    res.json(updatedProduct);
});

router.delete("/:id", async(req, res) => {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
        message: "Product Deleted",
    });
});

module.exports = router;