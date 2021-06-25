'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 'affbcdc3-041e-4ed0-8fcd-6bd92819512b',
      name: 'Leandro',
      lastname: 'Dias',
      nickname: 'CodenameFox',
      address: 'Yalahar Depot, Tenebra - Tibia ',
      bio: 'O knight mais doido que já existiu em toda Tenebra. Gama Alumni e doido pra entrar em campo.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'fb3df9f7-2f72-4273-9131-c1973bfac9f4',
      name: 'Marcos',
      lastname: 'Allan',
      nickname: 'Dark Summoner',
      address: 'Yalahar Depot, Gladera - Tibia',
      bio: 'Caçador de vampiros. O cara certo pra colocar o Leandro em campo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};