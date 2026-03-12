const express = require("express")
const cors = require("cors")
const connectDb = require("./config/db.config")
const authRouter = require("./router/auth.routes")
const carRouter = require("./router/car.routes")
const categoryRouter = require("./router/category.routes")
const errorMiddleware = require("./middleware/error.middleware")
require("dotenv").config()
const cookieParser= require("cookie-parser")
const profileRouter = require("./router/profile.routes")

const PORT = process.env.PORT || 3000
const app = express()

connectDb()

app.use(express.json())
app.use(cors())
app.use(cookieParser())


// router

app.use(authRouter)
app.use(carRouter)
app.use(categoryRouter)
app.use(profileRouter)

app.use(errorMiddleware)

app.listen(PORT, ()=>{
    console.log("server is rinning at :  " + PORT);
})