'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          email: 'kimcoding1@naver.com',
          password: 'qweqwe1!',
          nickname: '김코딩1',
          createdAt: new Date(),
          updatedAt: new Date(),
          // deletedAt: new Date(),
        },
        {
          id: 2,
          email: 'kimcoding2@naver.com',
          password: 'qweqwe1!',
          nickname: '김코딩2',
          createdAt: new Date(),
          updatedAt: new Date(),
          // deletedAt: new Date(),
        },
        {
          id: 3,
          email: 'kimcoding3@naver.com',
          password: 'qweqwe1!',
          nickname: '김코딩3',
          createdAt: new Date(),
          updatedAt: new Date(),
          // deletedAt: new Date(),
        },
        {
          id: 4,
          email: 'kimcoding4@naver.com',
          password: 'qweqwe1!',
          nickname: '김코딩4',
          createdAt: new Date(),
          updatedAt: new Date(),
          // deletedAt: new Date(),
        },
        {
          id: 5,
          email: 'kimcoding5@naver.com',
          password: 'qweqwe1!',
          nickname: '김코딩5',
          createdAt: new Date(),
          updatedAt: new Date(),
          // deletedAt: new Date(),
        },
        {
          id: 6,
          email: 'kimcoding6@naver.com',
          password: 'qweqwe1!',
          nickname: '김코딩6',
          createdAt: new Date(),
          updatedAt: new Date(),
          // deletedAt: new Date(),
        },
        {
          id: 7,
          email: 'kimcoding7@naver.com',
          password: 'qweqwe1!',
          nickname: '김코딩7',
          createdAt: new Date(),
          updatedAt: new Date(),
          // deletedAt: new Date(),
        },
        {
          id: 8,
          email: 'kimcoding8@naver.com',
          password: 'qweqwe1!',
          nickname: '김코딩8',
          createdAt: new Date(),
          updatedAt: new Date(),
          // deletedAt: new Date(),
        },
        {
          id: 9,
          email: 'kimcoding9@naver.com',
          password: 'qweqwe1!',
          nickname: '김코딩9',
          createdAt: new Date(),
          updatedAt: new Date(),
          // deletedAt: new Date(),
        },
        {
          id: 10,
          email: 'kimcoding10@naver.com',
          password: 'qweqwe1!',
          nickname: '김코딩10',
          createdAt: new Date(),
          updatedAt: new Date(),
          // deletedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
