const joi = require("joi")

const authValidator = (data) =>{
    const schema = joi.object({
        username: joi.string().min(3).max(50).pattern(new RegExp(/^[a-zA-Z\s]+$/)).required(),
        email: joi.string().email().required(),
        password: joi.string().required(),
        role: joi.string().required(),
        otp: joi.string().min(4).max(6),
        otpTime: joi.number(),
        refreshToken: joi.string().required()
    })

    return schema.validate(data)
}

module.exports = authValidator