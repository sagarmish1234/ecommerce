const mongoose  = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    image: String,
    price: Number,
    stock: Number,
    description: String
},{
    timestamps: true
})

module.exports = mongoose.model('Book', BookSchema);