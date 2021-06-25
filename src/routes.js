import { Router } from 'express'
import UserController from './app/controllers/UserController'

const routes = new Router()

routes.post('/v1/users', UserController.store)

routes.get('/v1/users/:name_surname', UserController.userByRef)

routes.get('/v1/users/nickname/:nickname', UserController.userByNickname)

routes.put('/v1/users/:id', UserController.update)

routes.put('/v1/users/nickname/:id', UserController.updateNickname)

routes.delete('/v1/users/:id', UserController.delete)

module.exports = routes;