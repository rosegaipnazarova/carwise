const { boolean } = require("joi")
const {Schema, model} = require("mongoose")

const Car = new Schema({
    brand : {
        type : String,
        minLength:2,
        maxLength:30,
        required: true,
    },
    model : {
        type : String,
        minLength:2,
        maxLength:50,
        required: true,
    },
    tanirovka : {
        type : Boolean,
        default: false,
        required: true
    },
    motor : {
        type : Number,
        min:[0.5, "hajm juda kichik" ],
        max:[10.0, "hajm juda katta"],
        required: true
    },
    year : {
        type : Number,
        required: true,
        trim: true

    },
    color : {
        type : String,
        required: true,
        trim: true

    },
    distance : {
        type : Number,
        required: true,
        trim: true
    },
    gearbox : {
        type : Boolean,
        default: false,
        required: true
    },
    decription : {
        type : String,
        minLength:5,
        maxLength:200,
        required: true
    },
    price : {
        type : Number,
        required: true
    },
    imageUrl : {
        type : String,
        required: true
    }
},{
    versionKey: false,
    timestamps: true
})


const CarSchema = model("car", Car)
module.exports = CarSchema