const Sequelize = require("sequelize");

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: Sequelize.INTEGER,
        },
        title: {
          //seqelize는 기본적으로 pr키 아이디가 생략되었음.
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
        },
        address: {
          //seqelize는 기본적으로 pr키 아이디가 생략되었음.
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
        },
        menu: {
          //seqelize는 기본적으로 pr키 아이디가 생략되었음.
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
        },
        delivery_charge: {
          //seqelize는 기본적으로 pr키 아이디가 생략되었음.
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
        },
        title: {
          //seqelize는 기본적으로 pr키 아이디가 생략되었음.
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
        }

      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Post",
        tableName: "posts",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Post.belongsTo(db.User),
      {
        foreignKey: "user_id",
        targetkey: "id",
      };
  }
}