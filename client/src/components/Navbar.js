import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import { FiAlignJustify } from 'react-icons/fi';
import { FaUserPlus } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillEdit, AiFillLock, AiFillUnlock } from 'react-icons/ai';
import { removeCookie, getCookie } from './Cookie';
import { useNavigate } from 'react-router-dom';

import LoginModal from '../pages/modal/LoginModal';
import SignupModal from '../pages/modal/SignupModal';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: 'IBM Plex Sans KR', sans-serif;
  }`;

const NavbarBtn = styled.div`
  background-color: white;
  height: 80px;
  display: flex;
  justify-items: center;
  align-items: center;
  position: relative;
  position: absolute;
  right: 0px;
  top: 1px;
  > svg.nav_icon {
    position: absolute;
    right: 10px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      color: rgba(0, 0, 0, 0.5);
      font-size: 100px;
    }
  }
`;

const NavMenuBox = styled.div`
  background-color: black;
  height: 140px;
  width: 150px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  opacity: 0.8;
  position: absolute;
  right: 0px;
  top: 70px;
  /* transform: translateX(4px, 100px); */
  transition: 0.5s;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  word-break: keep-all;
  z-index: 15;
  &.loginTrue {
    height: 170px;
  }
  &.NavMenuBoxClose {
    background-color: black;
    opacity: 0.8;
    width: 0px;
    overflow: hidden;
  }
`;

const NavMenuList = styled.div`
  color: white;
  margin-left: 45px;
  font-family: 'IBM Plex Sans KR', sans-serif;

  font-size: 20px;
  line-height: 1.2;
  &:hover {
    cursor: pointer;
  }
  > svg.icon {
    position: absolute;
    left: 14px;
  }
`;

const ModlaBack = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 990;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  place-items: center;
`;

const ModalView = styled.div`
  width: 300px;
  height: 460px;
  background-color: white;
  border-radius: 15px;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  > span.close-modal {
    position: absolute;
    font-size: 30px;
    top: -60px;
    right: 0px;
    cursor: pointer;
  }
`;
const ModalChangBtn = styled.div`
  position: absolute;

  background-color: #d3d3d3;
  width: 100%;
  height: 20px;
  top: 0px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-evenly;
  > div {
    background-color: white;
    text-align: center;
    line-height: 50px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    width: 50%;
    height: 50px;
    margin: 0px;
    cursor: pointer;
    &:hover {
      font-size: 18px;
    }
    &.offModalChangBtnL {
      color: #a9a9a9;
      border-bottom-left-radius: 15px;
      background-color: #d3d3d3;
    }
    &.offModalChangBtnR {
      color: #a9a9a9;
      border-bottom-right-radius: 15px;
      background-color: #d3d3d3;
    }
  }
`;

const LogoutModlaBack = styled.div`
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

const LogoutModlaView = styled.div`
  width: 250px;
  height: 130px;
  background-color: white;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  font-size: 20px;
  text-align: left;
`;

const LogoutModalBtn = styled.div`
  width: 80px;
  height: 30px;
  margin-top: 70px;
  background-color: #e8f3ff;
  border: #90c2ff;
  color: #90c2ff;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 1px 1px 1px 1px #dadce0;
  &.cancel {
    color: #ef9a9a;
    background-color: #ffebee;
    border: #ef9a9a;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

function Navbar({ setIsLoginCheck, isLoginCheck }) {
  let url = 'http://localhost:8080';
  const [isSidebar, setIsSidebar] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isSignupModal, setIsSignupModal] = useState(false);
  const [isLogoutModal, setIsLogoutModal] = useState(false);

  const navigate = useNavigate();

  const showSidebar = () => {
    setIsSidebar(!isSidebar);
  };

  const loginModalOpen = () => {
    setIsLoginModal(true);
    setIsSidebar(false);
    setIsSignupModal(false);
  };

  const signupModalOpen = () => {
    setIsSignupModal(true);
    setIsLoginModal(false);
    setIsSidebar(false);
  };

  const handleCloseModal = () => {
    setIsLoginModal(false);
    setIsSidebar(false);
    setIsSignupModal(false);
  };

  const handleLogoutModal = () => {
    setIsLogoutModal(!isLogoutModal);
    setIsLoginModal(false);
    setIsSidebar(false);
    setIsSignupModal(false);
  };

  //! 로그아웃
  const handleLogout = () => {
    //로그아웃 여부 모달창 띄우고 확인 시 axios 요청
    //취소하면 모달창 다시 닫기
    axios
      .post(url + '/logout/logout', {
        headers: { withCredentials: true },
      })
      .then((res) => {
        setIsLoginCheck(false);
        removeCookie('accessToken');
        navigate('/main');
      })
      .catch((err) => {
        console.log(err, '로그아웃 err');
      });
  };

  useEffect(() => {
    if (getCookie('accessToken')) {
      setIsLoginCheck(true);
    }
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <NavbarBtn>
        <FiAlignJustify size={35} className="nav_icon" onClick={showSidebar} />
        {isLoginCheck ? (
          <NavMenuBox className={isSidebar ? 'loginTrue' : 'NavMenuBoxClose'}>
            <NavMenuList onClick={() => navigate('/createpost')}>
              <AiFillEdit className="icon" />
              게시글작성
            </NavMenuList>
            <NavMenuList onClick={() => navigate('/mypage')}>
              <BsFillPersonFill className="icon" />
              마이페이지
            </NavMenuList>
            <NavMenuList onClick={handleLogoutModal}>
              <AiFillLock className="icon" />
              로그아웃
            </NavMenuList>
          </NavMenuBox>
        ) : (
          <NavMenuBox className={isSidebar ? '' : 'NavMenuBoxClose'}>
            <NavMenuList onClick={loginModalOpen}>
              <AiFillUnlock className="icon" />
              로그인
            </NavMenuList>
            <NavMenuList onClick={signupModalOpen}>
              <FaUserPlus className="icon" />
              회원가입
            </NavMenuList>
          </NavMenuBox>
        )}
        {isLoginModal && (
          <ModlaBack onClick={handleCloseModal}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <span onClick={handleCloseModal} className="close-modal">
                &times;
              </span>
              <ModalChangBtn>
                <div
                  className={isLoginModal ? '' : 'offModalChangBtnR'}
                  onClick={loginModalOpen}
                >
                  로그인
                </div>
                <div
                  className={isSignupModal ? '' : 'offModalChangBtnL'}
                  onClick={signupModalOpen}
                >
                  회원가입
                </div>
              </ModalChangBtn>
              <LoginModal
                setIsLoginCheck={setIsLoginCheck}
                handleCloseModal={handleCloseModal}
              />
            </ModalView>
          </ModlaBack>
        )}
        {isSignupModal && (
          <ModlaBack onClick={handleCloseModal}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <span onClick={handleCloseModal} className="close-modal">
                &times;
              </span>
              <ModalChangBtn>
                <div
                  className={isLoginModal ? '' : 'offModalChangBtnR'}
                  onClick={loginModalOpen}
                >
                  로그인
                </div>
                <div
                  className={isSignupModal ? '' : 'offModalChangBtnL'}
                  onClick={signupModalOpen}
                >
                  회원가입
                </div>
              </ModalChangBtn>
              <SignupModal loginModalOpen={loginModalOpen} />
            </ModalView>
          </ModlaBack>
        )}
        {isLogoutModal && (
          <LogoutModlaBack>
            <LogoutModlaView>
              <div style={{ position: 'absolute', top: '35px' }}>
                로그아웃 하시겠습니까?
              </div>

              <LogoutModalBtn
                className="cancel"
                onClick={() => {
                  handleLogoutModal();
                }}
              >
                취소
              </LogoutModalBtn>
              <LogoutModalBtn
                onClick={() => {
                  handleLogout();
                }}
              >
                확인
              </LogoutModalBtn>
            </LogoutModlaView>
          </LogoutModlaBack>
        )}
      </NavbarBtn>
    </React.Fragment>
  );
}

export default Navbar;
