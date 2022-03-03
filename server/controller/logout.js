require('dotenv').config();

module.exports = {
  logout: async (req, res) => {
    console.log('서버');
    res
      .clearCookie('accessToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
      })
      .json({ success: true });
  },
};
