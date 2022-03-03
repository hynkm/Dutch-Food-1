const { isAuthorized } = require('./functions/user');
const { user, Post } = require('../models');

module.exports = {
  getAllPost: (req, res) => {
    Post.findAll({
      // order: [['created_at', 'DESC']],
    })
      .then((data) => {
        res.status(200).json({ data });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: '잘못된 요청입니다' });
      });
  },
};

// getAllPost: async (req, res) => {
//   try {
//     console.log(req.body);
//     console.log('서버');
//     const postList = await Post.findAll({
//       include: [{ model: Post, attributes: ['title', 'content'] }],
//       order: [['created_at', 'DESC']],
//     });
//     res.status(200).json({ postList });
//   } catch (err) {
//     res.status(400).json({ message: '잘못된 요청입니다' });
//   }
// },
// };

// router.get("/likeSearch/:searchWord", function(req, res, next){
//   let searchWord = req.params.searchWord

//   models.test.findAll({
//       where:{
//           postName: {
//               [Op.like]: "%" + searchWord + "%"
//           }
//       }
//   })
//       .then( result => {
//           res.json(result)
//       })
//       .catch( err => {
//           console.log(err)
//       })
// })
