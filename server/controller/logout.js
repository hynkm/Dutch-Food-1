require('dotenv').config();

module.exports = {
  logout: async (req, res) => {
    res
      .clearCookie('accessToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
      })
      .json({ success: true });
  },
};