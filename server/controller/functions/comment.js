const { Comment } = require('./../../models');
// const { post } = require('./post');
const { isAuthorized } = require('./user');

module.exports = {
  createComment: async (req, res) => {
    console.log('서버');
    const accessToken = isAuthorized(req);
    let resObject = {};

    if (!accessToken) {
      res.status(401).json({ message: '로그인 해주세요' });
    } else {
      try {
        console.log(req.body);
        const { post_id, applicant_id, comment_content } = req.body;

        await Comment.create({
          user_id: accessToken.id,
          post_id: post_id,
          applicant_id: applicant_id,
          comment_content: comment_content,
        });
        // res.status(201).json({ message: '댓글 작성이 완료되었습니다' });
        resObject.code = 201;
        resObject.message = '댓글 작성이 완료되었습니다';
        return resObject;
      } catch (err) {
        console.log(err);
        // res.status(400).json({ message: '입력 정보가 올바르지 않습니다.' });
        resObject.code = 400;
        resObject.message = '댓글을 작성하지 못하였습니다';
        return resObject;
      }
    }
  },
  updateComment: async (req, res) => {
    const accessToken = isAuthorized(req);
    try {
      await Comment.update(req.body, {
        where: { user_id: accessToken.userId, post_id: req.body.post_id },
      });
      res.status(201).json({ message: '댓글 수정이 완료되었습니다' });
      resObject.code = 201;
      resObject.message = '댓글 수정이 완료되었습니다';
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: '댓글을 수정하지 못했습니다' });
      resObject.code = 400;
      resObject.message = '댓글을 수정하지 못하였습니다';
    }
  },
  deleteComment: async (req, res) => {
    const accessToken = isAuthorized(req);
    const commentId = req.body.id;
    const resObject = {};
    try {
      if (!accessToken) {
        return res.status(401).send({ message: '로그인 해주세요' });
      }

      if (accessToken) {
        await Comment.destroy({ where: { id: commentId } });
        resObject.code = 201;
        resObject.message = '댓글이 삭제되었습니다';
        return resObject;
      }
    } catch (err) {
      // res.status(400).json({ message: '댓글을 삭제하지 못했습니다' });
      resObject.code = 400;
      resObject.message = '댓글이 삭제되었습니다';
      return resObject;
    }
  },
};
