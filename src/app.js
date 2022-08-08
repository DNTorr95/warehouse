const express = require('express')
const index = require('./routes/index')
const products = require('./routes/products')

const app = express()

const PORT = process.env.PORT || 3000

//app.use(express.json())

var json= express.json()
app.use(json)

app.use('/', index)
app.use('/products', products)

app.listen(PORT, () => {
    console.log('Listo!')
})