require("dotenv").config();

const produtcs = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Products");

connectDB();
//veri tabanına data/products.js içindeki verileri ekleme işlemi
const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(produtcs);
    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.error("error with data import");
    process.exit(1);
  }
};

importData();
