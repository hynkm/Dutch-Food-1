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

let url = 'https://localhost:3002';

const MyPage = (props) => {
  const navigate = useNavigate();

  const [inputNickname, setInputNickname] = useState(props.userInfo.nickname);
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
  const [myPostList, setMyPostList] = useState([
    // {
    //   id: 1,
    //   user_id: 'kimcoding@naver.com',
    //   title: '1층 코딩 빌딩에서 같이 치킨 시키실 분!!',
    //   address: '서울시 강남구 코드스테이츠 빌딩 1층',
    //   menu: '치킨',
    //   delivery_charge: 4000,
    //   recruit_volume: '5명',
    //   bank_name: '국민',
    //   account_number: 12345678912345,
    //   content:
    //     '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
    //   created_at: '2022-03-16 17:31',
    // },
    // {
    //   id: 2,
    //   user_id: 'kimcoding@naver.com',
    //   title: '2층 코딩 빌딩에서 같이 치킨 시키실 분!!',
    //   address: '서울시 강남구 코드스테이츠 빌딩 1층',
    //   menu: '치킨',
    //   delivery_charge: 4000,
    //   recruit_volume: '4명',
    //   bank_name: '국민',
    //   account_number: 12345678912345,
    //   content:
    //     '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
    //   created_at: '2022-03-16 17:32',
    // },
    // {
    //   id: 3,
    //   user_id: 'kimcoding@naver.com',
    //   title: '3층 코딩 빌딩에서 같이 치킨 시키실 분!!',
    //   address: '서울시 강남구 코드스테이츠 빌딩 1층',
    //   menu: '치킨',
    //   delivery_charge: 4000,
    //   recruit_volume: '4명',
    //   bank_name: '국민',
    //   account_number: 12345678912345,
    //   content:
    //     '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
    //   created_at: '2022-03-16 17:33',
    // },
    // {
    //   id: 4,
    //   user_id: 'kimcoding@naver.com',
    //   title: '4층 코딩 빌딩에서 같이 치킨 시키실 분!!',
    //   address: '서울시 강남구 코드스테이츠 빌딩 1층',
    //   menu: '치킨',
    //   delivery_charge: 4000,
    //   recruit_volume: '5명',
    //   bank_name: '국민',
    //   account_number: 12345678912345,
    //   content:
    //     '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
    //   created_at: '2022-03-16 17:34',
    // },
    // {
    //   id: 5,
    //   user_id: 'kimcoding@naver.com',
    //   title: '5층 코딩 빌딩에서 같이 치킨 시키실 분!!',
    //   address: '서울시 강남구 코드스테이츠 빌딩 1층',
    //   menu: '치킨',
    //   delivery_charge: 4000,
    //   recruit_volume: '4명',
    //   bank_name: '국민',
    //   account_number: 12345678912345,
    //   content:
    //     '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
    //   created_at: '2022-03-16 17:35',
    // },
    // {
    //   id: 6,
    //   user_id: 'kimcoding@naver.com',
    //   title: '6층 코딩 빌딩에서 같이 치킨 시키실 분!!',
    //   address: '서울시 강남구 코드스테이츠 빌딩 1층',
    //   menu: '치킨',
    //   delivery_charge: 4000,
    //   recruit_volume: '5명',
    //   bank_name: '국민',
    //   account_number: 12345678912345,
    //   content:
    //     '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
    //   created_at: '2022-03-16 17:36',
    // },
    // {
    //   id: 7,
    //   user_id: 'kimcoding@naver.com',
    //   title: '7층 코딩 빌딩에서 같이 치킨 시키실 분!!',
    //   address: '서울시 강남구 코드스테이츠 빌딩 1층',
    //   menu: '치킨',
    //   delivery_charge: 4000,
    //   recruit_volume: '4명',
    //   bank_name: '국민',
    //   account_number: 12345678912345,
    //   content:
    //     '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
    //   created_at: '2022-03-16 17:37',
    // },
    // {
    //   id: 8,
    //   user_id: 'kimcoding@naver.com',
    //   title: '8층 코딩 빌딩에서 같이 치킨 시키실 분!!',
    //   address: '서울시 강남구 코드스테이츠 빌딩 1층',
    //   menu: '치킨',
    //   delivery_charge: 4000,
    //   recruit_volume: '5명',
    //   bank_name: '국민',
    //   account_number: 12345678912345,
    //   content:
    //     '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
    //   created_at: '2022-03-16 17:38',
    // },
  ]);

  const [myCommentList, setMyCommentList] = useState([
    // {
    //   id: 1,
    //   post_id: 1,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 1마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:31',
    // },
    // {
    //   id: 2,
    //   post_id: 2,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 2마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:32',
    // },
    // {
    //   id: 3,
    //   post_id: 3,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 3마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:33',
    // },
    // {
    //   id: 4,
    //   post_id: 4,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 4마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:34',
    // },
    // {
    //   id: 5,
    //   post_id: 5,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 5마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:35',
    // },
    // {
    //   id: 6,
    //   post_id: 6,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 6마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:36',
    // },
    // {
    //   id: 7,
    //   post_id: 7,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 7마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:37',
    // },
    // {
    //   id: 8,
    //   post_id: 8,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 8마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:38',
    // },
  ]);

  const [allCommentList, setAllCommentList] = useState([
    // {
    //   id: 1,
    //   post_id: 1,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 1마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:31',
    // },
    // {
    //   id: 2,
    //   post_id: 1,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 2마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:32',
    // },
    // {
    //   id: 3,
    //   post_id: 3,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 3마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:33',
    // },
    // {
    //   id: 4,
    //   post_id: 4,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 4마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:34',
    // },
    // {
    //   id: 5,
    //   post_id: 5,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 5마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:35',
    // },
    // {
    //   id: 6,
    //   post_id: 6,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 6마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:36',
    // },
    // {
    //   id: 7,
    //   post_id: 7,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 7마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:37',
    // },
    // {
    //   id: 8,
    //   post_id: 8,
    //   applicant_id: 'kimcoding@naver.com',
    //   comment_content: '황금올리브 8마리 같이 주문시켜주세요!',
    //   nickname: '닉네임김코딩',
    //   created_at: '2022-03-16 17:38',
    // },
  ]);
  const [postIdList, setPostIdList] = useState([]);

  // 내가 쓴 게시물 리스트 불러오기
  useEffect(() => {
    console.log('내가 쓴 게시물과 신청댓글을 불러옵니다.');

    axios({
      url: url + `/post/${props.userInfo.user_id}`,
      method: 'get',
      headers: {
        // Authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log('내가 쓴 게시물 불러오기 완료');
        console.log(res);
        setMyPostList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 내가 쓴 신청댓글 리스트 불러오기
  useEffect(() => {
    axios({
      // url: url + `/comment/user/${props.userInfo.user_id}`,
      method: 'get',
      headers: {
        // Authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log('내가 쓴 신청댓글 불러오기 완료');
        console.log(res);
        setMyCommentList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 전체 신청댓글 리스트 불러오기
  useEffect(() => {
    axios({
      url: url + `/comment`,
      method: 'get',
      headers: {
        // Authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log('전체 신청댓글 리스트 불러오기 완료');
        console.log(res);
        setAllCommentList(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('확인');
    for (let i = 0; i < allCommentList.length; i++) {
      console.log(allCommentList[i].post_id);
      postIdList.push(allCommentList[i].post_id);
      console.log(postIdList);
    }
  }, []);

  // 전체 댓글 중에서 포스트 id에 해당하는 댓글 갯수
  const findCommentCount = (id) => {
    let count = 0;
    for (let i = 0; i < postIdList.length; i++) {
      if (id === postIdList[i]) {
        count++;
      }
    }
    return count;
  };

  // 게시글 중에서 포스트 id에 해당되는 모집인원 몇명인지
  const findPostRecruitVolume = (id) => {
    for (let i = 0; i < props.allPostList.length; i++) {
      if (props.allPostList[i].id === id) {
        return props.allPostList[i].recruit_volume;
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
    props.setCurrentPost(post);
  };

  // 내가 쓴 신청댓글 클릭
  const onClickComment = (comment) => {
    console.log('내가 쓴 신청댓글 클릭');

    axios({
      url: url + `/post/${comment.post_id}`,
      method: 'get',
      headers: {
        // Authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log('신청 댓글의 부모 게시글 정보를 불러옴');
        console.log(res);
        // props.setCurrentPost(res);
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
        url: url + `/users/${props.userInfo.user_id}`,
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
      url: url + `/users/password/${props.userInfo.user_id}`,
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
        console.log('변경 하고 응답옴');
        console.log(res);
        if (res === 'no') {
          setPasswordResponseMSG('현재 비밀번호를 올바르게 입력해주세요.');
        } else {
          openChangePasswordModalHandler();
          navigate('/mypage');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 회원탈퇴 DELETE 요청
  const onClickWithdrawalButton = () => {
    console.log('탈퇴확인 모달창에서 탈퇴버튼 눌림');

    axios({
      url: url + `/users/${props.userInfo.user_id}`,
      method: 'delete',
      withCredentials: true,
    })
      .then((res) => {
        console.log('회원탈퇴 요청에 대한 응답이 옴');
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
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
      {isWithdrawalAlertModalOpen === true ? (
        <ModalBackdrop>
          <AlertModalView>
            <AlertModalDiv>정말 회원탈퇴를 하시겠어요?</AlertModalDiv>
            <AlertModalButtonBoxDiv>
              <CancelAlertModalButton onClick={openWithdrawalAlertModalHandler}>
                취소
              </CancelAlertModalButton>
              <DeleteAlertModalButton onClick={onClickWithdrawalButton}>
                탈퇴
              </DeleteAlertModalButton>
            </AlertModalButtonBoxDiv>
          </AlertModalView>
        </ModalBackdrop>
      ) : null}

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
              <ModalMsgDiv className={'red'}>{passwordResponseMSG}</ModalMsgDiv>
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
              <CancelAlertModalButton onClick={openWithdrawalAlertModalHandler}>
                취소
              </CancelAlertModalButton>
              <DeleteAlertModalButton onClick={onClickWithdrawalButton}>
                탈퇴
              </DeleteAlertModalButton>
            </AlertModalButtonBoxDiv>
          </AlertModalView>
        </ModalBackdrop>
      ) : null}

      <Header />
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
                const stringDate = String(post.created_at).slice(5);
                return (
                  <MyListDiv key={post.id}>
                    <ListTitleDiv>
                      <Link to="/readpost" onClick={() => onClickTitle(post)}>
                        {post.title}
                      </Link>
                    </ListTitleDiv>
                    <ListDateDiv>{stringDate}</ListDateDiv>
                    <ListStateDiv
                      className={
                        findCommentCount(post.id) + '명' === post.recruit_volume
                          ? 'red'
                          : 'blue'
                      }
                    >
                      {findCommentCount(post.id) + '명' === post.recruit_volume
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
                const stringDate = String(comment.created_at).slice(5);
                return (
                  <MyListDiv key={comment.id}>
                    <ListTitleDiv>
                      <Link
                        to="/readpost"
                        onClick={() => onClickComment(comment)}
                      >
                        {comment.comment_content}
                      </Link>
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
                  value={props.userInfo.user_id}
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
  );
};

export default MyPage;
