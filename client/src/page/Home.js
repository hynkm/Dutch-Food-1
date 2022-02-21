import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import 서울지도 from '../assets/homeImg/서울지도.jpg';
import PImg1 from '../assets/homeImg/포장1.jpeg';
import PImg2 from '../assets/homeImg/포장2.jpeg';
import PImg3 from '../assets/homeImg/포장3.jpeg';
import PImg4 from '../assets/homeImg/포장4.jpeg';
import PImg5 from '../assets/homeImg/포장5.jpeg';

// const Map = styled.div`
//   margin-top: 200px;
//   width: 100%;
//   height: 80%;
// `;
// const MapImg = styled.img`
//   width: 100%;
//   height: 40%;
// `;

const StartBtn = styled.div`
  cursor: pointer;
  text-align: center;
  line-height: 30px;
  color: white;
  left: 27%;
  top: 30%;
  width: 170px;
  height: 30px;
  padding: 10px;
  border-radius: 10px;
  background-color: green;
  position: absolute;
  box-shadow: 2px 1px 3px 1px #dadce0;
`;

// const move1 = keyframes`
// 	//단계 별로 변화를 주는 코드
//     90% {
//         opacity: 1;
//     }
//     100%{
//     	top: 250px;
//         left: 260px;
//         width: 1%;
//         height: 1%;
//         opacity: 0.5;
//     }
// `;
// const move2 = keyframes`
// 	//단계 별로 변화를 주는 코드
//     70% {
//         opacity: 0.8;
//     }
//     100%{
//     	top: 220px;
//         left: 100px;
//         width: 1%;
//         height: 1%;
//         opacity: 0.5;
//     }
// `;
// const move3 = keyframes`
// 	//단계 별로 변화를 주는 코드
//     40% {
//         opacity: 1;
//     }
//     100%{
//     	top: 190px;
//         left: 160px;
//         width: 1%;
//         height: 1%;
//         opacity: 0.5;
//     }
// `;
// const move4 = keyframes`
// 	//단계 별로 변화를 주는 코드
//     12% {
//         opacity: 0.9;
//     }
//     100%{
//     	top: 210px;
//         left: 200px;
//         width: 1%;
//         height: 1%;
//         opacity: 0.5;
//     }
// `;
// const move5 = keyframes`
// 	//단계 별로 변화를 주는 코드
//     25% {
//         opacity: 1;
//     }
//     100%{
//     	top: 200px;
//         left: 250px;
//         width: 1%;
//         height: 1%;
//         opacity: 0.5;
//     }
// `;

// const PackingImg = styled.img`
//   position: absolute;
//   margin-top: 250px;
//   width: 50%;
//   height: 20%;
//   border-radius: 100px;
//   opacity: 0;
//   &.P1 {
//     transform: scale(1);
//     left: 100px;
//     top: 300px;
//     animation: ${move1} 4s 1s infinite;
//   }
//   &.P2 {
//     left: 10px;
//     top: 300px;
//     animation: ${move2} 3s 1s infinite;
//   }
//   &.P3 {
//     top: 100px;
//     left: 30px;
//     animation: ${move3} 2.5s 1s infinite;
//   }
//   &.P4 {
//     top: 50px;
//     left: 120px;
//     animation: ${move4} 2.5s 1s infinite;
//   }
//   &.P5 {
//     top: 100px;
//     left: 150px;
//     animation: ${move5} 3.3s 1s infinite;
//   }
// `;

function Home() {
  const navigate = useNavigate();
  const handelMainMove = () => {
    navigate('/main');
  };
  return (
    <div>
      <h1 style={{ color: 'white' }}>
        혼자 먹기 서러우셨나요? 배보다 배꼽이 더큰 배달비 이제는 저렴하게!!
      </h1>
      <img
        src={PImg2}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0px',
          left: '0px',
          opacity: '0.7',
          zIndex: '-1',
          filter: 'brightness(50%)',
        }}
      />
      <StartBtn onClick={handelMainMove}>시작하기</StartBtn>

      {/* <Map>
        <MapImg src={서울지도} />
        <PackingImg src={PImg1} className="P1" />
        <PackingImg src={PImg2} className="P2" />
        <PackingImg src={PImg3} className="P3" />
        <PackingImg src={PImg4} className="P4" />
        <PackingImg src={PImg5} className="P5" />
      </Map> */}
    </div>
  );
}

export default Home;
