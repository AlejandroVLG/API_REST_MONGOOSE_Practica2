'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const productCtrl = require('./controllers/product')

const app = express()
const port = process.env.PORT || 3000


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/products', productCtrl.getProducts)

app.get('/api/product/:productId', productCtrl.getProduct)

app.post('/api/product', productCtrl.createProduct)

app.put('/api/product/:productId', productCtrl.updateProducts)

app.delete('/api/product/:productId', productCtrl.deleteProduct)


mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos:${err} `)
    }
    console.log('Conexion a la base de datos establecida')
    app.listen(port, () => {
        console.log(`API REST corriendo en http://localhost:${port}`)
    })
})
