const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')
const porta = process.env.PORT || 8080

const app = express()
app.use(express.json())

requireDir('./database')
requireDir('./models')

app.use('/api',require('./routes'))

try{
    app.listen(porta)
}catch(err){
    console.log(err)
}