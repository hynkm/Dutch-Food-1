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
      .post('url', code, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        setCookie('accessToken', res.data.access);
        setIsLoginCheck(true);
        navigate('/main');
        //! 만약 카카오 로그인한 유저가 닉네임이 없을때 닉네임만 따로 저장?
        //! 닉네임 유무 검사후 없으면 닉네임 작성하는 모달창, 있으면 바로 로그인
      })
      .catch((err) => console.log(err, '카카오 로그인err'));
  }, []);
  return <div>카카오 로그인중</div>;
}

export default OauthKakao;
