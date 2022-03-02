import styled from 'styled-components';

export const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 1%; */
  width: 100%;
  height: 100vh;
  background-color: #f2f4f6; ;
`;

export const TopDiv = styled.div`
  width: 96.05%;
  height: 4%;
  margin-top: 1%;
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 5vh;
  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  height: 95%;
  /* margin-top: 1%; */
  margin-bottom: 1%;
`;

export const MyListOuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  height: 40%;
  /* margin-top: 1%; */
  background-color: white;
  /* border: solid 1px #90c2ff; */
  border-bottom: 5px;
  margin-bottom: 7px;
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
    background-color: #f2f4f6;
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
  padding-top: 1rem;
  &.blue {
    color: #3182f6;
  }
  &.red {
    color: red;
  }
`;

export const MyInformationOuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  height: 18%;
  margin-top: 1%;
  margin-bottom: 1%;
  background-color: white;
  /* border: solid 1px #90c2ff; */
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
  background-color: #f2f4f6;
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

export const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 35%;
  border-radius: 10px;
  background-color: white;
`;

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 1rem;
  text-align: center;
`;

export const ModalSmallDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 10%;
  font-size: 1rem;
  text-align: center;
`;

export const ModalIndexDiv = styled.div`
  width: 80%;
  height: 100%;
  font-size: 1rem;
  font-weight: bold;
  padding-top: 0.4rem;
  text-align: center;
`;

export const ModalInput = styled.input`
  width: 80%;
  height: 100%;
  font-size: 1rem;
  padding: 0.3rem;
  text-align: center;
  border: solid 1px #90c2ff;
`;

export const ModalMsgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100%;
  font-size: 12px;
  text-align: center;
  color: #90c2ff;
  &.green {
    color: green;
  }
  &.red {
    color: red;
  }
`;

export const ModalButtonBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
`;

export const CancelModalButton = styled.button`
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

export const CompleteModalButton = styled.button`
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
