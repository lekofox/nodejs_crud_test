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
        <li><a href="#installation">Installation</a></li>
      </ul>
    <li>
      <a href="#getting-started-Heroku">Running Live (Heroku)</a>
      <ul>
        <li><a href="#prerequisites-heroku">Prerequisites</a></li>
        <li><a href="#using">Using</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

## About The Project

This is a Ecommerce Project developed with Node.js and Mysql, it's possible add new products, change, delete & get them.  

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
To get a local copy up and running follow these simple example steps.

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

### Installation (local)

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
   npm run dev
   ```
## Getting Started (Heroku)

This is an example of how you may run this project in production state.
To run this project remotely follow these simple example steps.

### Prerequisites

- Insomnia or Postman
  ```sh
  https://insomnia.rest/download
  https://www.postman.com/downloads/
  ```

- Beekeper Studio (To check data on database)
  ```sh
  https://www.beekeeperstudio.io/
  ```

### Using

Do an HTTP request with Insomnia (or your favorite API client) as below.\
You can use the same endpoints with http://localhost:3333 (change the src/config/database.js to docker credentials with root user and password )



### Test Case

|           Endpoint           	|  HTTP  	|                                                                                     Proposta                                                                                     	| Body Example                                                                                          	|                                 Test                                	|
|:----------------------------:	|:------:	|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:	|-------------------------------------------------------------------------------------------------------	|:-------------------------------------------------------------------:	|
|           /v1/users          	|  POST  	|                          Cria um novo usuário recebendo os dados pelo corpo da requisição: retorna os dados do usuário criado com status correspondente.                         	| { "name":"John", "lastName":"Doe", "nickname":"JohnnyD", "address":"Random's street", "bio": "YOLO" } 	|           http://rest-api-hive-labs.herokuapp.com/v1/users          	|
|     v1/users/:nameSurname    	|   GET  	|               Listar todos os usuários cadastrados filtrados pelos campos nome e/ou sobrenome, filtrados por parâmetros de consulta: retorna um array de usuários.               	|                                                                                                       	|    http://rest-api-hive-labs.herokuapp.com/v1/users/:nameSurname    	|
| /v1/users/nickname/:nickname 	|   GET  	|                                  Listar um usuário pelo nickname passado como parâmetro: retorna um único usuário com nome, sobrenome e nickname                                 	|                                                                                                       	| http://rest-api-hive-labs.herokuapp.com/v1/users/nickname/:nickname 	|
|         /v1/users/:id        	|   PUT  	| Alterar o sobrenome e o endereço do usuário recebido no corpo da requisição, baseado no id recebido como parâmetro de rota: retorna o usuário alterado com as novas informações. 	| { "lastName": "Travagin", "address": "Rua Transzamazonica " }                                         	|         http://rest-api-hive-labs.herokuapp.com/v1/users/:id        	|
|    /v1/users/nickname/:id    	|   PUT  	|       Alterar o nickname de um usuário recebido no corpo da requisição, baseado no id recebido como parâmetro de rota: retorna o usuário alterado com as novas informações.      	| { "nickname": "CodenameFox" }                                                                         	|    http://rest-api-hive-labs.herokuapp.com/v1/users/nickname/:id    	|
|         /v1/users/:id        	| DELETE 	|                                          Deletar um usuário baseado no id recebido como parâmetro de rota: retorna o status de sucesso.                                          	|                                                                                                       	|         http://rest-api-hive-labs.herokuapp.com/v1/users/:id        	|


### Seeds Data
In our seeds you will find a total of 2 users (Leandro Dias, Marcos Allan). \
If you use Heroku's version, Leandro and Marcos will be there by default too.

## License

Distributed under the MIT License. See `LICENSE` for more information.



