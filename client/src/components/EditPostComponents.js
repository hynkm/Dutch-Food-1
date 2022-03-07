import React, { useState } from 'react';
import styled from 'styled-components';

// 위쪽 Styled-Component 아래쪽 Selectbox

export const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* margin-top: 1%; */
  width: 100%;
  height: 100vh;
  background-color: #f2f4f6; ;
`;

export const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 97%;
  height: 99%;
  margin-top: 1%;
  background-color: white;
  border-radius: 5px;
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
  background-color: #f9fafb;
  border: solid 1px #90c2ff;
  border-radius: 5px;
  cursor: pointer;
`;

export const Option = styled.option`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.2rem;
  border: solid 1px #90c2ff;
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
  border: solid 1px #90c2ff;
  border-radius: 5px;
  background-color: #f9fafb;
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
  background-color: #f9fafb;
  border: solid 1px #90c2ff;
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
  border: solid 1px #90c2ff;
  border-radius: 5px;
  background-color: #f9fafb;
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
  border: solid 1px #90c2ff;
  border-radius: 5px;
  resize: none;
  background-color: #f9fafb; ;
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
  background-color: #e8f3ff;
  border: 0;
  border-radius: 10px;
  text-align: center;
  margin-left: 80%;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const MenuSelectBox = (props) => {
  const OPTIONS = [
    { name: '치킨' },
    { name: '피자' },
    { name: '한식' },
    { name: '분식' },
    { name: '카페' },
    { name: '일식' },
    { name: '중국집' },
    { name: '야식' },
  ];

  return (
    <Select value={props.value} name={props.name} onChange={props.onChange}>
      <Option value="" hidden>
        {' '}
        - 선 택 -{' '}
      </Option>
      {OPTIONS.map((option) => {
        return (
          <Option key={option.name} value={option.name}>
            {option.name}
          </Option>
        );
      })}
    </Select>
  );
};

export const SelectBoxNum = (props) => {
  const OPTIONS = [
    { name: '1명' },
    { name: '2명' },
    { name: '3명' },
    { name: '4명' },
    { name: '5명' },
  ];

  return (
    <Select value={props.value} name={props.name} onChange={props.onChange}>
      <Option value="" hidden>
        {' '}
        - 선 택 -{' '}
      </Option>
      {OPTIONS.map((option) => {
        return (
          <Option key={option.name} value={option.name}>
            {option.name}
          </Option>
        );
      })}
    </Select>
  );
};

export const BankSelectBox = (props) => {
  const OPTIONS = [
    { name: '국민' },
    { name: '신한' },
    { name: '하나' },
    { name: '우리' },
    { name: '기업' },
    { name: '농협' },
  ];

  return (
    <BankSelect value={props.value} name={props.name} onChange={props.onChange}>
      <Option value="" hidden>
        {' '}
        은행{' '}
      </Option>
      {OPTIONS.map((option) => {
        return (
          <Option key={option.name} value={option.name}>
            {option.name}
          </Option>
        );
      })}
    </BankSelect>
  );
};
