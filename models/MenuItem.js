
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    taste: {
        type: String,
        enum: ['Sweet', 'Spicy', 'Sour'], // Fixed typo
        required: true,
    },
    is_Drink: {
        type: Boolean,
        default: false,
    },
    ingredients: {
        type: [String],
        default: [],
    },
    num_sales: {
        type: Number,
        default: 0,
    },
});

const ManuItem = mongoose.model('Product', productSchema);
module.exports = ManuItem;


