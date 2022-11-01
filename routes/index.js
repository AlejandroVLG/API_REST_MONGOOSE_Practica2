'use strict'

const express = require('express')
const api = express.Router()
const productCtrl = require('../controllers/product')
const auth = require('../middlewares/auth')

api.get('/products', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.createProduct)
api.put('/product/:productId', productCtrl.updateProducts)
api.delete('/product/:productId', productCtrl.deleteProduct)

api.get('/private', auth.isAuth, function (req, res) {
    res.status(200).send({ message: 'Tienes acceso' })
})

api.get('/users', userCtrl)
api.get('/user/:userId', userCtrl)
api.post('/user', userCtrl)
api.put('/user/:userId', userCtrl)
api.delete('/user/:userId', userCtrl)


module.exports = api 