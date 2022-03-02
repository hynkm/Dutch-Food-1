import React, { useState } from 'react';
import styled from 'styled-components';

// 전체화면 100vh로 감싸주는 div
export const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const MapDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const BoardOuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 33vh;
  position: absolute;
  bottom: 0;
  /* opacity: 0.7; */
  background-color: rgb(255, 255, 255, 0.85);
  z-index: 100;
  transition: 0.5s;
  cursor: pointer;
  &.open {
  }
  &.close {
    height: 5vh;
  }
`;

export const BoardTopDiv = styled.div`
  width: 100%;
  height: 10%;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.1rem;
  color: #f9fafb;
  background-color: #4593fc;
  /* transition: 3s; */
  &:hover {
    background-color: rgba(0, 29, 54, 0.31);
  }
  &.open {
  }
  &.close {
    height: 100%;
    line-height: 5vh;
    font-size: 1.3rem;
  }
  > svg.icon {
    width: 10%;
    height: 9%;
    padding: 0;
    margin: 0;
    position: absolute;
    left: 1%;
  }
`;

export const BoardMainDiv = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  position: absolute;
  bottom: 0;
  /* transition: 3s; */
  word-break: keep-all;

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
    background-color: #f2f4f6;
    z-index: 999;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #4593fc;
  }
  &.open {
  }
  &.close {
    height: 0;
  }
`;

export const PostBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 33.333%;
  border-bottom: dotted 1px black;
  &:hover {
    background-color: rgba(0, 27, 55, 0.1);
  }
`;

export const PostMenuImgDiv = styled.div`
  width: 30%;
  height: 100%;
  padding: 2% 5%;
`;

export const MenuImg = styled.img`
  width: 100%;
  height: 100%;
  padding: 5%;
  /* border: solid 1px black; */
  border-radius: 10px;
`;

export const PostContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 68%;
  height: 100%;
  margin-left: 2%;
`;

export const PostTitleDiv = styled.div`
  width: 100%;
  height: 40%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const PostInformationDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  vertical-align: center;
  width: 100%;
  height: 30%;
`;

export const PostChargeDiv = styled.div`
  width: 50%;
  height: 100%;
  font-size: 0.7rem;
  padding: 0.2rem 0rem;
`;

export const PostVolumeDiv = styled.div`
  width: 50%;
  height: 100%;
  font-size: 0.7rem;
  padding: 0.2rem 0rem;
`;

export const PostDateDiv = styled.div`
  width: 100%;
  height: 30%;
  font-size: 0.7rem;
  padding: 0.2rem 0rem;
`;
