import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import kakaoApiTestImg from '../assets/icons/지도테스트이미지.png';

//지도 api 페이지

function Main({ setIsLoginCheck, isLoginCheck }) {
  const navigate = useNavigate();
  return (
    <>
      <Header setIsLoginCheck={setIsLoginCheck} isLoginCheck={isLoginCheck} />
      <div>
        <img
          src={kakaoApiTestImg}
          style={{ width: '100%', height: '400px', marginTop: '-5px' }}
        />
      </div>
      <div style={{ width: '100%', height: '300px', textAlign: 'center' }}>
        메뉴
        <button onClick={() => navigate('/readpost')}>게시글 보러가기</button>
      </div>
    </>
  );
}

export default Main;
