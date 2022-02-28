import Navbar from './Navbar';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo/logo7.png';

const HeaderBack = styled.div`
  position: relative;
  height: 80px;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  > img.logo {
    width: 140px;
    height: 60px;
    position: absolute;
    margin-left: 10px;
    margin-top: 5px;
  }
`;
// --blue50:   #e8f3ff;
// --blue200: #90c2ff;
// --blue100: #c9e2ff;
// --blue300: #64a8ff;
// --blue400: #4593fc;
// --blue500: #3182f6;
// --blue600: #2272eb;
// --blue700: #1b64da;
// --blue800: #1957c2;
// --blue900: #194aa6;

function Header({ setIsLoginCheck, isLoginCheck }) {
  const navigate = useNavigate();
  return (
    <>
      <HeaderBack>
        <img
          className="logo"
          src={logo}
          onClick={() => navigate('/main')}
          style={{ cursor: 'pointer' }}
        />

        <button
          onClick={() => setIsLoginCheck(!isLoginCheck)}
          style={{ marginLeft: '200px' }}
        >
          로그인/로그아웃
        </button>
        <Navbar setIsLoginCheck={setIsLoginCheck} isLoginCheck={isLoginCheck} />
      </HeaderBack>
    </>
  );
}

export default Header;
