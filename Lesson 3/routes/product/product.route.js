const productRouter = require('express').Router()

const {isProductExist} =require('../../middleware')

const{productController} = require('../../controllers')

productRouter.get('/',productController.getProducts)
productRouter.post('/',productController.createProduct)
productRouter.get('/:id',productController.getProduct)
productRouter.delete('/:id', productController.deleteProduct)
productRouter.put('/:id',productController.updateProduct)

module.exports = productRouter;