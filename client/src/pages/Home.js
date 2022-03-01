import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { HiChevronDoubleDown } from 'react-icons/hi';
// import 서울지도 from '../assets/homeImg/서울지도.jpg';
import PImg1 from '../assets/homeImg/포장1.jpeg';
import PImg2 from '../assets/homeImg/포장2.jpeg';
import PImg3 from '../assets/homeImg/포장3.jpeg';
import PImg4 from '../assets/homeImg/포장4.jpeg';
import PImg5 from '../assets/homeImg/포장5.jpeg';
import PImg6 from '../assets/homeImg/포장6.jpeg';
import PImg7 from '../assets/homeImg/포장7.jpeg';
import PImg8 from '../assets/homeImg/포장8.jpeg';
import PImg9 from '../assets/homeImg/포장9.jpeg';
import HomeImg from '../assets/img/img1.png';

const GlobalStyle = createGlobalStyle`
  h1{
    margin: 0px;
    font-family: 'IBM Plex Sans KR', sans-serif;
  }

   html body {
    height: 100vh;
    width: 100vw;
    margin: 0px;
    padding: 0px;
    font-family: 'IBM Plex Sans KR', sans-serif;
  }`;

const HomeBack = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #48d1cc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StartBtn = styled.div`
  cursor: pointer;
  font-size: 22px;
  letter-spacing: 5px;
  text-align: center;
  line-height: 50px;
  width: 250px;
  height: 50px;
  color: white;
  border-radius: 10px;
  background-color: #ff5e5e;
  box-shadow: 2px 3px 3px 2px #dadce0;
`;

const moveArrow = keyframes`
     0% {
         bottom: 20px;
     }
     100%{
         bottom: 0px;
        
     }
`;
const IconArrow = styled.div`
  position: absolute;
  bottom: 0px;
  align-items: center;
  > .icon {
    position: absolute;
    bottom: 0px;
    left: -16px;
    color: rgba(0, 0, 0, 0.5);
    transform: scale(1);
    animation: ${moveArrow} 2s 5s infinite;
  }
`;
// transform: scale(1);
// left: 100px;
// top: 300px;
// animation: ${move1} 4s 1s infinite;

/*
const Map = styled.div`
  margin-top: 200px;
  width: 100%;
  height: 80%;
`;
const MapImg = styled.img`
  width: 100%;
  height: 40%;
`;
 const move1 = keyframes`
 	단계 별로 변화를 주는 코드
     90% {
         opacity: 1;
     }
     100%{
     	top: 250px;
         left: 260px;
         width: 1%;
         height: 1%;
         opacity: 0.5;
     }
 `;
 const move2 = keyframes`
 	단계 별로 변화를 주는 코드
     70% {
         opacity: 0.8;
     }
     100%{
     	top: 220px;
         left: 100px;
         width: 1%;
         height: 1%;
         opacity: 0.5;
     }
 `;
 const move3 = keyframes`
 	단계 별로 변화를 주는 코드
     40% {
         opacity: 1;
     }
     100%{
     	top: 190px;
         left: 160px;
         width: 1%;
         height: 1%;
         opacity: 0.5;
     }
 `;
 const move4 = keyframes`
 	단계 별로 변화를 주는 코드
     12% {
         opacity: 0.9;
     }
     100%{
     	top: 210px;
         left: 200px;
         width: 1%;
         height: 1%;
         opacity: 0.5;
     }
 `;
 const move5 = keyframes`
 	단계 별로 변화를 주는 코드
     25% {
         opacity: 1;
     }
     100%{
     	top: 200px;
         left: 250px;
         width: 1%;
         height: 1%;
         opacity: 0.5;
     }
 `;

/* const PackingImg = styled.img`
  position: absolute;
  margin-top: 250px;
  width: 50%;
  height: 20%;
  border-radius: 100px;
  opacity: 0;
  &.P1 {
    transform: scale(1);
    left: 100px;
    top: 300px;
    animation: ${move1} 4s 1s infinite;
  }
  &.P2 {
    left: 10px;
    top: 300px;
    animation: ${move2} 3s 1s infinite;
  }
  &.P3 {
    top: 100px;
    left: 30px;
    animation: ${move3} 2.5s 1s infinite;
  }
  &.P4 {
    top: 50px;
    left: 120px;
    animation: ${move4} 2.5s 1s infinite;
  }
  &.P5 {
    top: 100px;
    left: 150px;
    animation: ${move5} 3.3s 1s infinite;
  }
`; */

function Home() {
  const navigate = useNavigate();
  const handelMainMove = () => {
    navigate('/main');
  };
  return (
    <React.Fragment>
      <GlobalStyle />
      <HomeBack>
        <h1 style={{ color: 'white' }}>
          배달음식을 시켜먹고 싶은데 배달비가 너무 비싸 걱정이셨나요? 배달비도
          더치하자!
        </h1>
        <img
          src={HomeImg}
          style={{
            position: 'absolute',
            width: '50%',
            height: '50%',
            top: '0px',
            left: '0px',
            opacity: '0.7',
            zIndex: '-1',
            filter: 'brightness(50%)',
          }}
        />
        <StartBtn onClick={handelMainMove}>시작하기</StartBtn>
        <IconArrow>
          <HiChevronDoubleDown className="icon" size={35} />
        </IconArrow>
        {/*<Map>
        <MapImg src={서울지도} />
        <PackingImg src={PImg1} className="P1" />
        <PackingImg src={PImg2} className="P2" />
        <PackingImg src={PImg3} className="P3" />
        <PackingImg src={PImg4} className="P4" />
        <PackingImg src={PImg5} className="P5" />
      </Map>*/}
      </HomeBack>
    </React.Fragment>
  );
}

export default Home;
