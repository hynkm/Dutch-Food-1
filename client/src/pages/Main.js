import Header from "../components/Header";

import kakaoApiTestImg from "../assets/icons/지도테스트이미지.png";

//지도 api 페이지

function Main({ setIsLoginCheck, isLoginCheck }) {
  return (
    <>
      <Header setIsLoginCheck={setIsLoginCheck} isLoginCheck={isLoginCheck} />
      <div>
        <img
          src={kakaoApiTestImg}
          style={{ width: "100%", height: "400px", marginTop: "-5px" }}
        />
      </div>
      <div style={{ width: "100%", height: "300px", textAlign: "center" }}>
        메뉴
      </div>
    </>
  );
}

export default Main;
