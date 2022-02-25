require('dotenv').config();
const axios = require('axios');
const { google } = require('googleapis');
const { user } = require('../models');
const { generateAccessToken, sendAccessToken, isAuthorized } = require('./functions/user');

module.exports = {
  google: async (req, res) => {
    return res.redirect(
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}/googlecallback&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&state=google`
    );
  },
  
  googlecallback: async (req, res) => {
    const accessCode = req.body.authorizationCode;
    try {
      const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        `${process.env.REDIRECT_URL}/googlecallback`
      );

      const { tokens } = await oauth2Client.getToken(accessCode);

      oauth2Client.setCredentials(tokens);

      const userInfo = await axios.get(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokens.access_token}`
      );

      const { email, nickname } = userInfo.data;

      user
        .findOrCreate({
          where: { email: email , social: 'google',},
          defaults: {
            email: email,
            nickName: nickname,
          },
        })
        .then(([data, created]) => {
          const accessToken = generateAccessToken(data.dataValues);
          sendAccessToken(res, accessToken);
          return res.status(201).json({ success: true, message: '로그인이 완료되었습니다' });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
      res.status(500).send('잠시 후 다시 시도해주세요');
    }
  },

  kakao: async (req, res) => {
    return res.redirect(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}/kakaocallback&response_type=code`
    );
  },

  kakaocallback: async (req, res) => {
    const authorizationCode = req.body.authorizationCode;

    try {
      let kakaoToken = await axios.post(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}/kakaocallback&code=${authorizationCode}`,
        {
          headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' },
          withCredentials: true,
        }
      );

      let userInfo = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
        headers: {
          Authorization: `Bearer ${kakaoToken.data.access_token}`,
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
        },
        withCredentials: true,
      });

      const { nickname, email } = userInfo.data.kakao_account.profile;

      const [userData] = await user.findOrCreate({
        where: {
          email: email,
          social: 'kakao',
        },
        defaults: {
          email: email,
          nickname: nickname,
        },
      });

      const accessToken = generateAccessToken(userData.dataValues);
      sendAccessToken(res, accessToken);

      return res.status(201).json({ success: true, message: '로그인이 완료되었습니다' });
    } catch (err) {
      return res.status(400).send({ success: false, message: '로그인에 실패했습니다' });
    }
  },  
}