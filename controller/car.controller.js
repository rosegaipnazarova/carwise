const CustomErrorhandler = require("../error/custom-error.handle")
const CarSchema = require("../schema/car.schema")


const getAllCars = async (req, res, next) => {
    try {
        const cars = await CarSchema.find()

        res.status(200).json(cars)
    } catch (error) {
        next(error)
    }
}

const search = async (req, res, next) => {
    try {
        const { searchingValue } = req.query
        const result = await CarSchema.find({
           // bu yerga ozgartrish kiritamz yangi dars boyicha
        })

        res.status(200).json(cars)
    } catch (error) {
        next(error)
    }
}


const getOneCar = async (req, res, next) => {
    try {

        const { id } = req.params

        const foundedCar = await CarSchema.findById(id)
        if (!foundedCar) {
           throw CustomErrorhandler.NotFound("Car not found")
            }
        

        res.status(200).json(foundedCar)


    } catch (error) {
        next(error)
    }
}


const addCar = async (req, res, next) => {
    try {

        const { brand, model, tanirovka, motor, year, color, distance, gearbook, description, price, imageUrl } = req.body

        await CarSchema.create({ brand, model, tanirovka, motor, year, color, distance, gearbook, description, price, imageUrl })

        res.status(201).json({
            message: "Added new car"
        })

    } catch (error) {
        next(error)
    }
}


const updateCar = async (req, res, next) => {
    try {

        const { brand, model, tanirovka, motor, year, color, distance, gearbook, description, price, imageUrl } = req.body
        const { id } = req.params

        const foundedCar = await CarSchema.findById(id)
        if (!foundedCar) {
             throw CustomErrorhandler.NotFound("Car not found")

        }
        await CarSchema.findByIdAndUpdate(id, { brand, model, tanirovka, motor, year, color, distance, gearbook, description, price, imageUrl })

        res.status(200).json({
            message: "Updated car"
        })

    } catch (error) {
        next(error)
    }
}


const deleteCar = async (req, res, next) => {
    try {

        const { id } = req.params

        const foundedCar = await CarSchema.findById(id)
        if (!foundedCar) {
            throw CustomErrorhandler.NotFound("Car not found")

        }
        await CarSchema.findByIdAndDelete(id)

        res.status(200).json({
            message: "Deleted car"
        })

    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllCars,
    getOneCar,
    addCar,
    updateCar,
    deleteCar,
    search
}