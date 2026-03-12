const CustomErrorhandler = require("../error/custom-error.handle")
const categoryValidator = require("../validator/category.validate")

module.exports= function(req, res, next){
    const {error} =categoryValidator(req.body)

    if(error){
        throw CustomErrorhandler.BadRequest(error.message)
    }

    next()
}