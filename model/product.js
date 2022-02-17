const mongoose = require('mongoose');

// designing the schema
const productSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    quantity: {
        type: Number,
    }
});

// creating scheama to model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;