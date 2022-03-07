const { isAuthorized } = require('./functions/user');

module.exports = {
  auth: (req, res) => {
    console.log('로그인 서버 들어옴?');
    const userInfo = isAuthorized(req);
    //console.log(userInfo);
    try {
      if (!userInfo) {
        res.status(400).json({ message: '잘못된 요청입니다' });
      } else {
        res.status(200).json({ data: userInfo });
      }
    } catch (err) {
      console.log(err);
    }
  },
};
