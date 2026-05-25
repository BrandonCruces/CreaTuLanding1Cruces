const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");

        console.log("✅ MongoDB conectado correctamente");
    } catch (error) {
        console.error("❌ Error conectando MongoDB:", error);
        process.exit(1);
    }
};

module.exports = connectDB;