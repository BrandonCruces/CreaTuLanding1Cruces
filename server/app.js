const connectDB = require("./config/database");

const express = require("express");

const app = express();

const PORT = 8080;

// Routers
const productsRouter = require("./routes/products.router");
const cartsRouter = require("./routes/carts.router");

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

// Conectar a la base de datos
connectDB();

// Ruta principal
app.get("/", (req, res) => {
    res.send("Backend funcionando");
});


// Servidor
app.listen(PORT, () => {
    console.log(`Servidor activo en puerto ${PORT}`);
});