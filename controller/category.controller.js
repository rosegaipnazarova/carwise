const CustomErrorhandler = require("../error/custom-error.handle")
const CategorySchema = require("../schema/category.schema")


const getAllCategories = async (req, res, next) => {
    try {
        const list = await CategorySchema.find()

        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}

const search = async (req, res, next) => {
    try {
        const { searchingValue } = req.query
        const result = await CategorySchema.find({
           // bu yerga ozgartrish kiritamz yangi dars boyicha
        })

        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}


const getOneCategory = async (req, res, next) => {
    try {

        const { id } = req.params

        const foundedCategory = await CategorySchema.findById(id)
        if (!foundedCategory) {
           throw CustomErrorhandler.NotFound("Category not found")
            }
        

        res.status(200).json(foundedCategory)


    } catch (error) {
        next(error)
    }
}


const addCategory = async (req, res, next) => {
    try {

        const { name, logo } = req.body

        await CategorySchema.create({name, logo })

        res.status(201).json({
            message: "Added new category"
        })

    } catch (error) {
        next(error)
    }
}


const updateCategory = async (req, res, next) => {
    try {

        const { name, logo } = req.body
        const { id } = req.params

        const foundedCategory = await CategorySchema.findById(id)
        if (!foundedCategory) {
             throw CustomErrorhandler.NotFound("Category not found")

        }
        await CategorySchema.findByIdAndUpdate(id, { name, logo})

        res.status(200).json({
            message: "Updated category"
        })

    } catch (error) {
        next(error)
    }
}


const deleteCategory = async (req, res, next) => {
    try {

        const { id } = req.params

        const foundedCategory = await CategorySchema.findById(id)
        if (!foundedCategory) {
            throw CustomErrorhandler.NotFound("Category not found")

        }
        await CategorySchema.findByIdAndDelete(id)

        res.status(200).json({
            message: "Deleted category"
        })

    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllCategories,
    getOneCategory,
    addCategory,
    updateCategory,
    deleteCategory,
    search
}