import axios from 'axios';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import kakaoIcon from '../../assets/icons/kakao_login_large_wide.png';
//import GoogleLoginBtn from '../oauth/React_GoogleLogin';
import googleLogo from '../../assets/icons/google-logo.jpeg';

import { setCookie } from '../../components/Cookie';

const LoginInputBox = styled.input`
  width: 260px;
  height: 40px;
  margin-top: 20px;
  margin-left: 15px;
  padding-left: 5px;
  font-size: 17px;
  outline: none;
  border-top: 0px solid #eee;
  border-left: 0px solid #eee;
  border-right: 0px solid #eee;
  border-bottom: 3px solid #eee;
  &:focus {
    border-bottom: 3px solid #b0c4de;
  }
  ::placeholder {
    color: #c0c0c0;
  }
`;

const LoginBtn = styled.div`
  background-color: #dcdcdc;
  color: #808080;
  text-align: center;
  line-height: 50px;
  margin-left: 15px;

  width: 260px;
  height: 45px;
  border-radius: 15px;
  &:hover {
    cursor: pointer;
    background-color: #708090;
    color: white;
    box-shadow: 2px 3px 5px 3px #dadce0;
  }
`;
const LineSNSLogin = styled.div`
  color: rgba(0, 0, 0, 0.35);

  display: flex;
  align-items: center;
  margin: 8px 0px;
  ::before {
    content: '';
    flex-grow: 1;
    background-color: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
  ::after {
    content: '';
    flex-grow: 1;
    background-color: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;
const ModalSNS = styled.div`
  color: rgba(0, 0, 0, 0.5);
  margin: 0px 16px;
  font-size: 15px;
`;
const SocialIcon = styled.img`
  width: 250px;
  height: 37px;
  margin-left: 25px;
  border-radius: 5px;
  margin-top: 3px;
  box-shadow: 1px 1px 1px 1px #dadce0;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
`;

const SocialIconGoogle = styled.div`
  width: 250px;
  height: 35px;
  color: black;
  text-align: center;
  line-height: 35px;
  margin-left: 25px;
  border-radius: 5px;
  margin-top: 1px;
  box-shadow: 1px 1px 1px 2px #dadce0;
  position: relative;
  font-size: 14px;
  font-weight: 400;

  cursor: pointer;
  > .logo {
    position: absolute;
    width: 16px;
    height: 16px;
    left: 11px;
    top: 9px;
  }
  &:hover {
    transform: scale(1.02);
  }
`;

const AletModlaBack = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  place-items: center;
`;

const AletModalView = styled.div`
  width: 200px;
  height: 150px;
  background-color: white;
  border-radius: 15px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;

  > div.AletBtn {
    width: 40%;
    height: 30px;
    border-radius: 10px;
    text-align: center;
    line-height: 30px;
    background-color: #e8f3ff;
    border: #90c2ff;
    color: #90c2ff;
    box-shadow: 1px 1px 1px 1px #dadce0;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
  > div.AletMsg {
    color: #dc143c;
  }
`;

function LoginModal({ setIsLoginCheck, handleCloseModal }) {
  const [loginUserInfo, setLoginUserInfo] = useState({
    email: '',
    password: '',
  });
  const [isAletModal, setIsAletModal] = useState(false);

  const handleInputValue = (key) => (e) => {
    setLoginUserInfo({ ...loginUserInfo, [key]: e.target.value.toLowerCase() });
  };

  const refInputEmaile = useRef();
  const refInputPassword = useRef();
  const enterKey = (e) => {
    if (e.key === 'Enter') {
      refInputEmaile.current.blur();
      refInputPassword.current.blur();

      return handleLoginClick();
    }
  };

  const handleLoginClick = async () => {
    if (!loginUserInfo.email || !loginUserInfo.password) {
      //삭제 : removeCookie('yunhoToken');
      //생성 : setCookie('yunhoToken', '123456');
      //let 조회 = getCookie('yunhoToken');
      //console.log(조회);
      setIsAletModal(true);
    } else {
      axios
        .post('url', loginUserInfo, {
          headers: { 'Content-Type': 'application/json' },
        })
        //
        .then((res) => {
          //localStorage.setItem('accessToken', res.data.access);
          setCookie('accessToken', res.data.access);
          setIsLoginCheck(true);
          handleCloseModal();
        })
        .catch((err) => {
          console.log(err, '로그인 err');
          setIsAletModal(true);
        });
    }
  };

  const handleAletCheck = () => {
    setIsAletModal(false);
  };

  //!카카오 로그인
  const handleKakaoLogin = () => {
    window.location.assign(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`
    );
    handleCloseModal();
  };

  const handleGoogleLogin = () => {
    window.location.assign(
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email`
    );
    handleCloseModal();
  };

  return (
    <>
      <div className="inputBox">
        <LoginInputBox
          type="email"
          placeholder="이메일"
          onChange={handleInputValue('email')}
          onKeyPress={enterKey}
          ref={refInputEmaile}
        />
        <LoginInputBox
          type="password"
          placeholder="비밀번호"
          onKeyPress={enterKey}
          onChange={handleInputValue('password')}
          ref={refInputPassword}
        />
      </div>
      <LoginBtn onClick={handleLoginClick}>로그인</LoginBtn>
      <div>
        <LineSNSLogin>또는</LineSNSLogin>
        <ModalSNS>SNS계정 간편로그인</ModalSNS>
        <SocialIcon src={kakaoIcon} onClick={handleKakaoLogin} />
        <SocialIconGoogle onClick={handleGoogleLogin}>
          <img src={googleLogo} className="logo" alt="profile" />
          &nbsp;&nbsp;&nbsp; 구글 로그인
        </SocialIconGoogle>
      </div>
      {isAletModal && (
        <AletModlaBack>
          <AletModalView onClick={(e) => e.stopPropagation()}>
            <div className="AletMsg">
              이메일과 비밀번호를 <br /> 확인해주세요
            </div>
            <div className="AletBtn" onClick={handleAletCheck}>
              확인
            </div>
          </AletModalView>
        </AletModlaBack>
      )}
    </>
  );
}

export default LoginModal;
