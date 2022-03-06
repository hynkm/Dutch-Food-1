import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { FullPage, Slide } from 'react-full-page/lib';

// import { HiChevronDoubleDown } from 'react-icons/hi';
import mapImg from '../assets/img/map.png';
import pin from '../assets/img/pin.png';
import logo from '../assets/logo/logo18.png';
import phone from '../assets/img/phone.png';

const GlobalStyle = createGlobalStyle`
  h1 {
    margin: 0px;
    font-family: 'IBM Plex Sans KR', sans-serif;
  }
   html body {
    position: fixed;
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

const MapBack = styled.div`
  width: 220px;
  height: 140px;
  position: relative;
`;
const timeMap = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;
const timePin = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

const MapImg = styled.img`
  animation: ${timeMap} 2s 2.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  width: 220px;
  height: 140px;
`;

const Pin = styled.img`
  animation: ${timePin} 3s 3.5s;
  animation-fill-mode: forwards;
  opacity: 0;

  width: 18px;
  height: 20px;
  top: 30px;
  left: 70px;
  position: absolute;
`;
const Pin1 = styled.img`
  animation: ${timePin} 3s 3s;
  animation-fill-mode: forwards;
  opacity: 0;

  width: 18px;
  height: 20px;
  top: 55px;
  left: 110px;
  position: absolute;
`;
const Pin2 = styled.img`
  animation: ${timePin} 3s 3.2s;
  animation-fill-mode: forwards;
  opacity: 0;

  width: 18px;
  height: 20px;
  top: 40px;
  left: 150px;
  position: absolute;
`;
const Pin3 = styled.img`
  animation: ${timePin} 3s 2.9s;
  animation-fill-mode: forwards;
  opacity: 0;

  width: 18px;
  height: 20px;
  left: 185px;
  top: 70px;
  position: absolute;
`;
const Pin4 = styled.img`
  animation: ${timePin} 3s 3.6s;
  animation-fill-mode: forwards;
  opacity: 0;

  width: 18px;
  height: 20px;
  left: 50px;
  top: 90px;
  position: absolute;
`;
const Pin5 = styled.img`
  animation: ${timePin} 3s 3.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  width: 18px;
  top: 100px;
  height: 20px;
  left: 140px;
  position: absolute;
`;

const Text1 = styled.div`
  font-size: 35px;
  color: black;
  font-family: 'Nanum Pen Script', cursiv;
`;

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
  background-color: 	white;
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
const PhoneBack1 = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Phone = styled.img`
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);

  display: block;
  margin: 0 auto;
  max-width: 80%;
  max-height: 87%;
  margin-top: 2.7%;
`;

const Logo1 = styled.img`
  animation: ${LogoClick} 2s 1.6s;
  animation-fill-mode: forwards;

  padding: 10px;
  border-radius: 30px;
  box-shadow: 3px 6px 3px 3px #dadce0;
  background-color: #f8f8ff;
  width: 170px;
  height: 95px;
  top: 0px;
  left: 0px;
`;
const AniBack = styled.div`
  width: 260px;
  height: 1px;
  //border: 1px solid;
  position: relative;
`;

const PhoneAni = styled.div`
  position: absolute;
  top: -70px;
  width: 100%;
  height: 405px;
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
  width: 100%;
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

const StartBtn1 = styled.div`
  animation: ${time} 3s 3.5s;
  animation-fill-mode: forwards;
  opacity: 0;
  margin-bottom: 30px;
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
          <PhoneBack1>
            <div
              style={{
                position: 'absolute',
                top: '0',
                right: '-200%',
                bottom: '0',
                left: '-200%',
              }}
            >
              <Phone src={phone} />
            </div>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '33%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: '18%',
              }}
            >
              <Logo1 src={logo} />
            </div>

            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%',
                height: '33%',
                margin: '0 auto',
                maxWidth: '70%',
                maxHeight: '87%',
              }}
            >
              <AniBack>
                <PhoneAni>
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
                </PhoneAni>
              </AniBack>
              <MapBack>
                <MapImg src={mapImg} />
                <Pin src={pin} />
                <Pin1 src={pin} />
                <Pin2 src={pin} />
                <Pin3 src={pin} />
                <Pin4 src={pin} />
                <Pin5 src={pin} />
              </MapBack>
            </div>
            <div
              style={{
                width: '100%',
                height: '33%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <StartBtn1 onClick={handelMainMove}>시작하기</StartBtn1>
            </div>
          </PhoneBack1>
        </Slide>
      </FullPage>
    </React.Fragment>
  );
}

export default Home;
