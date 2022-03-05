const { sign, verify } = require('jsonwebtoken');
const { User, Post } = require('./../../models');
const { hashPassword } = require('../functions/security');
const bcrypt = require('bcrypt');

const authorized = (accessToken) => {
  if (!accessToken) return null;
  try {
    return verify(accessToken, process.env.ACCESS_SECRET);
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = {
  generateAccessToken: (data) => {
    console.log('토큰생성중');
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '2h' });
  },

  sendAccessToken: (res, accessToken) => {
    console.log('토큰 보내는중');
    res
      .cookie('accessToken', accessToken, {
        httpOnly: false,
        secure: true,
        sameSite: 'None',
        expires: new Date(Date.now() + 1 * 1000 * 60 * 60 * 24),
      })
      .json({ data: accessToken });
  },

  isAuthorized: (req) => {
    console.log('isAuthorized 실행');
    // console.log(req.headers);
    const accessToken = req.headers.cookie.split('=')[1];
    if (!accessToken) return null;
    try {
      return verify(accessToken, process.env.ACCESS_SECRET);
    } catch (err) {
      console.log(err);
      return null;
    }
  },

  updateNickname: async (req) => {
    const resObject = {};
    const accessToken = authorized(req.cookies.accessToken);

    if (!accessToken) {
      resObject.code = 401;
      resObject.message = '로그인 시간이 만료되었습니다';

      return resObject;
    }

    if (req.body.nickname) {
      const userFindOne = await User.findOne({
        where: { nickname: req.body.nickname },
      });

      try {
        if (userFindOne) {
          console.log('3');

          resObject.code = 204;
          throw '닉네임 중복입니다';
        }
      } catch (error) {
        console.log(error);
        return resObject;
      }
    }

    // const userData = await User.findOne({ where: { userId: accessToken.userId } });
    // const match = await bcrypt.compare(req.body.password, userData.dataValues.password);
    // if (!match) {
    //   resObject.code = 400;
    //   throw '비밀번호를 잘못 입력하였습니다';
    // }

    await User.update(req.body, {
      where: { id: accessToken.id },
    })
      .then(() => {
        resObject.code = 201;
        resObject.message = '유저 정보를 수정하였습니다';
      })
      .catch(() => {
        resObject.code = 400;
        resObject.message = '유저 정보를 수정하지 못하였습니다';
      });

    return resObject;
  },

  updatePassword: async (req) => {
    const resObject = {};
    console.log(req.cookies);
    const accessToken = authorized(req.cookies.accessToken);
    console.log(accessToken);
    try {
      if (!accessToken) {
        resObject.code = 401;
        throw '로그인하여 주시기 바랍니다';
      }

      const userData = await User.findOne({
        where: { id: accessToken.id },
      });
      console.log(userData.dataValues);
      const match = await bcrypt.compare(
        req.body.password,
        userData.dataValues.password
      );
      console.log(match);
      if (!match) {
        resObject.code = 400;
        throw '비밀번호를 잘못 입력하였습니다';
      }
      console.log(req.body);
      const password = await hashPassword(req.body.new_password);
      console.log('1');
      console.log(req.body.new_password);
      await User.update(
        {
          password,
        },
        {
          where: { id: userData.dataValues.id },
        }
      )
        .then(() => {
          resObject.code = 201;
          resObject.message = '비밀번호가 변경 되었습니다';
        })
        .catch((error) => {
          console.log(error);
          resObject.code = 500;
          resObjectmessage = '서버에 오류가 발생했습니다';
        });
    } catch (error) {
      console.log(error);
      resObject.message = error;
    }
    return resObject;
  },

  unregister: async (req) => {
    const resObject = {};
    const accessToken = authorized(req.cookies.accessToken);
    try {
      if (!accessToken) {
        resObject.code = 401;
        throw '로그인하여 주시기 바랍니다';
      }
      // 소셜관련은 일단 미뤘습니다.
      // if(req.body.social){
      //   await User.update({
      //     expiredDatetime: new Date(),
      //   }, {
      //     where: {userId: accessToken.userId}
      //   });

      //   await chat_member.update({
      //     left: 'left'
      //   }, {
      //     where: {userId: accessToken.userId}
      //   });

      //   await guide_user_participate.destroy({
      //     where: {userId: accessToken.userId}
      //   })

      //   resObject.code = 201;
      //   resObject.message = '회원탈퇴 되었습니다';
      //   return resObject;
      // }

      // const userData = await User.findOne({ where: { userId: accessToken.userId } });
      // const match = await bcrypt.compare(req.body.password, userData.dataValues.password);
      // if (!match) {
      //   resObject.code = 400;
      //   throw '비밀번호를 잘못 입력하였습니다';
      // }

      await User.destroy({
        where: { id: accessToken.id },
      })
        .then((data) => {
          console.log(data);
          resObject.code = 201;
          resObject.message = '회원탈퇴 되었습니다';
        })
        .catch((error) => {
          console.log(error);
          resObject.code = 500;
          resObject.message = '서버에 오류가 발생했습니다';
        });
    } catch (error) {
      console.log(error);
      resObject.message = error;
    }
    return resObject;
  },

  getAllUserInfo: async (req, res) => {
    const resObject = {};
    try {
      const userInfoList = await User.findAll({
        attributes: ['id', 'email', 'nickname'],
      });
      resObject.code = 201;
      resObject.message = '회원탈퇴 되었습니다';
      resObject.data = userInfoList;
      return resObject;
    } catch (err) {
      console.log(err);
      resObject.code = 500;
      resObject.message = '정보를 불러오는데 실패했습니다';
      return resObject;
    }
  },
};
