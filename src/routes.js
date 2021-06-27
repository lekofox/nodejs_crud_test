import { Router } from 'express'
import UserController from './app/controllers/UserController'
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const routes = new Router()

// Extended: https://swagger.io/specification/#infoObject
const options = {
  swaggerDefinition: {

    info: {
      title: 'RESTful API for Hive Labs case',
      description: 'CRUD simulating a profile-like data created with Node.js and MySQL ',
      contact: {
        name: 'Leandro Dias',
        email: 'leandro_dias9@hotmail.com'
      },
      servers: ['http://localhost:3333/', 'http://rest-api-hive-labs.herokuapp.com']

    }
  },
  apis: ['./src/routes.js']
}

const swaggerDocs = swaggerJSDoc(options)

routes.get('/', (req, res) => res.status(200).json({ message: 'Please select a correct URI to use; you can see more in our documentation (http://rest-api-hive-labs.herokuapp.com/docs-api)' }))
routes.use('/docs-api', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
routes.post('/v1/users', UserController.store)

/**
*  @swagger
* /v1/users:
*  post:
*    description: Create an user into our database
*    consumes:
*    - application/json
*    produces:
*    - application/json
*    parameters:
*    - in: body
*      name: users
*      schema:
*        $ref: '#/definitions/users'
*    responses:
*        200:
*            description: User created sucessfully
*        400:
*            description: Validation error
*        500:
*            description: Unespected error, please try again.
* definitions:
*    users:
*        type: object
*        required:
*        - name
*        - lastName
*        - nickname
*        - address
*        - bio
*        properties:
*            name:
*                type: string
*                example: John
*            lastName:
*                type: string
*                example: Doe
*            nickname:
*                type: string
*                example: JohnnyD
*            address:
*                type: string
*                example: Random street
*            bio:
*                type: string
*                example: The most famous person
*
*
*/

routes.get('/v1/users/:nameSurname', UserController.userByNameSurname)
/**
* @swagger
* /v1/users/{nameSurname}:
*   get:
*     description: Retrieve all users which contains name and/or surname.
*     parameters:
*       - in: path
*         name: nameSurname
*         required: true
*         description: Name or/and surname to search
*         schema:
*           type: string
*     responses:
*        200:
*            description: Return all the users specified by the parameter {nameSurname}.
*        404:
*            description: No user found with the {nameSurname} parameter.
*        500:
*            description: Unespected error, please try again.
*/
routes.get('/v1/users/nickname/:nickname', UserController.userByNickname)
/**
* @swagger
* /v1/users/nickname/{nickname}:
*   get:
*     description: Retrieve a single user which have the nickname specified by parameter.
*     parameters:
*       - in: path
*         name: nickname
*         required: true
*         description: Nickname to search
*         schema:
*           type: string
*     responses:
*        200:
*            description: Return an user specified by the nickname.
*        404:
*            description: There is no user with this nickname.
*        500:
*            description: Unespected error, please try again.
*/

routes.put('/v1/users/:id', UserController.update)
/**
*  @swagger
* /v1/users/{id}:
*  put:
*    description: Update an user last name and address and return it.
*    consumes:
*    - application/json
*    produces:
*    - application/json
*    parameters:
*    - in: body
*      name: usuario
*      schema:
*        $ref: '#/definitions/lastName_address'
*    - in: path
*      name: id
*      required: true
*      description: User's id to update last name and address
*      schema:
*        type: string
*    responses:
*        200:
*            description: User's last name and address updated succesfully.
*        400:
*            description: Validation error.
*        500:
*            description: Unespected error, please try again.
* definitions:
*    lastName_address:
*        type: object
*        required:
*        - lastName
*        - address
*        properties:
*            lastName:
*                type: string
*                example: Doer
*            address:
*                type: string
*                example: Randomic Street
*
*
*/

routes.put('/v1/users/nickname/:id', UserController.updateNickname)
/**
*  @swagger
* /v1/users/nickname/{id}:
*  put:
*    description: Update a nickname of an user in our database
*    consumes:
*    - application/json
*    produces:
*    - application/json
*    parameters:
*    - in: body
*      name: User
*      schema:
*        $ref: '#/definitions/nickname'
*    - in: path
*      name: id
*      required: true
*      description: User's id to update nickname
*      schema:
*        type: string
*    responses:
*        200:
*            description: Nickname updated successfully
*        400:
*            description: Validation error, please check your data.
*        500:
*            description: Unespected error, please try again.
* definitions:
*    nickname:
*        type: object
*        required:
*        - nickname
*        properties:
*            nickname:
*                type: string
*                example: JDoe
*
*
*/
routes.delete('/v1/users/:id', UserController.delete)
/**
* @swagger
* /v1/users/{id}:
*   delete:
*     description: Delete an user from our database.
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: ID for removal
*         schema:
*           type: string
*     responses:
*        200:
*            description: User removed successfully.
*        404:
*            description: Cannot remove; Specified ID doesn't exist in our database.
*        500:
*            description: Unespected error, please try again.
*/

module.exports = routes
