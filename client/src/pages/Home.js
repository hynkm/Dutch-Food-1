import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { FullPage, Slide } from 'react-full-page/lib';

// import { HiChevronDoubleDown } from 'react-icons/hi';
import mapImg from '../assets/img/map.png';
import pin from '../assets/img/pin.png';
import logo7 from '../assets/logo/logo7.png';
import food1 from '../assets/food/food1.png';
import food2 from '../assets/food/food2.png';
import food3 from '../assets/food/food3.png';
import food4 from '../assets/food/food4.png';
import food5 from '../assets/food/food5.png';
import food6 from '../assets/food/food6.png';
import food7 from '../assets/food/food7.png';
import food8 from '../assets/food/food8.png';

// import phone from '../assets/img/phone.png';

const GlobalStyle = createGlobalStyle`
  h1 {
    margin: 0px;
    font-family: 'IBM Plex Sans KR', sans-serif;
  }
   html body {
    height: 100vh;
    width: 100vw;
    margin: 0px;
    padding: 0px;
    font-family: 'IBM Plex Sans KR', sans-serif;
    .controls{
      position: absolute;
      display: none;
    }
  }`;

//물결 도형
const waveMove = keyframes`
 from{ 
   transform: rotate(0deg);
  }
 to{ 
   transform: rotate(360deg);
  }
`;
//물결 박스 아래로
const PhoneBoxClose = keyframes`
 0%{ 
  bottom: 0px;
  }

  100%{
    bottom: -300px;
  }
`;
//로고 클릭 모션
const LogoClick = keyframes`
 0%{ 
  
  }
 50%{ 
  top: 165px;
  box-shadow: 1px 1px 1px 1px #dadce0;
  background-color: 	#F08080;
  }
  100%{
  
  }
`;
//물결 텍스트
const waveText = keyframes`
 50%{ 
   top:0px
  }
 70%{ 
   top:15px
  }
  100%{
    top:0px
  }
`;

const time = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;
/*
const PhoneBack = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Phone = styled.img`
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  width: 280px;
  height: 510px;
`;
*/

const PhoneBack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #afeeee;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.img`
  animation: ${LogoClick} 2s 1.6s;
  animation-fill-mode: forwards;

  padding: 10px;
  border-radius: 30px;
  /* box-shadow: 2px 5px 1px 1px #dadce0; */
  /* background-color: #f8f8ff; */
  width: 150px;
  height: 90px;
  top: 160px;
`;

const PhoneTest = styled.div`
  width: 243px;
  height: 405px;
  margin-top: 77px;
  overflow: hidden;
  border-bottom-right-radius: 35px;
  border-bottom-left-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneBox = styled.div`
  animation: ${PhoneBoxClose} 4s 2s;
  animation-fill-mode: forwards;
  position: absolute;
  width: 242px;
  height: 405px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  > div.wave {
    position: absolute;
    opacity: 0.3;
    background-color: #87cefa;
    top: 150px;
    width: 520px;
    height: 490px;
    z-index: 11;
    transform-origin: 50% 48%;
    border-radius: 38%;
    animation: ${waveMove} 2s infinite linear;
    &.one {
      animation: ${waveMove} 3s infinite linear;
      opacity: 0.1;
    }

    &.two {
      animation: ${waveMove} 5s infinite linear;
      margin-left: 50px;
      opacity: 0.2;
    }
  }
`;
const MapImg = styled.img`
  /* animation: ${time} 3s 2.5s;
  animation-fill-mode: forwards; 
  opacity: 0; */
  width: 350px;
  height: 250px;
`;

const TextBox = styled.div`
  margin-top: 150px;
  margin-left: 15px;
  position: relative;
  width: 100px;
  height: 10px;

  > span.ba {
    font-family: 'Gamja Flower', cursive;
    font-size: 40px;
    position: absolute;
    left: -5px;
    animation: ${waveText} 4s infinite linear;
  }
  > span.dal {
    font-family: 'Gamja Flower', cursive;
    font-size: 40px;
    position: absolute;
    top: -15px;
    left: 30px;
    animation: ${waveText} 6s infinite linear;
  }
  > span.bi {
    font-family: 'Gamja Flower', cursive;
    font-size: 40px;
    position: absolute;
    top: 30px;
    left: 60px;
    animation: ${waveText} 8s infinite linear;
  }
`;

const StartBtn = styled.div`
  animation: ${time} 3s 3.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  cursor: pointer;

  top: 480px;
  font-size: 22px;
  letter-spacing: 5px;
  text-align: center;
  line-height: 50px;
  width: 180px;
  height: 50px;
  color: white;
  border-radius: 10px;
  background-color: #ff5e5e;
  box-shadow: 1px 1px 1px 1px #dadce0;
  z-index: 10;
`;

/*
const LastBack = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#d5d3fb, white);
`;
const HomeBack = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#5454dc, #d5d3fb);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
*/
function Home() {
  const navigate = useNavigate();
  const handelMainMove = () => {
    navigate('/main');
  };
  return (
    <React.Fragment>
      <GlobalStyle />
      <FullPage controls controlsProps={{ className: 'controls' }}>
        <Slide>
          <PhoneBack>
            {/* <Phone src={phone} /> */}
            <div>배달비를 더치하자!</div>
            <Logo src={logo7} />
            <MapImg src={mapImg} />
            <StartBtn onClick={handelMainMove}>시작하기</StartBtn>
            {/*
             <Slide>
             <PhoneBack>
            <PhoneTest>
               <PhoneBox>
                <TextBox>
                  <span className="ba">배</span>
                  <span className="dal">달</span>
                  <span className="bi">비</span>
                </TextBox>
                <div className="wave"></div>
                <div className="wave one"></div>
                <div className="wave two"></div>
              </PhoneBox> 
            </PhoneTest> 
             <PhoneBack>
             </Slide>
            */}
          </PhoneBack>
        </Slide>
        {/* <Slide>
          <HomeBack>
            <h1 style={{ color: 'white' }}>사용법 시연</h1>
            <IconArrow>
              <HiChevronDoubleDown className="icon" size={35} />
            </IconArrow>
          </HomeBack>
        </Slide>
        <Slide>
          <LastBack>
            <div style={{ background: 'linear-gradient(#5454dc, #d5d3fb);' }}>
              팀원 소개
            </div>
          </LastBack>
        </Slide> */}
      </FullPage>
    </React.Fragment>
  );
}

export default Home;
