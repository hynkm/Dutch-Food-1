require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;
const { sequelize } = require('./models');


const loginPage = require('./router/loginPage');
const logoutPage = require('./router/logoutPage');
const mainPage = require('./router/mainPage');
const mypagePage = require('./router/mypagePage');
const oauthPage = require('./router/oauthPage');
const signupPage = require('./router/signupPage');

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(
  cors({
    origin: ['http://localhost:3002'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'authorization'],
  })
);

// json형식으로 올때 body 파싱
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('연결됐다.');
});
app.listen(port, () => {
  console.log('연결됐다.');
});

app.use('/login', loginPage);
app.use('/logout', logoutPage);
app.use('/main', mainPage);
app.use('/mypage', mypagePage);
app.use('/oauth', oauthPage);
app.use('/signup', signupPage);


//let server = app.listen(HTTPS_PORT);
// eslint-disable-next-line no-console
//console.log(`server running at ${HTTPS_PORT}`);

//module.exports = server;
