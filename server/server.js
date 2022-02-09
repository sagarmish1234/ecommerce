const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

require('dotenv').config();

//default middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

//database connection
const db = process.env.mongoURI;
mongoose.connect(db, { useNewUrlParser: true },() => {
    console.log('connected to mongoDB');
})

//routes
app.use('/api/user', require('./routes/userRoute'));
app.use('/api/inventory', require('./routes/inventoryRoute'));
app.use('/api/order', require('./routes/orderRoute'));



//listen
app.listen(5000, () => {
    console.log('server started on port 5000');
})

