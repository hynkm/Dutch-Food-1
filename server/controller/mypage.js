const {
    isAuthorized,
    updateNickname,
    updatePassword,
    unregister,
  } = require('./functions/user');
  const { user } = require('../models');
  
  module.exports = {
    myInfo: async (req, res) => {
        try {
          const accessToken = isAuthorized(req);
          const userInfo = await selectUser(accessToken.userId);
    
          if (!accessToken) {
            throw '다시 로그인 해주세요';
          } else {
            res.status(200).json(userInfo);
          }
        } catch (error) {
          console.log(error);
          res.status(401).send(error);
        }
      },
    
    updateNickname: async (req, res) => {
      const resObject = await updateNickname(req);
      res.status(resObject.code).send(resObjectmessage);
    },

    updatePassword: async (req, res) => {
      const resObject = await updatePassword(req);
      res
        .status(resObject.code)
        .clearCookie('accessToken', {
          httpOnly: true,
          secure: true,
          sameSite: 'None',
        })
        .send(resObject.message);
    },      
    
    unregister: async (req, res) => {
      const resObject = await unregister(req);
      res
        .status(resObject.code)
        .clearCookie('accessToken', {
          httpOnly: true,
          secure: true,
          sameSite: 'None',
        })
        .send(resObject.message);
    },

  }