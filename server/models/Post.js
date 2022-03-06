const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          //seqelize는 기본적으로 pr키 아이디가 생략되었음.
          type: Sequelize.STRING(100),
          allowNull: false,
          // unique: true,
        },
        title: {
          //seqelize는 기본적으로 pr키 아이디가 생략되었음.
          type: Sequelize.STRING(100),
          allowNull: false,
          // unique: true,
        },
        address: {
          //seqelize는 기본적으로 pr키 아이디가 생략되었음.
          type: Sequelize.STRING(100),
          allowNull: false,
          // unique: true,
        },
        menu: {
          //seqelize는 기본적으로 pr키 아이디가 생략되었음.
          type: Sequelize.STRING(100),
          allowNull: false,
          // unique: true,
        },
        delivery_charge: {
          //seqelize는 기본적으로 pr키 아이디가 생략되었음.
          type: Sequelize.INTEGER,
          allowNull: false,
          // unique: true,
        },
        recruit_volume: {
          //seqelize는 기본적으로 pr키 아이디가 생략되었음.
          type: Sequelize.STRING(20),
          allowNull: false,
          // unique: true,
        },
        bank_name: {
          //seqelize는 기본적으로 pr키 아이디가 생략되었음.
          type: Sequelize.STRING(20),
          allowNull: false,
          // unique: true,
        },
        account_number: {
          //seqelize는 기본적으로 pr키 아이디가 생략되었음.
          type: Sequelize.CHAR,
          allowNull: false,
          // unique: true,
        },
        content: {
          //seqelize는 기본적으로 pr키 아이디가 생략되었음.
          type: Sequelize.STRING(100),
          allowNull: false,
          // unique: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Post',
        tableName: 'posts',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }

  static associate(db) {
    db.Post.belongsTo(db.User),
      {
        foreignKey: 'user_id',
        targetkey: 'id',
      };
    db.Post.hasMany(db.Comment),
      {
        foreignKey: 'post_id',
        sourceKey: 'id',
      };
  }
};
