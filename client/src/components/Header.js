import Navbar from './Navbar';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo/logo7.png';

const HeaderBack = styled.div`
  position: relative;
  height: 80px;
  background: linear-gradient(360deg, #f8f8ff, #f5f5f5);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  > img.logo {
    width: 140px;
    height: 60px;
    position: absolute;
    margin-left: 10px;
    margin-top: 5px;
  }
`;
function Header({ setIsLoginCheck, isLoginCheck, setUserInfo }) {
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

        <Navbar setIsLoginCheck={setIsLoginCheck} isLoginCheck={isLoginCheck} />
      </HeaderBack>
    </>
  );
}

export default Header;
