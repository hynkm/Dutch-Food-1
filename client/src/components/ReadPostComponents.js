import React, { useState } from 'react';
import styled from 'styled-components';

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
  border: solid 1px #90c2ff;
  border-radius: 5px;
`;

export const TitleBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 98%;
  height: 7%;
  border-bottom: solid 1px #90c2ff;
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
  border-bottom: solid 1px #90c2ff;
  resize: none;
`;

export const InformationOuterDiv = styled.div`
  display: flex;
  align-items: center;
  width: 98%;
  height: 8%;
  margin-top: 0.5rem;
  border-bottom: solid 1px #90c2ff;
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
  border-bottom: dotted 1px #90c2ff;
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
  border-bottom: solid 1px #90c2ff;
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
  border-top: solid 1px #90c2ff;
  border-bottom: solid 1px #90c2ff;
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
  border: solid 1px #90c2ff;
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
  &:hover {
    font-weight: bold;
  }
`;

export const EditDeleteBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 98%;
  height: 20%;
  margin-top: 0.7rem;
`;

export const EditButton = styled.button`
  width: 49%;
  height: 100%;
  margin-right: 2%;
  text-align: center;
  color: #f9fafb;
  background-color: #4593fc;
  font-size: 20px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const DeleteButton = styled.button`
  width: 49%;
  height: 100%;
  text-align: center;
  color: #f9fafb;
  background-color: #ef5350;
  font-size: 20px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const CommentSectionDiv = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  margin-top: 1%;
  margin-bottom: 1%;
  padding-bottom: 0.5rem;
  text-align: center;
  background-color: white;
  border: solid 1px #90c2ff;
  border-radius: 5px;
`;

export const CommentIndexDiv = styled.div`
  width: 98%;
  margin-top: 1%;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: solid 1px #90c2ff;
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
  border-bottom: dotted 1px #90c2ff;
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
  font-weight: bold;
`;

export const CommentApplicantTimeDiv = styled.div`
  width: 100%;
  height: 20%;
  font-size: 0.7rem;
`;

export const CommentApplicantDeleteButton = styled.button`
  width: 40%;
  height: 24%;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  margin-left: 60%;
  font-size: 0.7rem;
  color: black;
  background-color: white;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
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
