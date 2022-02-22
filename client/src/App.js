import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Home from './pages/Home';
import OAuthKakao from './pages/oauth/OAuthKakao';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import ReadPost from './pages/ReadPost';

function App() {
  const [isLoginCheck, setIsLoginCheck] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({
    id: 7,
    user_id: 'kimcoding@naver.com',
    nickname: '닉네임박코딩',
  });
  const [nowPost, setNowPost] = useState({
    id: 1,
    user_id: 'kimcoding@naver.com',
    title: '코드스테이츠 빌딩에서 같이 치킨시켜드실분',
    address: '서울시 강남구 코드스테이츠 빌딩 1층',
    menu: '치킨',
    recruit_volume: '5명',
    bank_name: '국민',
    account_number: 123456789,
    content:
      '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
    comment_content: '황금올리브 2마리 같이 주문시켜주세요!',
    nickname: '닉네임김코딩',
    delivery_charge: 4000,
    date: '2022.03.16.17:30',
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/main"
          element={
            <Main
              setIsLoginCheck={setIsLoginCheck}
              isLoginCheck={isLoginCheck}
            />
          }
        />
        <Route
          path="/kakao/oauth"
          element={<OAuthKakao setIsLoginCheck={setIsLoginCheck} />}
        />
        <Route
          path="/createpost"
          element={<CreatePost userInfo={userInfo} accessToken={accessToken} />}
        />
        <Route
          path="/editpost"
          element={
            <EditPost
              userInfo={userInfo}
              nowPost={nowPost}
              accessToken={accessToken}
            />
          }
        />
        <Route
          path="/readpost"
          element={<ReadPost userInfo={userInfo} nowPost={nowPost} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
