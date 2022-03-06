require('dotenv').config();

module.exports = {
  logout: async (req, res) => {
    console.log('서버 로그아웃');
    return res
      .clearCookie('accessToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
      })
      .json({ success: true });
  },
};
