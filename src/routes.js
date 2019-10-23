const express = require('express')

const ClientController = require('./controllers/ClientController.js')

routes = express.Router()

//Funções
routes.get('/all',ClientController.find_ALL)
routes.get('/one/:id',ClientController.find_ONE)
routes.post('/register',ClientController.create)
routes.put('/update/:id',ClientController.update)
routes.delete('/remove/:id',ClientController.destroy)

module.exports = routes;