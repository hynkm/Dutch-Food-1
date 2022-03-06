import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { setCookie } from '../../components/Cookie';

function OauthKakao({ setIsLoginCheck }) {
  const navigate = useNavigate();
  let code = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    axios
      //.get(`http://{서버주소}?code=${code}`) 퀴리 스트링
      .post(
        'http://localhost:8080/oauth/kakao',
        { data: code },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log('카카오 로그인 데이타');
        // console.log(res);
        // console.log(res.data);
        setCookie('accessToken', res.data.data);
        setIsLoginCheck(true);
        navigate('/main');
      })
      .catch((err) => console.log(err, '카카오 로그인err'));
  }, []);
  return <div>카카오 로그인중</div>;
}

export default OauthKakao;
