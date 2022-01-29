const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const helmet = require("helmet")
const morgan = require("morgan")
const cloudinary = require("cloudinary").v2
require("dotenv").config()


//Default middlewares
app.use(cors());
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan("common"))
cloudinary.config({
    cloud_name:"sagarmish1234",
    api_key:"515232586982562",
    api_secret:"qKgVAO5cBR7wRYaZshv3YOFc6JA"
})
//Database connect
mongoose.connect(process.env.mongo_URL,()=>{
    console.log("The database has been connect successfully")
})

//Routes
app.use("/api/customer",require("./Routes/Customer Route/index"))
app.use("/api/manager",require("./Routes/Manager Route/index"))
app.use("/api/user",require("./Routes/UserAuth/auth"))
app.use("/api/inventory",require("./Routes/Invetory Route/index"))


const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log("The server has started on port 8080")
})