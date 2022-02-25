const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        post_id: {
          type: Sequelize.INTEGER,
        },
        applicant_id: {
          type: Sequelize.STRING(100),
        },
        comment_content: {
          //seqelize는 기본적으로 pr키 아이디가 생략되었음.
          type: Sequelize.STRING(100),
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: "Comment",
        tableName: "comments",
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.Comment.belongsTo(db.Post),
      {
        foreignKey: "post_id",
        targetkey: "id",
      };
      db.Comment.belongsTo(db.User),
      {
        foreignKey: "applicant_id",
        targetkey: "id",
      };
  }
  
};