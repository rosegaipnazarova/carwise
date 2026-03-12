const { Router } = require("express")
const carValidatorMiddleware = require("../middleware/car.validator.middleware")
const authorization = require("../middleware/authorization")
const { getAllCars, getOneCar, addCar, updateCar, deleteCar, search } = require("../controller/car.controller")

const carRouter = Router()

carRouter.get("/get_all_cars", getAllCars)
carRouter.get("/get_one_car/:id", getOneCar)
carRouter.get("/search", search)
carRouter.post("/add_car",carValidatorMiddleware, authorization,addCar)   //adminmi
carRouter.put("/update_car/:id", authorization, updateCar)                //adminmi   shuni tekshirish shartini yozishim kk
carRouter.delete("/delete_car/:id", authorization, deleteCar)             //adminmi


module.exports = carRouter