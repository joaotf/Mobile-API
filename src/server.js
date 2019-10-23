const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

const app = express()
app.use(express.json())

requireDir('./database')
requireDir('./models')


app.use('/api',require('./routes'))

app.listen(8080)
