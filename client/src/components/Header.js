import Navbar from './Navbar';
import styled from 'styled-components';

const HeaderBack = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  height: 80px;
  background-color: #E6E6FA;
  > div.logoText {
    text-align: center;
    line-height: 80px;
  }
`;

function Header({ setIsLoginCheck, isLoginCheck }) {
  return (
    <>
      <HeaderBack>
        <div className="logoText">Dutch-Food</div>
        <Navbar setIsLoginCheck={setIsLoginCheck} isLoginCheck={isLoginCheck} />
      </HeaderBack>
    </>
  );
}

export default Header;
