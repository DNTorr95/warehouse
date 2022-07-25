const express = require('express')

const app= express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send('Hola inMundos!')
})

app.get('/products', (req, res)=>{
    res.send('productos en construccion!')
})

app.get('/people', (req, res)=>{
    res.send('personas en construccion!')
})

app.listen(PORT, ()=>{
    console.log('Listo!')
})
