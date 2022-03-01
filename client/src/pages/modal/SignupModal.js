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

const CheckBtn = styled.div`
  background-color: #dcdcdc;
  color: #808080;
  text-align: center;
  letter-spacing: 1px;
  line-height: 19px;
  right: 20px;
  top: 107px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 3px;
  width: 75px;
  height: 25px;
  margin-top: 14px;
  margin-right: 22px;
  box-shadow: 2px 1px 2px 1px #dadce0;
  font-size: 13px;
  cursor: pointer;
  &:active {
    box-shadow: 1px 1px 1px 0px #dadce0;
    position: relative;
    right: -1px;
    top: 1px;
  }
  &:hover {
    border: 1px solid;
    background-color: #708090;
    color: white;
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
  width: 210px;
  height: 120px;
  background-color: white;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  font-size: 15px;
  padding: 20px;
  text-align: center;
  white-space: pre-wrap;
  > div.signupMiniModalBtn {
    margin-top: 10px;
    width: 30%;
    height: 30px;
    border-radius: 3px;
    background-color: #e8f3ff;
    border: #90c2ff;
    color: #90c2ff;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px #dadce0;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

function SignupModal({ loginModalOpen }) {
  //유저정보 담을 창
  //입력 이벤트
  //유효성검사
  //메세지
  let url = 'http://localhost:8080';
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
    isEmailCheck: false,
    isNicknameCheck: false,
  });

  const handleInputEmail = (key) => (e) => {
    let { value } = e.target;

    //* ? : 하나 있거나 없거나,  * : 0개 이상 , ^ : 시작한다, + : 1개 이상, $ : 끝, {2,3} : 2글자나 3글자 사이,[] : 대괄호 안에 요소중 하나 , \ 이스케이프(탈출), . : 아무문자, i : 정규표현식 끝나는 곳에 표시, 대소문자 신경 인씀
    const emailReplace =
      /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (emailReplace.test(value)) {
      setValidityCheck({
        ...validityCheck,
        isEmailCheck: true,
        isEmail: false,
        msgEmail: '이메일 중복확인을 해주세요.',
      });
    } else if (value.length === 0) {
      setValidityCheck({
        ...validityCheck,
        isEmailCheck: false,
        isEmail: false,
        msgEmail: '이메일을 입력해주세요.',
      });
    } else {
      setValidityCheck({
        ...validityCheck,
        isEmailCheck: false,
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
        isNicknameCheck: false,
        isNickname: false,
        msgNickname: '특수문자,자음,모음,띄어쓰기를 제외해주세요.',
      });
    } else if (value.length === 0) {
      setValidityCheck({
        ...validityCheck,
        isNicknameCheck: false,
        isNickname: false,
        msgNickname: '닉네임을 6글자 이내로 입력해주세요.',
      });
    } else {
      setValidityCheck({
        ...validityCheck,
        isNicknameCheck: true,
        isNickname: false,
        msgNickname: '닉네임 중복확인을 해주세요.',
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

  const handleEmailCheck = () => {
    if (
      !validityCheck.isEmailCheck ||
      validityCheck.isEmail ||
      signupUserInfo.email.length === 0
    ) {
      return;
    } else {
      axios
        .post(
          url + '/signup/emailCheck',
          { email: signupUserInfo.email },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        )
        .then((res) => {
          setValidityCheck({
            ...validityCheck,
            isEmail: true,
            msgEmail: '사용 가능한 이메일입니다.',
          });
        })
        .catch((err) => {
          setValidityCheck({
            ...validityCheck,
            isEmail: false,
            msgEmail: '중복된 이메일입니다.',
          });
          console.log(err, '이메일 중복체크 err');
        });
    }
  };

  const handleNicknameCheck = () => {
    if (
      !validityCheck.isNicknameCheck ||
      validityCheck.isNickname ||
      signupUserInfo.nickname.length === 0
    ) {
      return;
    } else {
      axios
        .post(
          url + '/signup/nicknameCheck',
          { nickname: signupUserInfo.nickname },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        )
        .then((res) => {
          setValidityCheck({
            ...validityCheck,
            isNickname: true,
            msgNickname: '사용 가능한 닉네임입니다.',
          });
        })
        .catch((err) => {
          setValidityCheck({
            ...validityCheck,
            isNickname: false,
            msgNickname: '중복된 닉네임입니다.',
          });
          console.log(err, '닉네임중복체크 err');
        });
    }
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
        .post(url + '/signup/signup', signupUserInfo, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        })
        .then((res) => {
          setSignupMiniModal({
            open: true,
            is: true,
            msg: '회원가입에 성공하셨습니다. 로그인을 진행해주세요.',
          });
        })
        .catch((err) => console.log(err, '회원가입 err'));
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
      <div style={{ display: 'flex' }}>
        <SignupInputBox
          type="email"
          onChange={handleInputEmail('email')}
          placeholder="이메일"
          value={signupUserInfo.email}
        ></SignupInputBox>
        <CheckBtn onClick={handleEmailCheck}>중복확인</CheckBtn>
      </div>

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
      <div style={{ display: 'flex' }}>
        <SignupInputBox
          type="text"
          placeholder="닉네임"
          maxLength={6}
          onChange={handleInputNickname('nickname')}
          value={signupUserInfo.nickname}
        ></SignupInputBox>
        <CheckBtn onClick={handleNicknameCheck}>중복확인</CheckBtn>
      </div>
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
        <span onClick={handleTermsModalOpen}>[사이트 약관]</span>
        <span
          style={{ fontSize: '10px', color: '#DC143C', marginLeft: '5px' }}
          onClick={handleTermsModalOpen}
        >
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
