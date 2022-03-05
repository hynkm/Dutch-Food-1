const post = require('../post');
const { User, Post } = require('./../../models');
const { isAuthorized } = require('./user');

module.exports = {
  createPost: async (req, res) => {
    const resObject = {};
    const accessToken = isAuthorized(req);

    if (!accessToken) {
      res.status(401).json({ message: '로그인 해주세요' });
    } else {
      try {
        const {
          title,
          address,
          menu,
          delivery_charge,
          recruit_volume,
          bank_name,
          account_number,
          content,
        } = req.body;

        console.log('try 들어옴');
        await Post.create({
          user_id: accessToken.id,
          // post_id: req.body.postId,
          title: title,
          address: address,
          menu: menu,
          delivery_charge: delivery_charge,
          recruit_volume: recruit_volume,
          bank_name: bank_name,
          account_number: account_number,
          content: content,
        });
        console.log('여기');
        // res.status(200).json({ message: '게시글 작성이 완료되었습니다' });
        resObject.code = 201;
        resObject.message = '게시글 작성이 완료되었습니다';
        return resObject;
      } catch (err) {
        console.log(err);
        // res.status(400).json({ message: '입력 정보가 올바르지 않습니다.' });
        resObject.code = 400;
        resObject.message = '게시글을 작성하지 못하였습니다';
        return resObject;
      }
    }
  },
  updatePost: async (req, res) => {
    console.log('서버들어옴');
    const resObject = {};
    const accessToken = isAuthorized(req);

    if (!accessToken) {
      res.status(401).json({ message: '로그인 해주세요' });
    } else {
      try {
        console.log(req.body);
        await Post.update(req.body, { where: { id: req.body.id } });
        // res.status(201).json({ message: '게시글 수정이 완료되었습니다' });
        resObject.code = 201;
        resObject.message = '게시글 수정이 완료되었습니다';
        return resObject;
      } catch (err) {
        console.log(err);
        // res.status(400).json({ message: '게시글을 수정하지 못했습니다' });
        resObject.code = 400;
        resObject.message = '게시글을 수정하지 못하였습니다';
        return resObject;
      }
    }
  },
  deletePost: async (req, res) => {
    const accessToken = isAuthorized(req, res);
    const resObject = {};
    const post = req.body;
    console.log(req);
    if (!accessToken) {
      res.status(401).json({ message: '로그인 해주세요' });
    } else {
      try {
        console.log(req.body);

        await Post.destroy({ where: { id: post.id } });
        // res.status(201).json({ message: '게시글이 삭제되었습니다' });
        resObject.code = 201;
        resObject.message = '게시글이 삭제되었습니다';
        return resObject;
      } catch (err) {
        console.log(err);
        // res.status(400).json({ message: '게시글을 삭제하지 못했습니다' });
        resObject.code = 400;
        resObject.message = '게시글을 삭제하지 못하였습니다';
        return resObject;
      }
    }
  },
  findNickname: async (req, res) => {
    // const userInfo = isAuthorized(req);
    const resObject = {};
    try {
      const postNickname = await User.findOne({
        where: { id: req.body.id },
      });
      resObject.code = 200;
      resObject.message = '닉네임을 불러왔습니다';
      resObject.data = postNickname;
      return resObject;
    } catch (err) {
      resObject.code = 400;
      resObject.message = '닉네임을 불러오지 못하였습니다';
      return resObject;
    }
  },
};
