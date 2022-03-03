const {
    isAuthorized,
    updateNickname,
    updatePassword,
    unregister,
  } = require('./functions/user');
  const { user, post, comment } = require('../models');
  
  module.exports = {
    // myInfo: async (req, res) => {
    //     try {
    //       const accessToken = isAuthorized(req);
    //       const userInfo = await selectUser(accessToken.userId);
    
    //       if (!accessToken) {
    //         throw '다시 로그인 해주세요';
    //       } else {
    //         res.status(200).json(userInfo);
    //       }
    //     } catch (error) {
    //       console.log(error);
    //       res.status(401).send(error);
    //     }
    //   },
    
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

    getUserPost: async (req, res) => {
      const userInfo = isAuthorized(req);
      if (!userInfo) {
        res.status(401).json({ message: '로그인이 필요합니다' });
      } else {
        try {
          const postList = await post.findAll({
            include: [
              { model: post, attributes: ['title', 'created_at'] },
            ],
            where: { userId: userInfo.id },
            order: [['created_at', 'DESC']],
          });
          res.status(200).json({ postList });
        } catch (err) {
          res.status(400).json({ message: '잘못된 요청입니다' });
        }
      }      
    },

    getUserComment: async (req, res) => {
      const userInfo = isAuthorized(req);
      if (!userInfo) {
        res.status(401).json({ message: '로그인이 필요합니다' });
      } else {
        try {
          const commentList = await comment.findAll({
            include: [
              { model: comment, attributes: ['content', 'created_at'] },
            ],
            where: { userId: userInfo.id },
            order: [['created_at', 'DESC']],
          });
          res.status(200).json({ commentList });
        } catch (err) {
          res.status(400).json({ message: '잘못된 요청입니다' });
        }
      }
    }

    //모든 코멘트 불러오는 함수
  }