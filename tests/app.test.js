// import supertest from 'supertest'
// import app from '../src/app'

// let users = [1]
// beforeEach(() => {
//   users = [
//     {
//       id: 'b5993dcc-bade-4a7f-aacc-a80591d13edc',
//       name: 'John',
//       lastName: 'Doe',
//       nickname: 'JohnnyD',
//       address: 'Random street, 65',
//       bio: '!'
//     },
//     {
//       id: 'f9f4531b-2d99-4efb-a468-8725c0578fe5',
//       name: 'Jenny',
//       lastName: 'Doe',
//       nickname: 'JDoe',
//       address: 'Random street, 65',
//       bio: '?'
//     }
//   ]
// })
// test('Deve ser possível cadastrar o usuário e retornar seu body', async () => {
//   const response = await supertest(app)
//     .post('/v1/users')
//     .send(users[0])

//   expect(response.body).toMatchObject({
//     id: 'b5993dcc-bade-4a7f-aacc-a80591d13edc',
//     name: 'John',
//     lastName: 'Doe',
//     nickname: 'JohnnyD',
//     address: 'Random street, 65',
//     bio: '!'
//   })
// })
