const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
    const { name, email } = req.body;

    res.json({
        message: "User Registered",
        user: {
            name,
            email,
        },
    });
});

router.post("/login", (req, res) => {
    const { email } = req.body;

    res.json({
        message: "Login Success",
        email,
    });
});

module.exports = router;