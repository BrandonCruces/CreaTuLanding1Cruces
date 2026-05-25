const Cart = require("../models/Cart");
const Product = require("../models/Product");
// Crear carrito
const createCart = async (req, res) => {
    try {
        const cart = await Cart.create({ products: [] });

        res.status(201).json({
            message: "Carrito creado",
            cart
        });

    } catch (error) {
        res.status(500).json({ error: "Error al crear carrito" });
    }
};

// Obtener carrito por id
const getCartById = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.cid)
            .populate("products.product");

        if (!cart) {
            return res.status(404).json({ error: "Carrito no encontrado" });
        }

        res.json(cart);

    } catch (error) {
        res.status(500).json({ error: "Error" });
    }
};

// Agregar producto al carrito
const addProductToCart = async (req, res) => {
    try {
        const { cid, pid } = req.params;

        const cart = await Cart.findById(cid);

        if (!cart) {
            return res.status(404).json({ error: "Carrito no encontrado" });
        }

        const productIndex = cart.products.findIndex(
            p => p.product.toString() === pid
        );

        if (productIndex !== -1) {
            cart.products[productIndex].quantity++;
        } else {
            cart.products.push({ product: pid, quantity: 1 });
        }

        await cart.save();

        res.json({
            message: "Producto agregado al carrito",
            cart
        });

    } catch (error) {
        res.status(500).json({ error: "Error" });
    }
};


// Eliminar producto del carrito
const removeProductFromCart = async (req, res) => {
    try {
        const { cid, pid } = req.params;

        const cart = await Cart.findById(cid);

        if (!cart) {
            return res.status(404).json({ error: "Carrito no encontrado" });
        }

        cart.products = cart.products.filter(
            p => p.product.toString() !== pid
        );

        await cart.save();

        res.json({
            message: "Producto eliminado del carrito",
            cart
        });

    } catch (error) {
        res.status(500).json({ error: "Error" });
    }
};

// Actualizar cantidad de producto
const updateProductQuantity = async (req, res) => {
    try {
        const { cid, pid } = req.params;
        const { quantity } = req.body;

        const cart = await Cart.findById(cid);

        if (!cart) {
            return res.status(404).json({ error: "Carrito no encontrado" });
        }

        const product = cart.products.find(
            p => p.product.toString() === pid
        );

        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado en el carrito" });
        }

        product.quantity = quantity;

        await cart.save();

        res.json({
            message: "Cantidad actualizada",
            cart
        });

    } catch (error) {
        res.status(500).json({ error: "Error" });
    }
};

const updateCart = async (req, res) => {

    try {

        const { cid } = req.params;

        const { products } = req.body;

        const cart = await Cart.findById(cid);

        if (!cart) {
            return res.status(404).json({
                error: "Carrito no encontrado"
            });
        }

        cart.products = products;

        await cart.save();

        res.json({
            message: "Carrito actualizado",
            cart
        });

    } catch (error) {

        res.status(500).json({
            error: "Error al actualizar carrito"
        });

    }

};

const clearCart = async (req, res) => {

    try {

        const { cid } = req.params;

        const cart = await Cart.findById(cid);

        if (!cart) {
            return res.status(404).json({
                error: "Carrito no encontrado"
            });
        }

        cart.products = [];

        await cart.save();

        res.json({
            message: "Carrito vaciado",
            cart
        });

    } catch (error) {

        res.status(500).json({
            error: "Error al vaciar carrito"
        });

    }

};

module.exports = {
    createCart,
    getCartById,
    addProductToCart,
    removeProductFromCart,
    updateProductQuantity,
    updateCart,
    clearCart
};