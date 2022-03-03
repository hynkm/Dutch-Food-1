import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import axios from 'axios';
import DaumPostcode from 'react-daum-postcode';
import {
  BodyDiv,
  OuterDiv,
  TopDiv,
  MainDiv,
  IndexBoxDiv,
  IndexDiv,
  IndexInput,
  BankAccountBoxDiv,
  AccountInput,
  ContentIndexBoxDiv,
  ContentIndexDiv,
  ContentTextarea,
  BottomDiv,
  CompleteButton,
  ModalBackdrop,
  AddressModalView,
  AlertModalView,
  AlertModalDiv,
  AlertModalButton,
  MenuSelectBox,
  SelectBoxNum,
  BankSelectBox,
} from '../components/EditPostComponents';
import Header from '../components/Header';

let url = 'https://localhost:8080';

const CreatePost = (props) => {
  const [inputTitle, setInputTitle] = useState(props.currentPost.title);
  const [inputAddress, setInputAddress] = useState(props.currentPost.address);
  const [selectMenu, setSelectMenu] = useState(props.currentPost.menu);
  const [selectNum, setSelectNum] = useState(props.currentPost.recruit_volume);
  const [inputFee, setInputFee] = useState(props.currentPost.delivery_charge);
  const [selectBank, setSelectBank] = useState(props.currentPost.bank_name);
  const [inputAccount, setInputAccount] = useState(
    props.currentPost.account_number
  );
  const [textareaContent, setTextareaContent] = useState(
    props.currentPost.content
  );

  // useEffect(() => {
  //   console.log('수정해야할 기존 입력값 불러오기');

  //   setInputTitle(props.currentPost.title);
  //   setInputAddress(props.currentPost.address);
  //   setSelectMenu(props.currentPost.menu);
  //   setSelectNum(props.currentPost.recruit_volume);
  //   setInputFee(props.currentPost.delivery_charge);
  //   setSelectBank(props.currentPost.bank_name);
  //   setInputAccount(props.currentPost.account_number);
  //   setTextareaContent(props.currentPost.content);
  // }, []);

  // 도로명주소 찾기, 누락 알림 모달창 상태관리
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  // 입력값 변경에 따라 상태 변화
  const handleInputValue = (e) => {
    console.log('input 입력값 변경');
    if (e.target.name === 'title') {
      setInputTitle(e.target.value);
    } else if (e.target.name === 'fee') {
      setInputFee(e.target.value);
    } else if (e.target.name === 'account') {
      setInputAccount(e.target.value);
    }
  };

  const handleSelectValue = (e) => {
    console.log('셀렉트 박스 변경');
    if (e.target.name === 'menu') {
      setSelectMenu(e.target.value);
    } else if (e.target.name === 'num') {
      setSelectNum(e.target.value);
    } else if (e.target.name === 'bank') {
      setSelectBank(e.target.value);
    }
  };

  const handleTextareaValue = (e) => {
    console.log('textarea 내용 변경');
    setTextareaContent(e.target.value);
  };

  // 도로명주소 찾기 모달창 상태 변경
  const openAddressModalHandler = () => {
    console.log('주소 찾기 모달창 상태 변경');
    setIsAddressModalOpen(!isAddressModalOpen);
  };

  // 입력 누락 알림 모달창 상태 변경
  const openAlertModalHandler = () => {
    console.log('입력 누락 알림 모달창 상태 변경');
    setIsAlertModalOpen(!isAlertModalOpen);
  };

  // 도로명주소 찾기에서 원하는 주소를 클릭했을때
  const onCompletePost = (data) => {
    console.log('상세 주소 클릭함');
    console.log(data.roadAddress);
    setInputAddress(data.roadAddress);
    setIsAddressModalOpen(!isAddressModalOpen);
  };

  // 작성완료 버튼 클릭
  // 게시물 정보 -> 서버로
  const postCompleteButton = () => {
    console.log('수정완료 버튼 클릭');
    console.log(
      inputTitle,
      inputAddress,
      selectMenu,
      selectNum,
      inputFee,
      selectBank,
      inputAccount,
      textareaContent
    );

    if (
      inputTitle.length > 0 &&
      inputAddress.length > 0 &&
      selectMenu.length > 0 &&
      selectNum.length > 0 &&
      String(inputFee).length > 0 &&
      selectBank.length > 0 &&
      String(inputAccount).length > 0 &&
      textareaContent.length > 0
    ) {
      axios({
        url: url + `/post/${props.currentPost.id}`,
        method: 'patch',
        headers: {
          // Authorization: `Bearer ${props.accessToken}`,

          'Content-Type': 'application/json',
        },
        data: {
          title: inputTitle,
          address: inputAddress,
          menu: selectMenu,
          delivery_charge: inputFee,
          recruit_volume: selectNum,
          bank_name: selectBank,
          accout_number: inputAccount,
          content: textareaContent,
        },
        withCredentials: true,
      })
        .then((res) => {
          console.log('게시글 수정 완료');
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      console.log('누락된 입력값이 있음');
      openAlertModalHandler();
    }
  };

  return (
    <>
      {isAddressModalOpen === true ? (
        <ModalBackdrop onClick={openAddressModalHandler}>
          <AddressModalView>
            <DaumPostcode autoClose onComplete={onCompletePost}></DaumPostcode>
          </AddressModalView>
        </ModalBackdrop>
      ) : null}
      {isAlertModalOpen === true ? (
        <ModalBackdrop>
          <AlertModalView>
            <AlertModalDiv>모든 항목을 입력해주세요!</AlertModalDiv>
            <AlertModalButton onClick={openAlertModalHandler}>
              확인
            </AlertModalButton>
          </AlertModalView>
        </ModalBackdrop>
      ) : null}
      <Header
        setIsLoginCheck={props.setIsLoginCheck}
        isLoginCheck={props.isLoginCheck}
      />
      <BodyDiv>
        <OuterDiv>
          <TopDiv>게시글 수정</TopDiv>
          <MainDiv>
            <IndexBoxDiv>
              <IndexDiv>제목</IndexDiv>
              <IndexInput
                name="title"
                type="text"
                maxLength="30"
                value={inputTitle}
                onChange={handleInputValue}
              />
            </IndexBoxDiv>
            <IndexBoxDiv>
              <IndexDiv>도로명주소</IndexDiv>
              <IndexInput
                name="address"
                type="text"
                value={inputAddress}
                onClick={openAddressModalHandler}
                onChange={openAddressModalHandler}
              />
            </IndexBoxDiv>
            <IndexBoxDiv>
              <IndexDiv>메뉴</IndexDiv>
              <MenuSelectBox
                value={selectMenu}
                name="menu"
                onChange={handleSelectValue}
              />
            </IndexBoxDiv>
            <IndexBoxDiv>
              <IndexDiv>모집 인원</IndexDiv>
              <SelectBoxNum
                value={selectNum}
                name="num"
                onChange={handleSelectValue}
              />
            </IndexBoxDiv>
            <IndexBoxDiv>
              <IndexDiv>전체 배달료</IndexDiv>
              <IndexInput
                name="fee"
                type="number"
                value={inputFee}
                onChange={handleInputValue}
              />
            </IndexBoxDiv>
            <IndexBoxDiv>
              <IndexDiv>입금받을 은행 및 계좌번호</IndexDiv>
              <BankAccountBoxDiv>
                <BankSelectBox
                  value={selectBank}
                  name="bank"
                  onChange={handleSelectValue}
                />
                <AccountInput
                  name="account"
                  type="number"
                  value={inputAccount}
                  onChange={handleInputValue}
                />
              </BankAccountBoxDiv>
            </IndexBoxDiv>
            <ContentIndexBoxDiv>
              <ContentIndexDiv>내용</ContentIndexDiv>
              <ContentTextarea
                name="content"
                type="text"
                value={textareaContent}
                onChange={handleTextareaValue}
              />
            </ContentIndexBoxDiv>
          </MainDiv>
          <BottomDiv>
            <CompleteButton onClick={postCompleteButton}>
              수 정 완 료
            </CompleteButton>
          </BottomDiv>
        </OuterDiv>
      </BodyDiv>
    </>
  );
};

export default CreatePost;
