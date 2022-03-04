const { Post } = require('./../../models');
const { isAuthorized } = require('./user');

module.exports = {
  createPost: async (res, req) => {
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

        await Post.create({
          user_id: accessToken.userId,
          post_id: req.body.postId,
          title: title,
          address: address,
          menu: menu,
          delivery_charge: delivery_charge,
          recruit_volume: recruit_volume,
          bank_name: bank_name,
          account_number: account_number,
          content: content,
        });
        res.status(201).json({ message: '게시글 작성이 완료되었습니다' });
        resObject.code = 201;
        resObject.message = '게시글 작성이 완료되었습니다';
      } catch (err) {
        console.log(err);
        res.status(400).json({ message: '입력 정보가 올바르지 않습니다.' });
        resObject.code = 400;
        resObject.message = '게시글을 작성하지 못하였습니다';
      }
    }
  },
  updatePost: async (res, req) => {
    const resObject = {};
    const accessToken = isAuthorized(req, res);

    if (!accessToken) {
      res.status(401).json({ message: '로그인 해주세요' });
    } else {
      try {
        await Post.update({ where: { user_id: accessToken.id } });
        res.status(201).json({ message: '게시글 수정이 완료되었습니다' });
        resObject.code = 201;
        resObject.message = '게시글 수정이 완료되었습니다';
      } catch (err) {
        console.log(err);
        res.status(400).json({ message: '게시글을 수정하지 못했습니다' });
        resObject.code = 400;
        resObject.message = '게시글을 수정하지 못하였습니다';
      }
    }
  },
  deletePost: async (res, req) => {
    const accessToken = isAuthorized(req, res);
    const resObject = {};
    const postId = req.body;

    if (!accessToken) {
      res.status(401).json({ message: '로그인 해주세요' });
    } else {
      try {
        await Post.destroy({ where: { post_id: postId } });
        res.status(201).json({ message: '게시글이 삭제되었습니다' });
        resObject.code = 201;
        resObject.message = '게시글이 삭제되었습니다';
      } catch (err) {
        console.log(err);
        res.status(400).json({ message: '게시글을 삭제하지 못했습니다' });
        resObject.code = 400;
        resObject.message = '게시글을 삭제하지 못하였습니다';
      }
    }
  },
};
