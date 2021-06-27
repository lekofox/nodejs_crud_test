import { Router } from 'express'
import UserController from './app/controllers/UserController'

const routes = new Router()

routes.get('/', (req, res) => res.status(200).json({ message: 'Please select a correct URI to use; you can see more in our documentation (https://github.com/lekofox/nodejs_crud_test)' }))

routes.post('/v1/users', UserController.store)

routes.get('/v1/users/:nameSurname', UserController.userByNameSurname)

routes.get('/v1/users/nickname/:nickname', UserController.userByNickname)

routes.put('/v1/users/:id', UserController.update)

routes.put('/v1/users/nickname/:id', UserController.updateNickname)

routes.delete('/v1/users/:id', UserController.delete)

module.exports = routes
