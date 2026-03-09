const CustomErrorhandler = require("../error/custom-error.handle")
const carValidator = require("../validator/car.validate")

module.exports= function(req, res, next){
    const {error} =carValidator(req.body)

    if(error){
        throw CustomErrorhandler.BadRequest(error.message)
    }

    next()
}