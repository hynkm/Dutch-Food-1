const { isAuthorized } = require('./functions/user');
const { user, post } = require('../models');


module.exports = {
    getAllPost: async (req, res) => {
        try {
          const postList = await post.findAll({
            include: [
              { model: post, attributes: ['title', 'content'] },
            ],
            order: [['created_at', 'DESC']],
          });
          res.status(200).json({ postList });
        } catch (err) {
          res.status(400).json({ message: '잘못된 요청입니다' });
        }
    },     
}