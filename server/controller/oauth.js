require('dotenv').config();
const axios = require('axios');
const crypto = require('crypto');
const { google } = require('googleapis');
const { User } = require('../models');
const { generateAccessToken, sendAccessToken } = require('./functions/user');

module.exports = {
  // google: async (req, res) => {
  //   return res.redirect(
  //     `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}/googlecallback&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&state=google`
  //   );
  // },

  //googlecallback -> google
  google: async (req, res) => {
    //const accessCode = req.body.authorizationCode;

    console.log('구글 로그인');
    const accessCode = req.body.data;
    console.log(req.body.data);

    try {
      // const oauth2Client = new google.auth.OAuth2(
      //   process.env.GOOGLE_CLIENT_ID,
      //   process.env.GOOGLE_CLIENT_SECRET,
      //   `${process.env.REDIRECT_URI}/googlecallback`
      // );

      // const oauth2Client = new google.auth.OAuth2(
      //   process.env.GOOGLE_CLIENT_ID,
      //   process.env.GOOGLE_CLIENT_SECRET,
      //   process.env.GOOGLE_REDIRECT_URI
      // );

      //console.log(oauth2Client);
      // const { tokens } = await oauth2Client.getToken(accessCode);
      console.log(accessCode);
      //oauth2Client.setCredentials(tokens);

      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v2/userinfo?access_token=' +
          accessCode,
        {
          headers: {
            authorization: `token ${accessCode}`,
            accept: 'application/json',
          },
        }
      );

      // const userInfo = await axios.get(
      //   `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessCode}`
      // );
      //console.log(userInfo.data);
      const { email } = userInfo.data;

      //* 카카오와 동일 구글 유저 eamil만 불러온 상태
      console.log('구글 유저 email');
      console.log(email);

      let dontBreak = true;
      let uniqueNickname;
      const nicknameData = await User.findAll({ attributes: ['nickname'] });
      const nickNames = nicknameData.map((el) => el.dataValues.nickname);
      while (dontBreak) {
        const key1 = crypto.randomBytes(256).toString('hex').substr(100, 4);
        const randomNum = parseInt(key1, 16);
        const nick = 'G' + randomNum;
        if (!nickNames.includes(nick)) {
          uniqueNickname = nick;
          dontBreak = false;
        }
      }

      const userData = await User.create({
        email,
        nickname: uniqueNickname,
        password: '',
      });

      const accessToken = generateAccessToken(userData.dataValues);
      sendAccessToken(res, accessToken);
    } catch (err) {
      console.log(err);
    }
  },

  // kakao: async (req, res) => {
  //   return res.redirect(
  //     `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}/kakaocallback&response_type=code`
  //   );
  // },

  kakao: async (req, res) => {
    //console.log('카카오로그인');
    const authorizationCode = req.body.data;
    //console.log(req.body.data);
    // {
    //   data: 'NPdPizPABSUEQkwVaIStweXVBmA-trnPY_1yGkSjjnYMV2nPqscMjojfcvxELNnjl5B_OwopcFAAAAF_Wsc6fQ'
    // }

    try {
      //console.log('카카오 try');
      // console.log(process.env.KAKAO_CLIENT_ID);
      // console.log(process.env.KAKAO_REDIRECT_URI);
      // console.log(authorizationCode);

      // let kakaoToken = await axios.post(
      //   `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}/kakaocallback&code=${authorizationCode}`,
      //   {
      //     headers: {
      //       'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      //     },
      //     withCredentials: true,
      //   }
      // );
      let kakaoToken = await axios.post(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&code=${authorizationCode}`,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
          },
          withCredentials: true,
        }
      );
      //console.log('카카오에서 토큰받아왔니?');
      //console.log(kakaoToken.data.access_token);

      let userInfo = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
        headers: {
          Authorization: `Bearer ${kakaoToken.data.access_token}`,
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
        },
        withCredentials: true,
      });
      //console.log('카카오에서 유저정보받아왔니??');
      //console.log(userInfo.data.kakao_account.email);

      // const { email } = userInfo.data.kakao_account.profile;
      const { email } = userInfo.data.kakao_account;
      //console.log(email);

      //* 클라이언트로부터 인가코드 받고 카카오로 인가코드 넘겨주고, 카카오로 부터 토큰값(유저) 받아오고
      //* 유저 토큰값으로 카카오api 통신해서 email 까지 받아온 상태
      console.log('카카오 유저 email');
      console.log(email);
      let dontBreak = true;
      let uniqueNickname;
      const nicknameData = await User.findAll({ attributes: ['nickname'] });
      const nickNames = nicknameData.map((el) => el.dataValues.nickname);
      while (dontBreak) {
        const key1 = crypto.randomBytes(256).toString('hex').substr(100, 4);
        const randomNum = parseInt(key1, 16);
        const nick = 'K' + randomNum;
        if (!nickNames.includes(nick)) {
          uniqueNickname = nick;
          dontBreak = false;
        }
      }

      const userData = await User.create({
        email,
        nickname: uniqueNickname,
        password: '',
      });

      const accessToken = generateAccessToken(userData.dataValues);
      sendAccessToken(res, accessToken);
    } catch (err) {
      console.log(err);
      // return res
      //   .status(400)
      //   .send({ success: false, message: '로그인에 실패했습니다' });
    }
  },
};
//
