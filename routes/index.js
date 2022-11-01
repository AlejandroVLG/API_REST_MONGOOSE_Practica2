'use strict'

const express = require('express')
const api = express.Router()
const productCtrl = require('../controllers/product')
const auth = require('../middlewares/auth')
const userCtrl = require('../controllers/user')

api.get('/products', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', productCtrl.createProduct)
api.put('/product/:productId', productCtrl.updateProducts)
api.delete('/product/:productId', productCtrl.deleteProduct)

api.get('/private', auth, function (req, res) {
    res.status(200).send({ message: 'Tienes acceso' })
})

api.get('/showUsers', userCtrl.getUsers)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)



module.exports = api 