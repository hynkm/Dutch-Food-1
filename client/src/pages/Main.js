import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

//지도 api 페이지

function Main({ setIsLoginCheck, isLoginCheck }) {
  const navigate = useNavigate();
  return (
    <>
      <Header setIsLoginCheck={setIsLoginCheck} isLoginCheck={isLoginCheck} />
    </>
  );
}

export default Main;
