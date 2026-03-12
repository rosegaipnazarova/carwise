const { Router } = require("express")
const categoryValidatorMiddleware = require("../middleware/category.validator.middleware")
const authorization = require("../middleware/authorization")
const { getAllCategories, getOneCategory, search, addCategory, updateCategory, deleteCategory } = require("../controller/category.controller")

const categoryRouter = Router()

categoryRouter.get("/get_all_categories", getAllCategories)
categoryRouter.get("/get_one_category/:id", getOneCategory)
categoryRouter.get("/search", search)
categoryRouter.post("/add_category",categoryValidatorMiddleware, authorization,addCategory)   //adminmi
categoryRouter.put("/update_category/:id", authorization, updateCategory)                //adminmi   shuni tekshirish shartini yozishim kk
categoryRouter.delete("/delete_category/:id", authorization, deleteCategory)             //adminmi


module.exports = categoryRouter