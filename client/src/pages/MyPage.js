import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import {
  OuterDiv,
  TopDiv,
  MainDiv,
  MyListOuterDiv,
  MyListTitleDiv,
  MyListIndexDiv,
  IndexTitleDiv,
  IndexDateDiv,
  IndexStateDiv,
  MyListBoxDiv,
  MyListDiv,
  ListTitleDiv,
  ListDateDiv,
  ListStateDiv,
  MyInformationOuterDiv,
  MyInformationTitleDiv,
  MyInformationBoxDiv,
  MyInformationDiv,
  InformationIndexDiv,
  InformationContentInput,
  EditNicknameInput,
  ButtonsOuterDiv,
  EditInformationButton,
  EditNicknameCompleteButton,
  EditPasswordButton,
  WithdrawalButton,
  ModalBackdrop,
  ModalView,
  ModalDiv,
  ModalSmallDiv,
  ModalIndexDiv,
  ModalInput,
  ModalMsgDiv,
  ModalButtonBoxDiv,
  CancelModalButton,
  CompleteModalButton,
  AlertModalView,
  AlertModalDiv,
  AlertModalButton,
  AlertModalButtonBoxDiv,
  CancelAlertModalButton,
  DeleteAlertModalButton,
} from '../components/MyPageComponents';
import Header from '../components/Header';
import axios from 'axios';
import { removeCookie } from '../components/Cookie';

let url = 'http://localhost:8080';

const MyPage = (props) => {
  const navigate = useNavigate();

  // 로컬 스토리지 userInfo 불러오기
  const savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
  const savedAllPostList = JSON.parse(localStorage.getItem('allPostList'));

  const [inputNickname, setInputNickname] = useState(savedUserInfo.nickname);
  const [inputCurrentPassword, setInputCurrentPassword] = useState('');
  const [inputNewPassword, setInputNewPassword] = useState('');
  const [inputNewPasswordConfirm, setInputNewPasswordConfirm] = useState('');
  const [validityCheck, setValidityCheck] = useState({
    isNewPassword: false,
    msgNewPassword: '비밀번호를 입력해주세요.',
    isNewPasswordConfirm: false,
    msgNewPasswordConfirm: '비밀번호를 재입력해주세요.',
  });
  const [passwordResponseMSG, setPasswordResponseMSG] = useState('');
  const [myPostList, setMyPostList] = useState([]);
  const [myCommentList, setMyCommentList] = useState([]);
  const [allCommentList, setAllCommentList] = useState([]);
  const [postIdList, setPostIdList] = useState([]);

  // 내가 쓴 게시물 리스트 불러오기
  useEffect(() => {
    axios({
      // url: url + `/post/${props.userInfo.user_id}`,
      url: url + '/mypage/post',
      method: 'get',
      headers: {
        // Authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        setMyPostList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 내가 쓴 신청댓글 리스트 불러오기
  useEffect(() => {
    axios({
      // url: url + `/comment/user/${props.userInfo.user_id}`,
      url: url + '/mypage/comment',
      method: 'get',
      headers: {
        // Authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log('내가 쓴 신청댓글 불러오기 완료');
        console.log(res.data.commentList);
        setMyCommentList(res.data.commentList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 전체 신청댓글 리스트 불러오기
  useEffect(() => {
    axios({
      // url: url + `/comment`,
      url: url + '/mypage/allcomment',
      method: 'get',
      headers: {
        // Authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log('전체 신청댓글 리스트 불러오기 완료');
        console.log(res.data.commentList);
        setAllCommentList(res.data.commentList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 전체 댓글 중에서 포스트 id에 해당하는 댓글 갯수
  const findCommentCount = (id) => {
    console.log(allCommentList);
    let count = 0;
    for (let i = 0; i < allCommentList.length; i++) {
      if (id === allCommentList[i].post_id) {
        count++;
      }
    }
    console.log(count);
    return count;
  };

  // 게시글 중에서 포스트 id에 해당되는 모집인원 몇명인지
  const findPostRecruitVolume = (id) => {
    for (let i = 0; i < savedAllPostList.length; i++) {
      if (savedAllPostList[i].id === id) {
        return savedAllPostList[i].recruit_volume;
      }
    }
  };

  // 닉네임 input창 입력값 변경
  const handleInputValue = (e) => {
    console.log('닉네임 Input창 입력값 변경');
    setInputNickname(e.target.value);
  };

  // 현재 비밀번호 input 입력값 변경에 따라 상태 변화
  const handleInputCurrentPassword = (e) => {
    setInputCurrentPassword(e.target.value);
  };

  // 새로운 비밀번호 input 입력값 변경에 따라 상태 변화
  const handleInputNewPassword = (e) => {
    console.log('새로운 비밀번호 입력중');
    let value = e.target.value;

    const passwordReplace =
      /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]).*$/;

    if (passwordReplace.test(value)) {
      setValidityCheck({
        ...validityCheck,
        isNewPassword: true,
        msgNewPassword: '사용 가능한 비밀번호입니다.',
      });
    } else if (value.length === 0) {
      setValidityCheck({
        ...validityCheck,
        isNewPassword: false,
        msgNewPassword: '비밀번호를 입력해주세요.',
      });
    } else {
      setValidityCheck({
        ...validityCheck,
        isNewPassword: false,
        msgNewPassword: '영문,숫자,특수문자를 혼합하여 8자 이상',
      });
    }
    setInputNewPassword(value);
  };

  // 새로운 비밀번호 확인 input 입력값 따라 상태 변화
  const handleInputNewPasswordConfirm = (e) => {
    let value = e.target.value;
    setInputNewPasswordConfirm(value);
  };

  // 비밀번호 일치성 체크
  const passwordConfirmCheck = (value) => {
    if (value.length === 0) {
      setValidityCheck({
        ...validityCheck,
        isNewPasswordConfirm: false,
        msgNewPasswordConfirm: '비밀번호를 재입력해주세요.',
      });
    } else if (
      inputNewPassword !== value ||
      inputNewPasswordConfirm !== value ||
      value.length === 0
    ) {
      setValidityCheck({
        ...validityCheck,
        isNewPasswordConfirm: false,
        msgNewPasswordConfirm: '비밀번호가 일치하지 않습니다.',
      });
    } else if (
      inputNewPassword === value &&
      inputNewPasswordConfirm === value
    ) {
      setValidityCheck({
        ...validityCheck,
        isNewPasswordConfirm: true,
        msgNewPasswordConfirm: '비밀번호가 일치합니다.',
      });
    }
  };

  // 비밀번호 입력시 마다 일치성 체크
  useEffect(() => {
    passwordConfirmCheck(inputNewPassword);
  }, [inputNewPassword]);

  useEffect(() => {
    passwordConfirmCheck(inputNewPasswordConfirm);
  }, [inputNewPasswordConfirm]);

  // 회원정보 수정 닉네임 input창 상태관리
  const [isNicknameInputOpen, setIsNicknameInputOpen] = useState(false);

  // 닉네임 수정 입력값 누락 알림 모달창 상태관리
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  // 비밀번호 변경 모달창 상태관리
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);

  // 회원탈퇴 확인 알람 모달창 상태관리
  const [isWithdrawalAlertModalOpen, setIsWithdrawalAlertModalOpen] =
    useState(false);

  // 회원정보 수정 닉네임 input창 상태 변경
  const openNicknameInputHandler = () => {
    console.log('회원정보 수정 닉네임 input창 상태 변경');
    setIsNicknameInputOpen(!isNicknameInputOpen);
  };

  // 닉네임 입력값 누락 알림 모달창 상태 변경
  const openAlertModalHandler = () => {
    console.log('닉네임 입력값 누락 알림 모달창 상태 변경');
    setIsAlertModalOpen(!isAlertModalOpen);
  };

  // 비밀번호 변경 모달창 상태 변경
  const openChangePasswordModalHandler = () => {
    console.log('비밀번호 변경 모달창 상태 변경');
    setIsChangePasswordModalOpen(!isChangePasswordModalOpen);
  };

  // 회원탈퇴 확인 알림 모달창 상태 변경
  const openWithdrawalAlertModalHandler = () => {
    console.log('회원탈퇴 확인 모달창 상태 변경');
    setIsWithdrawalAlertModalOpen(!isWithdrawalAlertModalOpen);
  };

  // 내가 쓴 게시물 제목 클릭
  const onClickTitle = (post) => {
    console.log('내가 쓴 제목 클릭');
    console.log(post);
    localStorage.setItem('currentPost', JSON.stringify(post));
    // props.setCurrentPost(post);
    navigate('/readpost');
  };

  // 내가 쓴 신청댓글 클릭
  const onClickComment = (comment) => {
    console.log('내가 쓴 신청댓글 클릭');

    axios({
      // url: url + `/post/${comment.post_id}`,
      url: url + '/mypage/commentedpost',
      method: 'post',
      headers: {
        // Authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        post_id: comment.post_id,
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log('신청 댓글의 부모 게시글 정보를 불러옴');
        console.log(res.data.commentedPost);
        localStorage.setItem(
          'currentPost',
          JSON.stringify(res.data.commentedPost)
        );
        // props.setCurrentPost(res.data.commentedPost);
        navigate('/readpost');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 닉네임 변경 PATCH 요청
  const editNicknameComplete = () => {
    console.log('닉네임 수정완료 버튼 클릭');

    if (inputNickname.length > 0) {
      axios({
        // url: url + `/users/${props.userInfo.user_id}`,
        url: url + '/mypage/nickname',
        method: 'patch',
        headers: {
          // Authorization: `Bearer ${props.accessToken}`,
          'Content-Type': 'application/json',
        },
        data: { nickname: inputNickname },
        withCredentials: true,
      })
        .then((res) => {
          //! 닉네임 수정시에도 서버에서 중복확인을 할텐데
          //! 중복된 닉네임일때는 또 알림 모달창을 띄워 줘야됨.
          console.log('닉네임 수정 완료');
          console.log(res);
          openNicknameInputHandler();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('수정될 닉네임이 입력되지 않음');
      openAlertModalHandler();
    }
  };

  // 비밀번호 변경 PATCH 요청
  const onClickChangePasswordButton = () => {
    console.log('비밀번호 변경 완료 버튼 클릭');

    axios({
      // url: url + `/users/password/${props.userInfo.user_id}`,
      url: url + '/mypage/password',
      method: 'patch',
      headers: {
        // Authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        password: inputCurrentPassword,
        new_password: inputNewPasswordConfirm,
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log('비밀번호 변경하고 응답 옴');
        console.log(res);
        openChangePasswordModalHandler();
        navigate('/mypage');
      })
      .catch((err) => {
        setPasswordResponseMSG('현재 비밀번호를 올바르게 입력해주세요.');
        console.log(err);
      });
  };

  // 회원탈퇴 DELETE 요청
  const onClickWithdrawalButton = () => {
    console.log('탈퇴확인 모달창에서 탈퇴버튼 눌림');

    axios({
      // url: url + `/users/${props.userInfo.user_id}`,
      url: url + '/mypage/users',
      method: 'delete',
      withCredentials: true,
    })
      .then((res) => {
        console.log('회원탈퇴 요청에 대한 응답이 옴');
        console.log(res);
        openWithdrawalAlertModalHandler();
        props.setIsLoginCheck(false);
        removeCookie('accessToken');
        navigate('/main');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {allCommentList.length === 0 ? null : (
        <>
          {isAlertModalOpen === true ? (
            <ModalBackdrop>
              <AlertModalView>
                <AlertModalDiv>수정할 닉네임을 입력해주세요!</AlertModalDiv>
                <AlertModalButton onClick={openAlertModalHandler}>
                  확인
                </AlertModalButton>
              </AlertModalView>
            </ModalBackdrop>
          ) : null}

          {/* {isWithdrawalAlertModalOpen === true ? (
            <ModalBackdrop>
              <AlertModalView>
                <AlertModalDiv>정말 회원탈퇴를 하시겠어요?</AlertModalDiv>
                <AlertModalButtonBoxDiv>
                  <CancelAlertModalButton
                    onClick={openWithdrawalAlertModalHandler}
                  >
                    취소
                  </CancelAlertModalButton>
                  <DeleteAlertModalButton onClick={onClickWithdrawalButton}>
                    탈퇴
                  </DeleteAlertModalButton>
                </AlertModalButtonBoxDiv>
              </AlertModalView>
            </ModalBackdrop>
          ) : null} */}

          {isChangePasswordModalOpen === true ? (
            <ModalBackdrop>
              <ModalView>
                <ModalDiv>
                  <ModalIndexDiv>현재 비밀번호</ModalIndexDiv>
                </ModalDiv>
                <ModalDiv>
                  <ModalInput
                    type="password"
                    onChange={handleInputCurrentPassword}
                    value={inputCurrentPassword}
                  ></ModalInput>
                </ModalDiv>
                <ModalSmallDiv>
                  <ModalMsgDiv className={'red'}>
                    {passwordResponseMSG}
                  </ModalMsgDiv>
                </ModalSmallDiv>
                <ModalDiv>
                  <ModalIndexDiv>새로운 비밀번호</ModalIndexDiv>
                </ModalDiv>
                <ModalDiv>
                  <ModalInput
                    type="password"
                    onChange={handleInputNewPassword}
                  ></ModalInput>
                </ModalDiv>
                <ModalSmallDiv>
                  <ModalMsgDiv
                    className={
                      validityCheck.isNewPassword
                        ? 'green'
                        : inputNewPassword.length <= 0
                        ? ''
                        : 'red'
                    }
                  >
                    {validityCheck.msgNewPassword}
                  </ModalMsgDiv>
                </ModalSmallDiv>
                <ModalDiv>
                  <ModalIndexDiv>새로운 비밀번호 확인</ModalIndexDiv>
                </ModalDiv>
                <ModalDiv>
                  <ModalInput
                    type="password"
                    onChange={handleInputNewPasswordConfirm}
                  ></ModalInput>
                </ModalDiv>
                <ModalSmallDiv>
                  <ModalMsgDiv
                    className={
                      validityCheck.isNewPasswordConfirm
                        ? 'green'
                        : inputNewPasswordConfirm.length <= 0
                        ? ''
                        : 'red'
                    }
                  >
                    {validityCheck.msgNewPasswordConfirm}
                  </ModalMsgDiv>
                </ModalSmallDiv>
                <ModalSmallDiv></ModalSmallDiv>
                <ModalSmallDiv></ModalSmallDiv>
                <ModalButtonBoxDiv>
                  <CancelModalButton onClick={openChangePasswordModalHandler}>
                    취소
                  </CancelModalButton>
                  <CompleteModalButton
                    onClick={onClickChangePasswordButton}
                    disabled={
                      !validityCheck.isNewPasswordConfirm ||
                      inputCurrentPassword.length < 8
                    }
                  >
                    완료
                  </CompleteModalButton>
                </ModalButtonBoxDiv>
                <ModalSmallDiv></ModalSmallDiv>
              </ModalView>
            </ModalBackdrop>
          ) : null}

          {isWithdrawalAlertModalOpen === true ? (
            <ModalBackdrop>
              <AlertModalView>
                <AlertModalDiv>정말 회원탈퇴를 하시겠어요?</AlertModalDiv>
                <AlertModalButtonBoxDiv>
                  <CancelAlertModalButton
                    onClick={openWithdrawalAlertModalHandler}
                  >
                    취소
                  </CancelAlertModalButton>
                  <DeleteAlertModalButton onClick={onClickWithdrawalButton}>
                    탈퇴
                  </DeleteAlertModalButton>
                </AlertModalButtonBoxDiv>
              </AlertModalView>
            </ModalBackdrop>
          ) : null}

          <Header
            setIsLoginCheck={props.setIsLoginCheck}
            isLoginCheck={props.isLoginCheck}
          />
          <OuterDiv>
            <TopDiv>마이페이지</TopDiv>
            <MainDiv>
              <MyListOuterDiv>
                <MyListTitleDiv>내 게시글 보기</MyListTitleDiv>
                <MyListIndexDiv>
                  <IndexTitleDiv>제목</IndexTitleDiv>
                  <IndexDateDiv>날짜</IndexDateDiv>
                  <IndexStateDiv>모집상태</IndexStateDiv>
                </MyListIndexDiv>
                <MyListBoxDiv>
                  {myPostList.map((post) => {
                    const stringDate = String(post.createdAt).slice(0, 10);
                    return (
                      <MyListDiv
                        key={post.id}
                        onClick={() => onClickTitle(post)}
                      >
                        <ListTitleDiv>
                          {/* <Link to="/readpost" onClick={() => onClickTitle(post)}>
                        {post.title}
                      </Link> */}
                          <div>{post.title}</div>
                        </ListTitleDiv>
                        <ListDateDiv>{stringDate}</ListDateDiv>
                        <ListStateDiv
                          className={
                            findCommentCount(post.id) + '명' ===
                            post.recruit_volume
                              ? 'red'
                              : 'blue'
                          }
                        >
                          {findCommentCount(post.id) + '명' ===
                          post.recruit_volume
                            ? '모집종료'
                            : '모집중'}
                        </ListStateDiv>
                      </MyListDiv>
                    );
                  })}
                </MyListBoxDiv>
              </MyListOuterDiv>
              <MyListOuterDiv>
                <MyListTitleDiv>내 신청글 보기</MyListTitleDiv>
                <MyListIndexDiv>
                  <IndexTitleDiv>내용</IndexTitleDiv>
                  <IndexDateDiv>날짜</IndexDateDiv>
                  <IndexStateDiv>모집상태</IndexStateDiv>
                </MyListIndexDiv>
                <MyListBoxDiv>
                  {myCommentList.map((comment) => {
                    const stringDate = String(comment.createdAt).slice(0, 10);
                    return (
                      <MyListDiv
                        key={comment.id}
                        onClick={() => onClickComment(comment)}
                      >
                        <ListTitleDiv>
                          {/* <Link
                        to="/readpost"
                        onClick={() => onClickComment(comment)}
                      >
                        {comment.comment_content}
                      </Link> */}
                          <div>{comment.comment_content}</div>
                        </ListTitleDiv>
                        <ListDateDiv>{stringDate}</ListDateDiv>
                        <ListStateDiv
                          className={
                            findCommentCount(comment.post_id) + '명' ===
                            findPostRecruitVolume(comment.post_id)
                              ? 'red'
                              : 'blue'
                          }
                        >
                          {findCommentCount(comment.post_id) + '명' ===
                          findPostRecruitVolume(comment.post_id)
                            ? '모집종료'
                            : '모집중'}
                        </ListStateDiv>
                      </MyListDiv>
                    );
                  })}
                </MyListBoxDiv>
              </MyListOuterDiv>
              <MyInformationOuterDiv>
                <MyInformationTitleDiv>회원정보</MyInformationTitleDiv>
                <MyInformationBoxDiv>
                  <MyInformationDiv>
                    <InformationIndexDiv>아이디</InformationIndexDiv>
                    <InformationContentInput
                      name="id"
                      type="text"
                      value={savedUserInfo.email}
                      readOnly
                    ></InformationContentInput>
                  </MyInformationDiv>
                  <MyInformationDiv>
                    <InformationIndexDiv>닉네임</InformationIndexDiv>
                    {isNicknameInputOpen === true ? (
                      <EditNicknameInput
                        name="nickname"
                        type="text"
                        value={inputNickname}
                        onChange={handleInputValue}
                        placeholder="6자 이하"
                        maxLength="6"
                      ></EditNicknameInput>
                    ) : (
                      <InformationContentInput
                        name="nickname"
                        type="text"
                        value={inputNickname}
                        onChange={handleInputValue}
                        readOnly
                      ></InformationContentInput>
                    )}
                  </MyInformationDiv>
                </MyInformationBoxDiv>
                <ButtonsOuterDiv>
                  {isNicknameInputOpen === true ? (
                    <EditNicknameCompleteButton onClick={editNicknameComplete}>
                      수정 완료
                    </EditNicknameCompleteButton>
                  ) : (
                    <EditInformationButton onClick={openNicknameInputHandler}>
                      회원정보 수정
                    </EditInformationButton>
                  )}
                  <EditPasswordButton onClick={openChangePasswordModalHandler}>
                    비밀번호 수정
                  </EditPasswordButton>
                  <WithdrawalButton onClick={openWithdrawalAlertModalHandler}>
                    회원탈퇴
                  </WithdrawalButton>
                </ButtonsOuterDiv>
              </MyInformationOuterDiv>
            </MainDiv>
          </OuterDiv>
        </>
      )}
    </>
  );
};

export default MyPage;
