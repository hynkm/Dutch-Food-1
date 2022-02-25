import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import TermsModal from './TermsModal';

const SignupInputBox = styled.input`
  width: 260px;
  height: 40px;
  margin-top: 3px;

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
  &::placeholder {
    color: #c0c0c0;
  }
`;

const SignupMsg = styled.div`
  margin-left: 15px;
  font-size: 12px;
  color: #5f9ea0;
  &.green {
    color: green;
  }
  &.red {
    color: red;
  }
`;

const Terms = styled.div`
  margin-top: 20px;
  margin-left: 15px;
  margin-bottom: 20px;

  > div.termsBox {
    height: 10%;
    width: 260px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    > div.termsMsg {
      margin-top: 5px;
      margin-right: 20px;
      color: black;
      font-size: 13px;

      &:hover {
        color: #0000cd;
        cursor: pointer;
      }
    }
    > input {
      margin-left: -25px;
      margin-top: 9px;
    }
  }
`;

const SignupBtn = styled.div`
  background-color: #dcdcdc;
  color: #808080;
  text-align: center;
  line-height: 50px;
  margin-left: 15px;
  position: absolute;
  bottom: 15px;
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

const SignupMiniModlaBack = styled.div`
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

const SignupMiniModlaView = styled.div`
  width: 250px;
  height: 200px;
  background-color: white;
  border-radius: 3px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  font-size: 20px;
  text-align: left;
  > div.signupMiniModalBtn {
    width: 30%;
    height: 30px;
    border-radius: 3px;
    background-color: #708090;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    color: white;
    &:hover {
      box-shadow: 1px 1px 1px 1px #dadce0;
    }
  }
`;

function SignupModal({ loginModalOpen }) {
  //유저정보 담을 창
  //입력 이벤트
  //유효성검사
  //메세지
  const [signupUserInfo, setSignupUserInfo] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });
  const [validityCheck, setValidityCheck] = useState({
    isEmail: false,
    msgEmail: '이메일을 입력해주세요.',
    isPassword: false,
    msgPassword: '비밀번호를 입력해주세요.',
    isPasswordConfirm: false,
    msgPasswordConfirm: '비밀번호를 재입력해주세요.',
    isNickname: false,
    msgNickname: '닉네임을 6글자 이내로 입력해주세요.',
  });

  const handleInputEmail = (key) => (e) => {
    let { value } = e.target;

    //* ? : 하나 있거나 없거나,  * : 0개 이상 , ^ : 시작한다, + : 1개 이상, $ : 끝, {2,3} : 2글자나 3글자 사이,[] : 대괄호 안에 요소중 하나 , \ 이스케이프(탈출), . : 아무문자, i : 정규표현식 끝나는 곳에 표시, 대소문자 신경 인씀
    const emailReplace =
      /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (emailReplace.test(value)) {
      setValidityCheck({
        ...validityCheck,
        isEmail: true,
        msgEmail: '사용 가능한 이메일 입니다.',
      });
    } else if (value.length === 0) {
      setValidityCheck({
        ...validityCheck,
        isEmail: false,
        msgEmail: '이메일을 입력해주세요.',
      });
    } else {
      setValidityCheck({
        ...validityCheck,
        isEmail: false,
        msgEmail: '올바른 이메일 형식이 아닙니다.',
      });
    }
    setSignupUserInfo({ ...signupUserInfo, [key]: value });
  };

  const handleInputPassword = (key) => (e) => {
    let { value } = e.target;

    const passwordReplace =
      /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]).*$/;

    if (passwordReplace.test(value)) {
      setValidityCheck({
        ...validityCheck,
        isPassword: true,
        msgPassword: '사용 가능한 비밀번호입니다.',
      });
    } else if (value.length === 0) {
      setValidityCheck({
        ...validityCheck,
        isPassword: false,
        msgPassword: '비밀번호를 입력해주세요.',
      });
    } else {
      setValidityCheck({
        ...validityCheck,
        isPassword: false,
        msgPassword: '영문,숫자,특수문자를 혼합하여 8글자 이상 입력해주세요.',
      });
    }
    setSignupUserInfo({ ...signupUserInfo, [key]: value });
  };

  const handleInputPasswordConfirm = (key) => (e) => {
    let { value } = e.target;
    setSignupUserInfo({ ...signupUserInfo, [key]: value });
  };

  const handleInputNickname = (key) => (e) => {
    const { value } = e.target;
    const nicknameReplace =
      /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\" | ㄱ-ㅎ | ㅏ-ㅣ]/;
    //true면 통과 안함
    if (nicknameReplace.test(value)) {
      setValidityCheck({
        ...validityCheck,
        isNickname: false,
        msgNickname: '특수문자,띄어쓰기를 제외해주세요.',
      });
    } else if (value.length === 0) {
      setValidityCheck({
        ...validityCheck,
        isNickname: false,
        msgNickname: '닉네임을 6글자 이내로 입력해주세요.',
      });
    } else {
      setValidityCheck({
        ...validityCheck,
        isNickname: true,
        msgNickname: '사용 가능한 닉네임입니다.',
      });
    }
    setSignupUserInfo({ ...signupUserInfo, [key]: value });
  };

  const passwordConfirmCheck = (value) => {
    if (value.length === 0) {
      setValidityCheck({
        ...validityCheck,
        isPasswordConfirm: false,
        msgPasswordConfirm: '비밀번호를 재입력해주세요.',
      });
    } else if (
      signupUserInfo.password !== value ||
      signupUserInfo.passwordConfirm !== value ||
      value.length === 0
    ) {
      setValidityCheck({
        ...validityCheck,
        isPasswordConfirm: false,
        msgPasswordConfirm: '비밀번호가 일치하지 않습니다.',
      });
    } else if (
      signupUserInfo.password === value &&
      signupUserInfo.passwordConfirm === value
    ) {
      setValidityCheck({
        ...validityCheck,
        isPasswordConfirm: true,
        msgPasswordConfirm: '비밀번호가 일치합니다.',
      });
    }
  };
  //* useEffect 첫 랜더링 무시
  // const useDidMountEffect = (func, deps) => {
  //   const didMount = useRef(false);

  //   useEffect(() => {
  //     if (didMount.current) func();
  //     else didMount.current = true;
  //   }, deps);
  // };

  useEffect(() => {
    passwordConfirmCheck(signupUserInfo.password);
  }, [signupUserInfo.password]);

  useEffect(() => {
    passwordConfirmCheck(signupUserInfo.passwordConfirm);
  }, [signupUserInfo.passwordConfirm]);

  const [isTermsModal, setIsTermsModal] = useState(false);
  const [isTermsCheckBox, setIsTermsCheckBox] = useState({
    terms1disabled: true,
    isTerms1: false,
    terms2disabled: true,
    isTerms2: false,
  });
  const handleTermsModalOpen = () => {
    setIsTermsModal(!isTermsModal);
  };

  const handleSignup = () => {
    if (
      !(
        validityCheck.isEmail &&
        validityCheck.isPassword &&
        validityCheck.isPasswordConfirm &&
        validityCheck.isNickname
      )
    ) {
      setSignupMiniModal({
        open: true,
        is: false,
        msg: '입력창을 확인해주세요.',
      });
    } else if (!(isTermsCheckBox.isTerms1 && isTermsCheckBox.isTerms2)) {
      setSignupMiniModal({
        open: true,
        is: false,
        msg: '이용약관 항목을 체크해주세요.',
      });
    } else {
      axios
        .post('http://localhost:8080/', signupUserInfo, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }) //헤더 추가하기
        .then((res) => {
          setSignupMiniModal({
            open: true,
            is: true,
            msg: '회원가입에 성공하셨습니다. 로그인을 진행해주세요.',
          });
        })
        .catch(
          (err) =>
            //중복체크 미통과시 확인하라는 모달창
            // 1. 이메일 2. 닉네임
            console.log(err, '회원가입 err'),
          setSignupMiniModal({
            open: true,
            is: false,
            msg: '이메일 아이디 중복',
          })
          // 이메일, 닉네임 중복시 유효성검사 메세지에 중복이라는 문구 or 모달창에 문구
        );
    }
  };
  const [signupMiniModal, setSignupMiniModal] = useState({
    open: false,
    is: false,
    msg: '',
  });

  const handleSignupMiniModalBtnClick = () => {
    if (!signupMiniModal.is) {
      setSignupMiniModal({ open: false });
    } else if (signupMiniModal.is) {
      setSignupMiniModal({ open: false });
      loginModalOpen();
    }
  };

  return (
    <div>
      <SignupInputBox
        type="email"
        onChange={handleInputEmail('email')}
        placeholder="이메일"
        value={signupUserInfo.email}
      ></SignupInputBox>
      <SignupMsg
        className={
          validityCheck.isEmail
            ? 'green'
            : signupUserInfo.email.length <= 0
            ? ''
            : 'red'
        }
      >
        {validityCheck.msgEmail}
      </SignupMsg>
      <SignupInputBox
        type="password"
        placeholder="비밀번호"
        onChange={handleInputPassword('password')}
        value={signupUserInfo.password}
      ></SignupInputBox>
      <SignupMsg
        className={
          validityCheck.isPassword
            ? 'green'
            : signupUserInfo.password.length <= 0
            ? ''
            : 'red'
        }
      >
        {validityCheck.msgPassword}
      </SignupMsg>
      <SignupInputBox
        type="password"
        placeholder="비밀번호 확인"
        onChange={handleInputPasswordConfirm('passwordConfirm')}
        value={signupUserInfo.passwordConfirm}
      ></SignupInputBox>
      <SignupMsg
        className={
          validityCheck.isPasswordConfirm
            ? 'green'
            : signupUserInfo.passwordConfirm.length <= 0
            ? ''
            : 'red'
        }
      >
        {validityCheck.msgPasswordConfirm}
      </SignupMsg>
      <SignupInputBox
        type="text"
        placeholder="닉네임"
        maxLength={6}
        onChange={handleInputNickname('nickname')}
        value={signupUserInfo.nickname}
      ></SignupInputBox>
      <SignupMsg
        className={
          validityCheck.isNickname
            ? 'green'
            : signupUserInfo.nickname.length <= 0
            ? ''
            : 'red'
        }
      >
        {validityCheck.msgNickname}
      </SignupMsg>
      <Terms>
        [사이트 약관]
        <span style={{ fontSize: '10px', color: '#DC143C', marginLeft: '5px' }}>
          약관을 클릭하여 읽어보신 후 동의해주세요.
        </span>
        <div className="termsBox">
          <div className="termsMsg" onClick={handleTermsModalOpen}>
            이용약관(필수)
          </div>
          <input
            type="checkbox"
            disabled={isTermsCheckBox.terms1disabled}
            checked={isTermsCheckBox.isTerms1}
          />
          <div className="termsMsg" onClick={handleTermsModalOpen}>
            개인정보수집(필수)
          </div>
          <input
            type="checkbox"
            disabled={isTermsCheckBox.terms2disabled}
            checked={isTermsCheckBox.isTerms2}
          />
        </div>
      </Terms>
      <div>
        <SignupBtn onClick={handleSignup}>회원가입</SignupBtn>
      </div>
      {isTermsModal && (
        <TermsModal
          handleTermsModalOpen={handleTermsModalOpen}
          isTermsCheckBox={isTermsCheckBox}
          setIsTermsCheckBox={setIsTermsCheckBox}
        />
      )}
      {signupMiniModal.open && (
        <SignupMiniModlaBack>
          <SignupMiniModlaView>
            {signupMiniModal.msg}
            <div
              className="signupMiniModalBtn"
              onClick={handleSignupMiniModalBtnClick}
            >
              확인
            </div>
          </SignupMiniModlaView>
        </SignupMiniModlaBack>
      )}
    </div>
  );
}

export default SignupModal;
