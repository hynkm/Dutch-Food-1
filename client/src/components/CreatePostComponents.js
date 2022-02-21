import React, { useState } from "react";
import styled from "styled-components";


 // 위쪽 Styled-Component 아래쪽 Selectbox


export const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
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
  width: 98%;
  height: 88%;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Select = styled.select`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.2rem;
  background-color: white;
  border: solid 1px #4593fc;
  border-radius: 5px;
  cursor: pointer;
`;

export const Option = styled.option`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.2rem;
  border: solid 1px #4593fc;
  border-radius: 5px;
  cursor: pointer;
`;

export const IndexBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  height: 10%;
  margin: 1%;
`;

export const IndexDiv = styled.div`
  width: 100%;
  height: 35%;
  padding-left: 0.2rem;
  font: 16px;
`;

export const IndexInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  text-align: center;
  border: solid 1px #4593fc;
  border-radius: 5px;
  ::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`; 

export const BankAccountBoxDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const BankSelect = styled.select`
  width: 20%;
  height: 100%;
  text-align: center;
  font-size: 1.2rem;
  background-color: white;
  border: solid 1px #4593fc;
  border-radius: 5px;
  cursor: pointer;
`;

export const AccountInput = styled.input`
  width: 79%;
  height: 100%;
  font-size: 1.2rem;
  text-align: center;
  margin-left: 1%;
  margin-top: 0;
  border: solid 1px #4593fc;
  border-radius: 5px;
  ::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;

export const ContentIndexBoxDiv = styled.div`
  width: 98%;
  height: 35%;
  margin: 1%;
`;

export const ContentIndexDiv = styled.div`
  width: 100%;
  height: 9%;
  padding-left: 0.2rem;
  font: 16px;
`;

export const ContentTextarea = styled.textarea`
  width: 100%;
  height: 91%;
  padding: 0.5rem 0.5rem;
  font-size: 1.1rem;
  border: solid 1px #4593fc;
  border-radius: 5px;
  resize: none;

`;

export const BottomDiv = styled.div`
  width: 98%;
  height: 5%;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 1%;
  margin-bottom: 1%;
`;

export const CompleteButton = styled.button`
  width: 98.3%;
  height: 100%;
  text-align: center;
  background-color: #4593fc;
  color: #f9fafb;
  font-size: 20px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
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
  background-color: rgba(0,0,0,0.4);
  display: grid;
  place-items: center;
`;

export const AddressModalView = styled.div`
  width: 95%;
  height: 90%;
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
  color: #4593fc;
  background-color: #E8F3FF;
  border: #4593fc;
  border-radius: 10px;
  text-align: center;
  margin-left: 80%;
  cursor: pointer;
  &:hover{
    border: solid 1px #4593fc;
  }
`;

export const MenuSelectBox = (props) => {
    return (
      <Select name={props.name} onChange={props.onChange}>
        <Option value=""> - 선 택 - </Option>
        <Option key="치킨" value="치킨">
          치킨
        </Option>
        <Option key="피자" value="피자">
          피자
        </Option >
        <Option key="한식" value="한식">
          한식
        </Option>
        <Option key="분식" value="분식">
          분식
        </Option>
        <Option key="카페" value="카페">
          카페
        </Option>
        <Option key="일식" value="일식">
          일식
        </Option>
        <Option key="중국집" value="중국집">
          중국집
        </Option>
        <Option key="야식" value="야식">
          야식
        </Option>
      </Select> 
    )
  }
  
  export const SelectBoxNum = (props) => {
    return (
      <Select name={props.name} onChange={props.onChange}>
        <Option value=""> - 선 택 - </Option>
        <Option key="1명" value="1명">
          1명
        </Option>
        <Option key="2명" value="2명">
          2명
        </Option>
        <Option key="3명" value="3명">
          3명
        </Option>
        <Option key="4명" value="4명">
          4명
        </Option>
        <Option key="5명" value="5명">
          5명
        </Option>
      </Select> 
    )
  }

  export const BankSelectBox = (props) => {
    return (
      <BankSelect name={props.name} onChange={props.onChange}>
        <Option value=""> 은행 </Option>
        <Option key="국민" value="국민">
          국민
        </Option>
        <Option key="신한" value="신한">
          신한
        </Option>
        <Option key="하나" value="하나">
          하나
        </Option>
        <Option key="우리" value="우리">
          우리
        </Option>
        <Option key="기업" value="기업">
          기업
        </Option>
        <Option key="농협" value="농협">
          농협
        </Option>
      </BankSelect> 
    )
  }