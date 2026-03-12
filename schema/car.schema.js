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
    categoryID:{
        type: Schema.Types.ObjectId,
        ref:"category",
        required: true
    },
    tanirovka : {
        type : Boolean,
        default: false,
        required: true
    },
    motor : {
        type : Number,
        min:[0.5 , "hajm juda kichik" ],
        max:[10 , "hajm juda katta"],
        required: true
    },
    year : {
        type : Number,
        required: true,

    },
    color : {
        type : String,
        required: true,
        trim: true

    },
    distance : {
        type : Number,
        required: true,
    },
    gearbox : {
        type : Boolean,
        default: false,
        required: true
    },
    description : {
        type : String,
        minLength:5,
        maxLength:200,
        required: true
    },
    price : {
        type : Number,
        required: true
    },
    outImageUrl : {
        type : String,
        required: true
    },
    inImageUrl : {
        type : String,
        required: true
    }
},{
    versionKey: false,
    timestamps: true
})


const CarSchema = model("car", Car)
module.exports = CarSchema