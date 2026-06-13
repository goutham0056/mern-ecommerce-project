const Product = require("../models/product");

const getProducts = async(req, res) => {
    try {
        const products = [{
                name: "Laptop",
                price: 50000,
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
                description: "Gaming Laptop",
                category: "Electronics",
            },

            {
                name: "Smart Phone",
                price: 25000,
                image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
                description: "Android Mobile",
                category: "Mobiles",
            },

            {
                name: "Headphones",
                price: 3000,
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
                description: "Wireless Headphones",
                category: "Accessories",
            },
        ];

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getProducts };