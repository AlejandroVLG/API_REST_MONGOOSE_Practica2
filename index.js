'use strict'

const mongoose = require('mongoose')

const app = require('./app')
const config = require('./config')
require('dotenv').config({ path: 'ENV_FILENAME' })

mongoose.connect(process.env.DATABASE, (error, res) => {
    if (error) {
        return console.log(`Error al conectar a la base de datos: ${error}`)
    } else {
        console.log('Conexion a la base de datos establecida')
    }

    app.listen(config.port, () => {
        console.log(`API REST corriendo en http://localhost:${config.port}`)
    })
})


