const express = require('express')

const {getAllProducts,
    getOneProduct,
    saveProduct,
    updateProduct,
    deleteProduct} = 
    require('../controllers/prductController')


const rute = express.Router()

// retorna todos los productos
rute.get('/', getAllProducts)
//retorna un producto
rute.get('/:id/', getOneProduct)
//guardar nuevo producto
rute.post('/',saveProduct)
//editar productos
rute.put('/:id', updateProduct)
//eliminar productos
rute.delete('/:id', deleteProduct)

module.exports = rute

/*module.exports = express.Router()
.get('/',getAllProducts) 
.get('/:id',getOneProduct) 
.post('/',saveProduct) 
.put('/:id',updateProduct) 
.delete('/:id',deleteProduct) */