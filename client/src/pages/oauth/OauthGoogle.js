import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { setCookie } from '../../components/Cookie';

function OauthGoogle({ setIsLoginCheck }) {
  const navigate = useNavigate();
  useEffect(() => {
    //url 분리
    const url = new URL(window.location.href);
    //hash 분리
    const hash = url.hash;
    //토큰 분리
    const code = hash.split('=')[1].split('&')[0];

    axios
      .post('url', code, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        setCookie('accessToken', res.data.access);
        setIsLoginCheck(true);
        navigate('/main');
      })
      .catch((err) => {
        console.log(err, '구글 로그인 err');
      });
  }, []);
  return <div>구글 로그인중</div>;
}

export default OauthGoogle;
/*
axios
      .get(
        'https://www.googleapis.com/oauth2/v2/userinfo?access_token=' +
          accessToken,
        {
          headers: {
            authorization: `token ${accessToken}`,
            accept: 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res, '내가찾는');
      })
      .catch((err) => {
        console.log(err, '구글 로그인 err');
      });
  }, []);
  */
