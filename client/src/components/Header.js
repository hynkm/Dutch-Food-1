import Navbar from './Navbar';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderBack = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  height: 80px;
  background-color: #e6e6fa;
  > div.logoText {
    text-align: center;
    line-height: 80px;
  }
`;

function Header({ setIsLoginCheck, isLoginCheck }) {
  const navigate = useNavigate();
  return (
    <>
      <HeaderBack>
        <div className="logoText" onClick={() => navigate('/main')}>
          Dutch-Food
        </div>
        {/* <button onClick={() => setIsLoginCheck(!isLoginCheck)}>
          로그인/로그아웃
        </button> */}
        <Navbar setIsLoginCheck={setIsLoginCheck} isLoginCheck={isLoginCheck} />
      </HeaderBack>
    </>
  );
}

export default Header;
