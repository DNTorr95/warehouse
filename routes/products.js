const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.send('proximamente: retornara todos los productos!')
})

route.get('/:id/', (req, res) => {
    var{ id } = req.params
    res.send('proximamente: retornara el producto con id: ' + id + ' !')
})

route.post('/',(req, res)=>{
    res.send('proximamente: guardara un producto!')
})
route.put('/:id',(req, res)=>{
    var{id}= req.params
    res.send('proximamente: editara un producto! ' + id)
})
route.delete('/:id',(req, res)=>{
    var {id}= req.params
    res.send('proximamente: eliminara un producto con id : ' + id)
})
module.exports = route 
