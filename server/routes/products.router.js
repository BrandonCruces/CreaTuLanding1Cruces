const express = require("express");

const router = express.Router();

const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/products.controller");

router.get("/view/all", async (req, res) => {
    const Product = require("../models/Product");

    const products = await Product.find();

    res.render("products", { products });
});

router.get("/", getProducts);

router.get("/:pid", getProductById);

router.post("/", createProduct);

router.put("/:pid", updateProduct);

router.delete("/:pid", deleteProduct);

module.exports = router;