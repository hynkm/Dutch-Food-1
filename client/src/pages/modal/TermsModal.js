import styled from 'styled-components';

const TermsModlaBack = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  place-items: center;
`;

const TermsModalView = styled.div`
  width: 350px;
  height: 500px;
  background-color: white;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  font-size: 20px;
  text-align: left;

  > div.termsBox {
    background-color: #f8f8ff;
    padding: 5px;
    box-shadow: 2px 3px 5px 3px #dadce0;
    font-size: 15px;
    font-weight: 300;
    width: 300px;
    height: 150px;
    overflow-x: hidden;
  }
  > div.termsBtn {
    display: flex;
    flex-direction: grid;
    justify-content: space-evenly;
    width: 300px;
    > span.termsBtnCheck {
      width: 30%;
      height: 30px;
      border-radius: 3px;
      background-color: #708090;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
      color: white;
      &:hover {
        box-shadow: 1px 1px 1px 1px #dadce0;
      }
    }
    > span.termsBtnClose {
      width: 30%;
      height: 30px;
      border-radius: 3px;
      background-color: #d3d3d3;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
      color: white;
      &:hover {
        box-shadow: 1px 1px 1px 0px #dadce0;
      }
    }
  }
`;

function TermsModal({ handleTermsModalOpen, setIsTermsCheckBox }) {
  const handleTermsAgreement = () => {
    handleTermsModalOpen();
    setIsTermsCheckBox({
      terms1disabled: false,
      isTerms1: true,
      terms2disabled: false,
      isTerms2: true,
    });
  };

  const handleTermsNotAgreement = () => {
    handleTermsModalOpen();
    setIsTermsCheckBox({
      terms1disabled: true,
      isTerms1: false,
      terms2disabled: true,
      isTerms2: false,
    });
  };

  return (
    <>
      <TermsModlaBack onClick={() => handleTermsModalOpen()}>
        <TermsModalView onClick={(e) => e.stopPropagation()}>
          이용약관
          <div className="termsBox">
            <div style={{ fontWeight: '500' }}>제1조 목적</div>
            Dutch-Food(이하 '회사')가 제공하는 서비스를 찾아주신 이용자(이하
            '회원')님을 환영합니다. 회사가 제공 하는 다양한 서비스를 회원님이
            편리하고 가깝게 다가갈 수 있도록 ‘Dutch-Food서비스 이용약관’(이하
            ‘본 약관’)을 마련하였습니다.
            <br />
            <br />
            <div style={{ fontWeight: '500' }}>제2조 정의</div>
            Dutch-Food 계정으로이용하는 서비스 사는 즉시 여러분의 통합서비스
            이용을 정지시키거나 Dutch-Food 계정을 삭제하는 등 적절한 제한을 할
            수 있습니다.
            <br />
            <br />
          </div>
          개인정보수집 및 이용
          <div className="termsBox">
            <div style={{ fontWeight: '500' }}>수집 항목</div>
            사용자 주소,이메일,서비스 이용기록,접속 로그
            <br />
            <br />
            <div style={{ fontWeight: '500' }}>수집 및 이용 목적</div>
            1) 사용자 주소 위치 지도UI상에 표시 <br />
            2) 비정상적인 로그인시 사용자 접속 로그 확인
            <br />
            <br />
          </div>
          <div className="termsBtn">
            <span className="termsBtnClose" onClick={handleTermsNotAgreement}>
              취소
            </span>
            <span className="termsBtnCheck" onClick={handleTermsAgreement}>
              동의
            </span>
          </div>
        </TermsModalView>
      </TermsModlaBack>
    </>
  );
}

export default TermsModal;
