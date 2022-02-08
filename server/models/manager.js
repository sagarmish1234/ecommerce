const mongoose = require('mongoose');

const ManagerSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
})

module.exports = mongoose.model('Manager', ManagerSchema);