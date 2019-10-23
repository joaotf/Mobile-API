const express = require('express')

const UserController = require('./controllers/UserController.js')

routes = express.Router()

//Funções
routes.get('/all',UserController.find_ALL)
routes.get('/one/:id',UserController.find_ONE)
routes.post('/register',UserController.create_USER)
routes.put('/update/:id',UserController.update_USER)
routes.delete('/remove/:id',UserController.destroy_USER)

module.exports = routes