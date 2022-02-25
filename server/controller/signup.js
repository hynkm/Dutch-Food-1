require('dotenv').config();
const { user } = require('../models');
const { hashPassword } = require('./functions/secure');

module.exports = {
  emailCheck: (req, res) => {
    const { userEmail } = req.query;

    user
      .findOne({ where: { email: userEmail } })
      .then((data) => {
        if (data) {
          return res
            .status(200)
            .json({ success: false, message: '사용이 불가능한 이메일입니다' });
        } else {
          return res
            .status(404)
            .json({ success: true, message: '사용이 가능한 이메일입니다' });
        }
      })
      .catch((err) => console.log(err));
  },

  nicknameCheck: (req, res) => {
    const { nickname } = req.query;

    user
      .findOne({ where: { nickname } })
      .then((data) => {
        if (data) {
          return res
            .status(200)
            .json({ success: false, message: '사용이 불가능한 별명입니다' });
        } else {
          return res
            .status(404)
            .json({ success: true, message: '사용이 가능한 별명입니다' });
        }
      })
      .catch((err) => console.log(err));
  },

  signup: async (req, res) => {
    const { email, password, nickname } = req.body;
    const hashPw = await hashPassword(password);

    user.findOrCreate({
      where: { userId },
      defaults: { email, password: hashPw, nickname },
    });
  },
};
