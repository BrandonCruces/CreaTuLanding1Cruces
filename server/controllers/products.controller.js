const Product = require("../models/Product");

// GET todos
const getProducts = async (req, res) => {
    try {

        let { limit = 10, page = 1, query, sort } = req.query;

        const filter = query ? { category: query } : {};

        const sortOption =
            sort === "asc" ? { price: 1 } :
            sort === "desc" ? { price: -1 } :
            {};

        const products = await Product.find(filter)
            .limit(limit)
            .skip((page - 1) * limit)
            .sort(sortOption);

        const total = await Product.countDocuments(filter);

        const totalPages = Math.ceil(total / limit);

        res.json({
            status: "success",
            payload: products,
            totalPages,
            page: Number(page),
            hasPrevPage: page > 1,
            hasNextPage: page < totalPages
        });

    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" });
    }
};
// GET por id
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.pid);

        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json(product);

    } catch (error) {
        res.status(500).json({ error: "Error" });
    }
};

// POST
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);

        res.status(201).json({
            message: "Producto creado",
            product
        });

    } catch (error) {
        res.status(500).json({ error: "Error al crear producto" });
    }
};

// PUT
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.pid,
            req.body,
            { new: true }
        );

        res.json({
            message: "Producto actualizado",
            product
        });

    } catch (error) {
        res.status(500).json({ error: "Error" });
    }
};

// DELETE
const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.pid);

        res.json({ message: "Producto eliminado" });

    } catch (error) {
        res.status(500).json({ error: "Error" });
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};