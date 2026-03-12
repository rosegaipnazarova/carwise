const joi = require("joi")

const carValidator = (data) =>{
    const schema = joi.object({
        brand: joi.string().min(2).max(30).required(),
        model: joi.string().min(2).max(50).required(),
        categoryId: joi.string().required(),
        tanirovka: joi.boolean().required(),
        motor: joi.number().min(0.5).max(10).required(),
        year: joi.number().required(),
        color: joi.string().required(),
        distance: joi.number().required(),
        gearbox: joi.boolean().required(),
        description: joi.string().required(),
        price: joi.number().required(),
        outImageUrl: joi.string().required(),
        inImageUrl: joi.string().required(),

    })

    return schema.validate(data)
}

module.exports = carValidator