import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import {
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
} from '../components/CreatePostComponents';
import Header from '../components/Header';

// let url = "https://localhost:4000";

const CreatePost = (props) => {
  // 입력창 상태관리
  const [inputTitle, setInputTitle] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const [selectMenu, setSelectMenu] = useState('');
  const [selectNum, setSelectNum] = useState('');
  const [inputFee, setInputFee] = useState('');
  const [selectBank, setSelectBank] = useState('');
  const [inputAccount, setInputAccount] = useState('');
  const [textareaContent, setTextareaContent] = useState('');

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
    console.log('상세주소 클릭함');
    console.log(data.roadAddress);

    setInputAddress(data.roadAddress);
    setIsAddressModalOpen(!isAddressModalOpen);
  };

  // 작성완료 버튼 클릭
  // 게시물 정보 -> 서버로
  const postCompleteButton = () => {
    console.log('작성완료 버튼 클릭');
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
        // url: url + '/post',
        method: 'post',
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
        .then(() => {
          console.log('게시글 작성 완료');
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
      <OuterDiv>
        <TopDiv>게시글 작성</TopDiv>
        <MainDiv>
          <IndexBoxDiv>
            <IndexDiv>제목</IndexDiv>
            <IndexInput
              name="title"
              type="text"
              maxLength="22"
              placeholder="간단하게 작성해주세요."
              onChange={handleInputValue}
            />
          </IndexBoxDiv>
          <IndexBoxDiv>
            <IndexDiv>도로명주소</IndexDiv>
            <IndexInput
              name="address"
              type="text"
              placeholder="클릭 후 도로명주소 찾기"
              value={inputAddress}
              onClick={openAddressModalHandler}
              onChange={openAddressModalHandler}
            />
          </IndexBoxDiv>
          <IndexBoxDiv>
            <IndexDiv>메뉴</IndexDiv>
            <MenuSelectBox name="menu" onChange={handleSelectValue} />
          </IndexBoxDiv>
          <IndexBoxDiv>
            <IndexDiv>모집 인원</IndexDiv>
            <SelectBoxNum name="num" onChange={handleSelectValue} />
          </IndexBoxDiv>
          <IndexBoxDiv>
            <IndexDiv>전체 배달료</IndexDiv>
            <IndexInput
              name="fee"
              type="number"
              placeholder="숫자로만 입력해주세요. 예) 4000"
              onChange={handleInputValue}
            />
          </IndexBoxDiv>
          <IndexBoxDiv>
            <IndexDiv>입금받을 은행 및 계좌번호</IndexDiv>
            <BankAccountBoxDiv>
              <BankSelectBox name="bank" onChange={handleSelectValue} />
              <AccountInput
                name="account"
                type="number"
                placeholder="숫자로만 입력 예) 3020429020091"
                onChange={handleInputValue}
              />
            </BankAccountBoxDiv>
          </IndexBoxDiv>
          <ContentIndexBoxDiv>
            <ContentIndexDiv>내용</ContentIndexDiv>
            <ContentTextarea
              name="content"
              type="text"
              placeholder="세부사항 및 브랜드 등의 정보를 적어주세요."
              onChange={handleTextareaValue}
            />
          </ContentIndexBoxDiv>
        </MainDiv>
        <BottomDiv>
          <CompleteButton onClick={postCompleteButton}>
            {' '}
            작 성 완 료{' '}
          </CompleteButton>
        </BottomDiv>
      </OuterDiv>
    </>
  );
};

export default CreatePost;
