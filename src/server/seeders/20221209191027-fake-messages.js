'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const usersAndChats = Promise.all([
      queryInterface.sequelize.query(
        'SELECT id from Users;',
      ),
      queryInterface.sequelize.query(
        'SELECT id from Chats;',
      ),
    ]);

    return usersAndChats.then((rows) => {
      const users = rows[0][0];
      const chats = rows[1][0];

      return queryInterface
        .bulkInsert('Messages',
          [{
            userId: users[0].id,
            chatId: chats[0].id,
            text: 'This is a test message.',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: users[1].id,
            chatId: chats[0].id,
            text: 'This is a second test message.',
            createdAt: new Date(),
            updatedAt: new Date(),
          }],
          {})
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Messages', null, {});
  }
};
