const Cart = require("../models/Cart");

const express = require("express");

const router = express.Router();

const {
    createCart,
    getCartById,
    addProductToCart,
    removeProductFromCart,
    updateProductQuantity,
    updateCart,
    clearCart
    
} = require("../controllers/carts.controller");

router.get("/view/:cid", async (req, res) => {
    const cart = await Cart.findById(req.params.cid)
        .populate("products.product");

    if (!cart) {
        return res.send("Carrito no encontrado");
    }

    res.render("cart", { cart });
});
// POST crear carrito
router.post("/", createCart);

// GET carrito por id
router.get("/:cid", getCartById);

// POST agregar producto al carrito
router.post("/:cid/products/:pid", addProductToCart);

// DELETE producto del carrito
router.delete("/:cid/products/:pid", removeProductFromCart);

// PUT actualizar cantidad
router.put("/:cid/products/:pid", updateProductQuantity);
// PUT actualizar carrito completo
router.put("/:cid", updateCart);

// DELETE vaciar carrito
router.delete("/:cid", clearCart);

module.exports = router;