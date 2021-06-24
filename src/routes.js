import { Router } from 'express'
import UserController from './app/controllers/UserController'

const routes = new Router()

routes.post('/v1/users', UserController.store)
  /* [] Cria um novo usuário recebendo os dados pelo corpo da requisição: retorna os dados do usuário criado com status correspondente.

    Se nickname já existe, retornar status e mensagem de erro.
 */



routes.get('/v1/users/:name_surname', function (req, res) {
  /* [] Listar todos os usuários cadastrados filtrados pelos campos nome e/ou sobrenome, 
  filtrados por parâmetros de consulta: retorna um array de usuários. */
  
  res.send('respond with a resource');
  
});

routes.get('/v1/users/:nickname', function (req, res, next) {
  /* [] Listar um usuário pelo nickname passado como parâmetro: retorna um único usuário com nome, sobrenome e nickname. */
  res.send('respond with a resource');
});

routes.put('/v1/users/:id', function (req, res, next) {
  /* [] Alterar o sobrenome e o endereço do usuário recebido no corpo da requisição,
   baseado no id recebido como parâmetro de rota: retorna o usuário alterado com as novas informações. */
  res.send('respond with a resource');
});

routes.put('/v1/users/:id', function (req, res, next) {
  /* [] Alterar o nickname de um usuário recebido no corpo da requisição, baseado no id recebido como parâmetro de rota: retorna o usuário alterado com as novas informações.

    Se o nickname passado já existir, deve retornar status e mensagem de erro.
 */
  res.send('respond with a resource');
});

routes.delete('/v1/users/:id', function (req, res, next) {
  /* [] Deletar um usuário baseado no id recebido como parâmetro de rota: retorna o status de sucesso */
  res.send('respond with a resource');
});

module.exports = routes;