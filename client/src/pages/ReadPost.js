import React, { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
  } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";


export const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
`;

export const PostSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  height: 115vh;
  margin-top: 0.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  line-height: 5vh;
  border: solid 1px #4593fc;
  border-radius: 5px;
`;

export const TitleBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; 
  flex-wrap: wrap;
  width: 98%;
  height: 7%;
  margin-top: 0.7rem;
  border-bottom: solid 1px #4593fc;
`;

export const TitleDiv = styled.div`
  width: 99.5%;
  height: 50%;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const NicknameSpan = styled.span`
  width: 50%;
  height: 50%;
  padding-left: 0.2rem;
  text-align: left;
  font-size: 0.7rem;
`;

export const TimeSpan = styled.span`
  width: 50%;
  height: 50%;
  padding-right: 0.2rem;
  text-align: right;
  font-size: 0.7rem;
`;

export const ContentTextarea = styled.textarea`
  width: 98%;
  height: 19%;
  margin-top: 0.5rem;
  padding: 0.3rem;
  font-size: 1rem;
  border: 0;
  border-bottom: solid 1px #4593fc;
  resize: none;
`;

export const InformationOuterDiv = styled.div`
  display: flex;
  align-items: center;  
  width: 98%;
  height: 8%;
  margin-top: 0.5rem;
  border-bottom: solid 1px #4593fc;
`;

export const InformationBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 34%;
  height: 99%;
`;

export const InformationIndexDiv = styled.div`
  width: 75%;
  height: 45%;
  margin-bottom: 1%;
  font-size: 1rem;
  border-bottom: dotted 1px #4593fc;
`;

export const InformationDiv = styled.div`
  width: 100%;
  height: 53%;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const BankAccountOuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 98%;
  height: 8%;
  margin-top: 0.5rem;
  border-bottom: solid 1px #4593fc;
`;

export const BankAccountIndexDiv = styled.div`
  width: 100%;
  height: 45%;
  padding-left: 0.2rem;
  font-size: 1rem;
  text-align: left;
`;

export const BankAccountBoxDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55%;
`;

export const BankDiv = styled.div`
  width: 30%;
  height: 98%;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const AccountDiv = styled.div`
  width: 68%;
  height: 98%;
  font-size: 1.2rem;
  margin-left: 2%;
  font-weight: bold;
`;

export const MapBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 30%;
  margin-top: 0.5rem;
`;

export const MapIndexDiv = styled.div`
  width: 100%;
  height: 12%;
  padding-left: 0.4rem;
  font-size: 0.9rem;
  text-align: left;
`;

export const MapDiv = styled.div`
  width: 100%;
  height: 88%;
  border-top: solid 1px #4593fc;
  border-bottom: solid 1px #4593fc;
`;

export const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  height: 24%;
  margin-top: 0.5rem;
`;

export const BottomIndexDiv = styled.div`
  width: 100%;
  height: 13%;
  margin-bottom: 1%;
  padding-left: 0.2rem;
  font-size: 1rem;
  text-align: left;
`;

export const BottomTextarea = styled.textarea`
  width: 98%;
  height: 60%;
  padding: 0.3rem;
  font-size: 1rem;
  padding: 0.3rem;
  border: solid 1px #4593fc;
  resize: none;
`;

export const ApplyButton = styled.button`
  width: 98%;
  height: 20%;
  margin-top: 0.7rem;
  text-align: center;
  color: #f9fafb;
  background-color: #4593fc;
  font-size: 20px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
    font-weight: bold;
  }
`;

export const CommentSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  margin-top: 1%;
  margin-bottom: 1%;
  padding-bottom: 0.5rem;
  text-align: center;
  border: solid 1px #4593fc;
  border-radius: 5px;
`;

export const CommentIndexDiv = styled.div`
  width: 98%;
  margin-top: 1%;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: solid 1px #4593fc;

`;

export const CommentOuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 98%;
  margin-top: 1%;
`;

export const CommentBoxDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
  margin-top: 1%;
  border-bottom: dotted 1px #4593fc;
`;

export const CommentApplicantBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  margin-right: 1%;
  height: 100%;
`;

export const CommentApplicantNickDiv = styled.div`
  width: 100%;
  height: 50%;
  padding: 0.5rem 0;
  font-size: 0.9rem;
`;

export const CommentApplicantTimeDiv = styled.div`
  width: 100%;
  height: 20%;
  font-size: 0.5rem;
`;

export const CommentApplicantDeleteButton = styled.button`
  width: 40%;
  height: 24%;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  font-size: 0.5rem;
  color: #f9fafb;
  background-color: #4593fc;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    font-weight: bold;
  }
`;

export const CommentContentTextarea = styled.textarea`
  width: 74%;
  height: 100%;
  padding: 0.3rem;
  border: 0;
  resize: none;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
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
  color: #90C2FF;
  background-color: #E8F3FF;
  border: #90C2FF;
  border-radius: 10px;
  text-align: center;
  margin-left: 80%;
  cursor: pointer;
  &:hover{
    border: solid 2px #90C2FF;
  }
`;


// let url = "https://localhost:4000";

const ReadPost = (props) => {
  
  const [ commentList, setCommentList] = useState([
    {id: 1,
     nickname: "닉네임일코딩",
     content: "양념순살 1마리 같이 주문시켜주세요!",
     date: "2022.03.01.17:31"},
     {id: 2,
     nickname: "닉네임이코딩",
     content: "양념순살 2마리 같이 주문시켜주세요!",
     date: "2022.03.02.17:32"},
     {id: 3,
     nickname: "닉네임삼코딩",
     content: "양념순살 3마리 같이 주문시켜주세요!",
     date: "2022.03.03.17:33"},
     {id: 4,
     nickname: "닉네임사코딩",
     content: "양념순살 4마리 같이 주문시켜주세요!",
     date: "2022.03.04.17:34"},
     {id: 5,
     nickname: "닉네임오코딩",
     content: "양념순살 5마리 같이 주문시켜주세요!",
     date: "2022.03.05.17:35"}       
                                                  ])
                                                  
  // 가격에 , 표시 붙이기
  let stringCharge = String(props.nowPost.delivery_charge)
  let charge = `${stringCharge.slice(0, stringCharge.length -  3)},${stringCharge.slice(-3)} 원`                                                  

  // 입력창 상태관리
  const [ textareaContent, setIsTextareaContent ] = useState("");
  
  // 누락 알림 모달창 상태관리
  const [ isAlertModalOpen, setIsAlertModalOpen ] = useState(false);
  
  // 신청자 입렵값 변경에 따라 상태 변화
  const handleTextareaValue = (e) => {
    console.log("세부사항 입력중");
    setIsTextareaContent(e.target.value)
  }
  
  // 입력 누락 알림 모달창 상태 변경
  const openAlertModalHandler = () => {
    setIsAlertModalOpen(!isAlertModalOpen);
  }
  
  // 신청하기 버튼 클릭
  // 신청자 작성 내용 -> 서버로
  const onClickApplyButton = () => {
    console.log("신청하기 버튼 눌림");
    console.log(textareaContent);
    if(textareaContent.length > 0){
      axios({
        // url: url + '/comment',
        method: "post",
        headers: {
          Authorization: `Bearer ${props.accessToken}`,
          "Content-Type": "application/json"
        },
        data:{
          id: props.nowPost.id,
          comment_nickname: props.userInfo.nickname,
          comment_content: textareaContent
        },
        withCredentials: true
      })
        .then(() => {
          console.log("신청 완료")
        })  
    } else {
      openAlertModalHandler();
    }

  } 


  return (
    <>
      {isAlertModalOpen === true ?
        <ModalBackdrop>
          <AlertModalView>
            <AlertModalDiv>주문할 메뉴 및 세부사항 입력해주세요!</AlertModalDiv>
            <AlertModalButton onClick={openAlertModalHandler}>
              확인
            </AlertModalButton>
          </AlertModalView>  
        </ModalBackdrop>
      : null
      }
      <h1> 헤드 컴포넌트 자리</h1>
      <OuterDiv>
        <PostSectionDiv>
          <TitleBoxDiv>
            <TitleDiv>
              {props.nowPost.title}
            </TitleDiv>
            <NicknameSpan>
              {props.nowPost.nickname}
            </NicknameSpan>
            <TimeSpan>
              {props.nowPost.date}
            </TimeSpan>
          </TitleBoxDiv>
          <ContentTextarea
            value={props.nowPost.content}
            readOnly>
          </ContentTextarea>
          <InformationOuterDiv>
            <InformationBoxDiv>
              <InformationIndexDiv>
                메&nbsp; 뉴
              </InformationIndexDiv>
              <InformationDiv>
                {props.nowPost.menu}      
              </InformationDiv>
            </InformationBoxDiv>
            <InformationBoxDiv>
              <InformationIndexDiv>
                모 집 상 태
              </InformationIndexDiv>
              <InformationDiv>
                {commentList.length}/{props.nowPost.recruit_volume[0]} 명
              </InformationDiv>
            </InformationBoxDiv>
            <InformationBoxDiv>
              <InformationIndexDiv>
                전 체 배 달 료
              </InformationIndexDiv>
              <InformationDiv>
                {charge}      
              </InformationDiv>
            </InformationBoxDiv>
          </InformationOuterDiv>
          <BankAccountOuterDiv>
            <BankAccountIndexDiv>
              입금해주실 은행 및 계좌번호
            </BankAccountIndexDiv>
            <BankAccountBoxDiv>
              <BankDiv>
                {props.nowPost.bank_name}은행
              </BankDiv>
              <AccountDiv>
                {props.nowPost.account_number}
              </AccountDiv>
            </BankAccountBoxDiv>
          </BankAccountOuterDiv>
          <MapBoxDiv>
            <MapIndexDiv>
              배달받을 장소: {props.nowPost.address}
            </MapIndexDiv>
            <MapDiv>
              KAKAO 지도 API 예정
            </MapDiv>
          </MapBoxDiv>
          <BottomDiv>
            <BottomIndexDiv>
              원하는 메뉴 및 세부사항
            </BottomIndexDiv>
            <BottomTextarea
              placeholder="이곳에 작성한 내용은 아래 신청내역에서 확인할 수 있습니다."
              onChange={handleTextareaValue}>
            </BottomTextarea>                
              <ApplyButton onClick={onClickApplyButton}>
              신 청 하 기
              </ApplyButton>        
            </BottomDiv>
        </PostSectionDiv>
        <CommentSectionDiv>
          <CommentIndexDiv>
            신 청 내 역
          </CommentIndexDiv>
          <CommentOuterDiv>

         {/* COMMENT 댓글 불러오는 MAP 함수 */}
          {commentList.map((comment) => {
            return (
              <CommentBoxDiv key={comment.id}>
              <CommentApplicantBoxDiv>
                <CommentApplicantNickDiv>
                  {comment.nickname}
                </CommentApplicantNickDiv>
                <CommentApplicantTimeDiv>
                  {comment.date}
                </CommentApplicantTimeDiv>       
                <CommentApplicantDeleteButton>
                  삭제             
                </CommentApplicantDeleteButton>
              </CommentApplicantBoxDiv>
              <CommentContentTextarea
                readOnly
                value={comment.content}>
              </CommentContentTextarea>
            </CommentBoxDiv>
            )
          })}

          </CommentOuterDiv>   
        </CommentSectionDiv>
      </OuterDiv>
    </>
    )
}

export default ReadPost;