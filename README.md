<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center"> Node.js - User API</h3>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation-locally">Installation locally</a></li>
      </ul>
    <li>
      <a href="#getting-started-with-heroku">Getting started (Heroku)</a>
      <ul>
        <li><a href="#prerequisites-heroku">Prerequisites</a></li>
        <li><a href="#using">Using</a></li>
      </ul>
    </li>
    <li><a href="#test-case">Test cases</a></li>
    <ul><li><a href="#seeds-data">Seeds data</li></ul>
    <li><a href="#license">License</a></li>
    <li><a href="#dev-notes">Dev Notes</a></li>
    <ul>
        <li><a href="#docker-container">Docker Container</a></li>
        <li><a href="#test-unit">Unit Test</a></li>
      </ul>
  </ol>
</details>

## About The Project

This is an RESTful API Project developed with Node.js and MySQL, it's possible add new products, change, delete & get them.  

### Built With

- [express](https://expressjs.com/)
- [yup](https://www.npmjs.com/package/yup)
- [docker](https://www.docker.com/)
- [sequelize](https://sequelize.org/)
- [mysql](https://www.npmjs.com/package/mysql2)
- [jest](https://www.npmjs.com/package/jest)


<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps. If you run into database-side errors, please change the credentials in database.js to root user and password with localhost. 

### Prerequisites

- Docker
  ```sh
  https://www.docker.com/products/docker-desktop
  ```
- npm
  ```sh
  npm install npm@latest -g
  ```
- Sequelize-cli
  ```sh
  npm install sequelize-cli -g
  ```

### Installation locally

1. Clone the repo
   ```sh
   git clone https://github.com/lekofox/nodejs_crud_test
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
4. Docker Image
   ```sh
   docker run -d --name hive_case -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=case_hive mysql:8.0.25 --default-authentication-plugin=mysql_native_password
   ```
5. Run migrations
   ```JS
   npx sequelize db:migrate
   ```
6. Run seeds
   ```JS
   npx sequelize db:seed:all
   ```
7. start the project
   ```JS
   npm start
   ```
## Getting Started with Heroku

This is an example of how you may run this project in production state.
To run this project remotely follow these simple example steps.

### Prerequisites Heroku

- Insomnia or Postman
  ```sh
  https://insomnia.rest/download
  https://www.postman.com/downloads/
  ```

- Beekeper Studio (To check data in database)
  ```sh
  https://www.beekeeperstudio.io/
  ```

### Using

To see the full docs with Swagger, please visit http://rest-api-hive-labs.herokuapp.com/docs-api/#/ \
You can also do a HTTP request with Insomnia (or your favorite API client) as below.\
You can use the same endpoints with http://localhost:3333



### Test Case

|           Endpoint           	|  HTTP  	|                                                                                     Proposta                                                                                     	| Body Example                                                                                          	|                                 Test                                	|
|:----------------------------:	|:------:	|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:	|-------------------------------------------------------------------------------------------------------	|:-------------------------------------------------------------------:	|
|           /v1/users          	|  POST  	|                          Cria um novo usu??rio recebendo os dados pelo corpo da requisi????o: retorna os dados do usu??rio criado com status correspondente.                         	| { "name":"John", "lastName":"Doe", "nickname":"JohnnyD", "address":"Random's street", "bio": "YOLO" } 	|           http://rest-api-hive-labs.herokuapp.com/v1/users          	|
|     v1/users/:nameSurname    	|   GET  	|               Listar todos os usu??rios cadastrados filtrados pelos campos nome e/ou sobrenome, filtrados por par??metros de consulta: retorna um array de usu??rios.               	|                                                                                                       	|    http://rest-api-hive-labs.herokuapp.com/v1/users/:nameSurname    	|
| /v1/users/nickname/:nickname 	|   GET  	|                                  Listar um usu??rio pelo nickname passado como par??metro: retorna um ??nico usu??rio com nome, sobrenome e nickname                                 	|                                                                                                       	| http://rest-api-hive-labs.herokuapp.com/v1/users/nickname/:nickname 	|
|         /v1/users/:id        	|   PUT  	| Alterar o sobrenome e o endere??o do usu??rio recebido no corpo da requisi????o, baseado no id recebido como par??metro de rota: retorna o usu??rio alterado com as novas informa????es. 	| { "lastName": "Travagin", "address": "Rua Transzamazonica " }                                         	|         http://rest-api-hive-labs.herokuapp.com/v1/users/:id        	|
|    /v1/users/nickname/:id    	|   PUT  	|       Alterar o nickname de um usu??rio recebido no corpo da requisi????o, baseado no id recebido como par??metro de rota: retorna o usu??rio alterado com as novas informa????es.      	| { "nickname": "CodenameFox" }                                                                         	|    http://rest-api-hive-labs.herokuapp.com/v1/users/nickname/:id    	|
|         /v1/users/:id        	| DELETE 	|                                          Deletar um usu??rio baseado no id recebido como par??metro de rota: retorna o status de sucesso.                                          	|                                                                                                       	|         http://rest-api-hive-labs.herokuapp.com/v1/users/:id        	|


## Seeds Data
In our seeds you will find a total of 2 users (Leandro Dias, Marcos Allan). \
If you use Heroku's version, Leandro and Marcos will be there by default too.

## License

Distributed under the MIT License. See `LICENSE` for more information.


## Dev notes

#### Docker Container

The first idea was building the whole application into a docker-compose file to run in every possible scenario. \
I had some problems with the integration between the two images (database and application), so I prefered to just run an docker local image of the database. \
Future releases should be in a docker-friendly development.


#### Test unit
Same as docker, the original idea was testing the whole application and build it in a TDD-like pattern. \
Actually there is a tests/app.test.js and a script to run it, but isnt running in production. \
I'm curently improving myself and learning TDD to deliver it in future releases
