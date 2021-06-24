import { Router } from 'express'
import UserController from './app/controllers/UserController'

const routes = new Router()

routes.post('/v1/users', UserController.store)
  /* [] Cria um novo usuário recebendo os dados pelo corpo da requisição: retorna os dados do usuário criado com status correspondente.

    Se nickname já existe, retornar status e mensagem de erro.
 */

routes.get('/v1/users/:name_surname', UserController.UserByRef)

routes.get('/v1/users/nickname/:nickname', UserController.UserByNickname)

routes.put('/v1/users/:id', UserController.update)


routes.put('/v1/users/nickname/:id', UserController.updateNickname)


routes.delete('/v1/users/:id', UserController.delete)

module.exports = routes;