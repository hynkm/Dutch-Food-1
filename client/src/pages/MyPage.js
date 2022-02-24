import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';
import styled from 'styled-components';

export const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1%;
  width: 100%;
  height: 100vh;
`;

export const TopDiv = styled.div`
  width: 98%;
  height: 5%;
  margin-top: 1%;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 5vh;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  height: 95%;
  margin-top: 1%;
  margin-bottom: 1%;
`;

export const MyListOuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  height: 40%;
  margin-top: 1%;
  border: solid 1px #90c2ff;
  border-radius: 5px;
`;

export const MyListTitleDiv = styled.div`
  width: 98%;
  height: 7%;
  margin-top: 1%;
  margin-left: 1rem;
`;

export const MyListIndexDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 98%;
  height: 6%;
  margin-top: 1%;
  font-size: 0.7rem;
  text-align: center;
  border-bottom: solid 1px #90c2ff;
`;

export const IndexTitleDiv = styled.div`
  width: 60%;
  height: 100%;
`;

export const IndexDateDiv = styled.div`
  width: 20%;
  height: 100%;
`;

export const IndexStateDiv = styled.div`
  width: 20%;
  height: 100%;
  margin-right: 8px;
`;

// 조회할 목록이 많으면 스크롤바 형태로 표시
export const MyListBoxDiv = styled.div`
  width: 98%;
  height: 83%;
  margin-top: 1%;
  margin-bottom: 1%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    background-color: #c9e2ff;
    border-radius: 5px;
    z-index: 999;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #4593fc;
  }
`;

export const MyListDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  margin-bottom: 0.5rem;
  border-bottom: dotted 1px #4593fc;
`;

export const ListTitleDiv = styled.div`
  width: 60%;
  height: 100%;
  text-align: center;
  font-size: 0.8rem;
  padding-top: 1.2rem;
`;

export const TitleA = styled.a`
  &:link {
    text-decoration: underline;
    color: #90c2ff;
  }
`;

export const ListDateDiv = styled.div`
  width: 20%;
  height: 100%;
  text-align: center;
  font-size: 0.1rem;
  padding-top: 1.3rem;
`;

export const ListStateDiv = styled.div`
  width: 20%;
  height: 100%;
  text-align: center;
  font-size: 1rem;
  padding: 1rem;
`;

export const MyInformationOuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  height: 18%;
  margin-top: 1%;
  margin-bottom: 1%;
  border: solid 1px #90c2ff;
  border-radius: 5px;
`;

export const MyInformationTitleDiv = styled.div`
  width: 98%;
  height: 20%;
  margin-top: 1%;
  padding-left: 1%;
`;

export const MyInformationBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 98%;
  height: 50%;
  margin-top: 1%;
`;

export const MyInformationDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  margin-bottom: 1%;
  text-align: center;
`;

export const InformationIndexDiv = styled.div`
  width: 30%;
  height: 100%;
  text-align: right;
  margin-top: 1%;
  margin-right: 5%;
  margin-bottom: 1%;
`;

export const InformationContentInput = styled.input`
  width: 60%;
  height: 100%;
  color: #4593fc;
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  margin-top: 1%;
  margin-right: 5%;
  margin-bottom: 1%;
  border: 0;
`;

export const EditNicknameInput = styled.input`
  width: 60%;
  height: 100%;
  color: #4593fc;
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  margin-top: 1%;
  margin-right: 5%;
  margin-bottom: 1%;
  border: solid 2px #90c2ff;
`;

export const ButtonsOuterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 98%;
  height: 20%;
  margin-top: 1%;
  margin-bottom: 1%;
`;

export const EditInformationButton = styled.button`
  width: 30%;
  height: 100%;
  border: 0;
  border-radius: 10px;
  color: #f9fafb;
  font-size: 1rem;
  background-color: #4593fc;
  &:hover {
    font-weight: bold;
  }
`;

export const EditNicknameCompleteButton = styled.button`
  width: 30%;
  height: 100%;
  border: 0;
  border-radius: 10px;
  color: #f9fafb;
  font-size: 1rem;
  background-color: #4593fc;
  &:hover {
    font-weight: bold;
  }
`;

export const EditPasswordButton = styled.button`
  width: 30%;
  height: 100%;
  border: 0;
  border-radius: 10px;
  color: #f9fafb;
  font-size: 1rem;

  background-color: #4593fc;
  &:hover {
    font-weight: bold;
  }
`;

export const WithdrawalButton = styled.button`
  width: 30%;
  height: 100%;
  color: #f9fafb;
  font-size: 1rem;

  background-color: #ef5350;
  border: 0;
  border-radius: 10px;
  &:hover {
    font-weight: bold;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

export const AlertModalView = styled.div`
  width: 70%;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: white;
`;

export const AlertModalDiv = styled.div`
  width: 100%;
  height: 60%;
  font-size: 1rem;
  padding-top: 1.5rem;
  text-align: center;
`;

export const AlertModalButton = styled.button`
  width: 15%;
  height: 35%;
  color: #90c2ff;
  background-color: #e8f3ff;
  border: #90c2ff;
  border-radius: 10px;
  text-align: center;
  margin-left: 80%;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const AlertModalButtonBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35%;
`;

export const CancelAlertModalButton = styled.button`
  width: 15%;
  height: 100%;
  margin-right: 60%;
  color: #90c2ff;
  background-color: #e8f3ff;
  border: #90c2ff;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const DeleteAlertModalButton = styled.button`
  width: 15%;
  height: 100%;
  color: #ef9a9a;
  background-color: #ffebee;
  border: #ef9a9a;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

// let url = "https://localhost:4000";

const MyPage = (props) => {
  const navigate = useNavigate();

  const [myPostList, setMyPostList] = useState([
    {
      id: 1,
      user_id: 'kimcoding@naver.com',
      title: '1층 코딩 빌딩에서 같이 치킨 시키실 분!!',
      address: '서울시 강남구 코드스테이츠 빌딩 1층',
      menu: '치킨',
      recruit_volume: '5명',
      bank_name: '국민',
      account_number: 12345678912345,
      content:
        '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
      comment_content: '황금올리브 2마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      delivery_charge: 4000,
      date: '2022.03.16.17:31',
    },
    {
      id: 2,
      user_id: 'kimcoding@naver.com',
      title: '2층 코딩 빌딩에서 같이 치킨 시키실 분!!',
      address: '서울시 강남구 코드스테이츠 빌딩 1층',
      menu: '치킨',
      recruit_volume: '4명',
      bank_name: '국민',
      account_number: 12345678912345,
      content:
        '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
      comment_content: '황금올리브 2마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      delivery_charge: 4000,
      date: '2022.03.16.17:32',
    },
    {
      id: 3,
      user_id: 'kimcoding@naver.com',
      title: '3층 코딩 빌딩에서 같이 치킨 시키실 분!!',
      address: '서울시 강남구 코드스테이츠 빌딩 1층',
      menu: '치킨',
      recruit_volume: '4명',
      bank_name: '국민',
      account_number: 12345678912345,
      content:
        '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
      comment_content: '황금올리브 2마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      delivery_charge: 4000,
      date: '2022.03.16.17:33',
    },
    {
      id: 4,
      user_id: 'kimcoding@naver.com',
      title: '4층 코딩 빌딩에서 같이 치킨 시키실 분!!',
      address: '서울시 강남구 코드스테이츠 빌딩 1층',
      menu: '치킨',
      recruit_volume: '5명',
      bank_name: '국민',
      account_number: 12345678912345,
      content:
        '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
      comment_content: '황금올리브 2마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      delivery_charge: 4000,
      date: '2022.03.16.17:34',
    },
    {
      id: 5,
      user_id: 'kimcoding@naver.com',
      title: '5층 코딩 빌딩에서 같이 치킨 시키실 분!!',
      address: '서울시 강남구 코드스테이츠 빌딩 1층',
      menu: '치킨',
      recruit_volume: '4명',
      bank_name: '국민',
      account_number: 12345678912345,
      content:
        '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
      comment_content: '황금올리브 2마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      delivery_charge: 4000,
      date: '2022.03.16.17:35',
    },
    {
      id: 6,
      user_id: 'kimcoding@naver.com',
      title: '6층 코딩 빌딩에서 같이 치킨 시키실 분!!',
      address: '서울시 강남구 코드스테이츠 빌딩 1층',
      menu: '치킨',
      recruit_volume: '5명',
      bank_name: '국민',
      account_number: 12345678912345,
      content:
        '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
      comment_content: '황금올리브 2마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      delivery_charge: 4000,
      date: '2022.03.16.17:36',
    },
    {
      id: 7,
      user_id: 'kimcoding@naver.com',
      title: '7층 코딩 빌딩에서 같이 치킨 시키실 분!!',
      address: '서울시 강남구 코드스테이츠 빌딩 1층',
      menu: '치킨',
      recruit_volume: '4명',
      bank_name: '국민',
      account_number: 12345678912345,
      content:
        '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
      comment_content: '황금올리브 2마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      delivery_charge: 4000,
      date: '2022.03.16.17:37',
    },
    {
      id: 8,
      user_id: 'kimcoding@naver.com',
      title: '8층 코딩 빌딩에서 같이 치킨 시키실 분!!',
      address: '서울시 강남구 코드스테이츠 빌딩 1층',
      menu: '치킨',
      recruit_volume: '5명',
      bank_name: '국민',
      account_number: 12345678912345,
      content:
        '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
      comment_content: '황금올리브 2마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      delivery_charge: 4000,
      date: '2022.03.16.17:38',
    },
  ]);
  const [myCommentList, setMyCommentList] = useState([
    {
      id: 1,
      post_id: 1,
      applicant_id: 'kimcoding@naver.com',
      comment_content: '황금올리브 1마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      date: '2022.03.16.17:31',
    },
    {
      id: 2,
      post_id: 2,
      applicant_id: 'kimcoding@naver.com',
      comment_content: '황금올리브 2마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      date: '2022.03.16.17:32',
    },
    {
      id: 3,
      post_id: 3,
      applicant_id: 'kimcoding@naver.com',
      comment_content: '황금올리브 3마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      date: '2022.03.16.17:33',
    },
    {
      id: 4,
      post_id: 4,
      applicant_id: 'kimcoding@naver.com',
      comment_content: '황금올리브 4마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      date: '2022.03.16.17:34',
    },
    {
      id: 5,
      post_id: 5,
      applicant_id: 'kimcoding@naver.com',
      comment_content: '황금올리브 5마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      date: '2022.03.16.17:35',
    },
    {
      id: 6,
      post_id: 6,
      applicant_id: 'kimcoding@naver.com',
      comment_content: '황금올리브 6마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      date: '2022.03.16.17:36',
    },
    {
      id: 7,
      post_id: 7,
      applicant_id: 'kimcoding@naver.com',
      comment_content: '황금올리브 7마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      date: '2022.03.16.17:37',
    },
    {
      id: 8,
      post_id: 8,
      applicant_id: 'kimcoding@naver.com',
      comment_content: '황금올리브 8마리 같이 주문시켜주세요!',
      nickname: '닉네임김코딩',
      date: '2022.03.16.17:38',
    },
  ]);

  const [inputId, setInputId] = useState(props.userInfo.user_id);
  const [inputNickname, setInputNickname] = useState(props.userInfo.nickname);

  const handleInputValue = (e) => {
    console.log('input 입력값 변경');
    if (e.target.name === 'id') {
      setInputId(e.target.valeu);
    } else if (e.target.name === 'nickname') {
      setInputNickname(e.target.value);
    }
  };

  // 회원정보 수정 닉네임 input창 상태관리
  const [isNicknameInputOpen, setIsNicknameInputOpen] = useState(false);

  // 닉네임 수정 입력값 누락 알림 모달창 상태관리
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  // 회원탈퇴 확인 알람 모달창 상태관리
  const [isWithdrawalAlertModalOpen, SetIsWithdrawalAlertModalOpen] =
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

  // 회원탈퇴 확인 알림 모달창 상태 변경
  const openWithdrawalAlertModalHandler = () => {
    console.log('회원탈퇴 확인 모달창 상태 변경');
    SetIsWithdrawalAlertModalOpen(!isWithdrawalAlertModalOpen);
  };

  const onClickTitle = (post) => {
    console.log('내가 쓴 제목 클릭');
    props.setCurrentPost(post);
  };

  const onClickComment = (comment) => {
    console.log('내가 쓴 신청댓글 클릭');

    axios({
      // url: url + `/post/${comment.post_id}`,
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
        props.setCurrentPost(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editNicknameComplete = () => {
    console.log('닉네임 수정완료 버튼 클릭');

    if (inputNickname.length > 0) {
      axios({
        // url: url + `/users/${props.userInfo.user_id}`,
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
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('수정될 닉네임이 입력되지 않음');
      openAlertModalHandler();
    }
  };

  // 회원탈퇴 DELETE 요청
  const onClickWithdrawalButton = () => {
    console.log('탈퇴확인 모달창에서 탈퇴버튼 눌림');

    axios({
      // url: url + `/users/${props.userInfo.user_id}`,
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
                const stringDate = String(post.date).slice(5);
                return (
                  <MyListDiv>
                    <ListTitleDiv>
                      <Link to="/readpost" onClick={() => onClickTitle(post)}>
                        {post.title}
                      </Link>
                    </ListTitleDiv>
                    <ListDateDiv>{stringDate}</ListDateDiv>
                    <ListStateDiv>모집중</ListStateDiv>
                  </MyListDiv>
                );
              })}
            </MyListBoxDiv>
          </MyListOuterDiv>
          <MyListOuterDiv>
            <MyListTitleDiv>내 신청글 보기</MyListTitleDiv>
            <MyListIndexDiv>
              <IndexTitleDiv>제목</IndexTitleDiv>
              <IndexDateDiv>날짜</IndexDateDiv>
              <IndexStateDiv>모집상태</IndexStateDiv>
            </MyListIndexDiv>
            <MyListBoxDiv>
              {myCommentList.map((comment) => {
                return (
                  <MyListDiv>
                    <ListTitleDiv>
                      <Link
                        to="/readpost"
                        onClick={() => onClickComment(comment)}
                      >
                        {comment.comment_content}
                      </Link>
                    </ListTitleDiv>
                    <ListDateDiv>{comment.date}</ListDateDiv>
                    <ListStateDiv>모집중</ListStateDiv>
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
                  value={inputId}
                  onChange={handleInputValue}
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
              <EditPasswordButton>비밀번호 수정</EditPasswordButton>
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
