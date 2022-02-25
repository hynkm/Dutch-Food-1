'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('users',[
      {
        id:1,
        email: "hhasd@nate.com",
        password: "asdd123",
        nickname: "jyu",
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: new Date
      },
      {
        id:2,
        email: "hadds@nate.com",
        password: "asdd124",
        nickname: "nyu",
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: new Date
      }
    ]),
    await queryInterface.bulkInsert('comments',[
      {
        id:1,
        post_id: 1,
        applicant_id: 1,
        comment_content: "방화동 굽네치킨 신청",
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: new Date
      },
    ]),
    await queryInterface.bulkInsert('posts',[
      {
        id:1,
        user_id: 1,
        title: "치킨공구",
        address: "서울특별시 강서구 방화동",
        menu: "굽네치킨 고추 바사삭",
        delivery_charge: 5000,
        recruit_volume: 5,
        bank_name: "kb",
        account_number:351-3244-2123,
        content: "치킨 시킵니다, 모집인원은 5명입니다.",
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: new Date
      },
      {
        id:2,
        user_id: 2,
        title: "피자공구",
        address: "서울특별시 송파구 백제고분로",
        menu: "도미노피자 포테이토",
        delivery_charge: 4000,
        recruit_volume: 4,
        bank_name: "NH",
        account_number:472-9455-1023,
        content: "피자 시킵니다, 모집인원은 5명입니다.",
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: new Date
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("User",null, {})
  }
};
