const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const helmet = require("helmet")
const morgan = require("morgan")
require("dotenv").config()


//Default middlewares
app.options('*', cors());
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan("common"))

//database connect
mongoose.connect(process.env.mongo_URL,()=>{
    console.log("The database has been connect successfully")
})

//routes
app.use("/api/customer",require("./Routes/Customer Route/index"))



const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log("The server has started on port 8080")
})