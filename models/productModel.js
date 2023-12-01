const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;