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
import OauthKakao from './pages/oauth/OauthKakao';
import OauthGoogle from './pages/oauth/OauthGoogle';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import ReadPost from './pages/ReadPost';
import MyPage from './pages/MyPage';

function App() {
  const [isLoginCheck, setIsLoginCheck] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({
    id: 1,
    user_id: 'kimcoding1@naver.com',
    nickname: '닉네임김코딩',
  });
  const [allPostList, setAllPostList] = useState([
    {
      id: 1,
      user_id: 'kimcoding@naver.com',
      title: '코드스테이츠 빌딩에서 같이 치킨시켜드실분',
      address: '서울시 강남구 코드스테이츠 빌딩 1층',
      menu: '치킨',
      delivery_charge: 4000,
      recruit_volume: '5명',
      bank_name: '국민',
      account_number: 12345678912345,
      content:
        '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
      created_at: '2017-08-28 17:22',
    },
    {
      id: 2,
      user_id: 'kimcoding@naver.com',
      title: '코드스테이츠 빌딩에서 같이 치킨시켜드실분',
      address: '서울시 강남구 코드스테이츠 빌딩 1층',
      menu: '치킨',
      delivery_charge: 4000,
      recruit_volume: '5명',
      bank_name: '국민',
      account_number: 12345678912345,
      content:
        '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
      created_at: '2017-08-28 17:22',
    },
    {
      id: 3,
      user_id: 'kimcoding@naver.com',
      title: '코드스테이츠 빌딩에서 같이 치킨시켜드실분',
      address: '서울시 강남구 코드스테이츠 빌딩 1층',
      menu: '치킨',
      delivery_charge: 4000,
      recruit_volume: '5명',
      bank_name: '국민',
      account_number: 12345678912345,
      content:
        '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
      created_at: '2017-08-28 17:22',
    },
  ]);
  const [currentPost, setCurrentPost] = useState({
    id: 1,
    user_id: 'kimcoding@naver.com',
    title: '코드스테이츠 빌딩에서 같이 치킨시켜드실분',
    address: '서울시 강남구 코드스테이츠 빌딩 1층',
    menu: '치킨',
    delivery_charge: 4000,
    recruit_volume: '5명',
    bank_name: '국민',
    account_number: 12345678912345,
    content:
      '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
    created_at: '2017-08-28 17:22',
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
          element={<OauthKakao setIsLoginCheck={setIsLoginCheck} />}
        />
        <Route
          path="/google/oauth"
          element={<OauthGoogle setIsLoginCheck={setIsLoginCheck} />}
        />
        <Route
          path="/createpost"
          element={
            <CreatePost
              userInfo={userInfo}
              accessToken={accessToken}
              setIsLoginCheck={setIsLoginCheck}
              isLoginCheck={isLoginCheck}
            />
          }
        />
        <Route
          path="/editpost"
          element={
            <EditPost
              userInfo={userInfo}
              currentPost={currentPost}
              accessToken={accessToken}
              setIsLoginCheck={setIsLoginCheck}
              isLoginCheck={isLoginCheck}
            />
          }
        />
        <Route
          path="/readpost"
          element={
            <ReadPost
              userInfo={userInfo}
              currentPost={currentPost}
              setIsLoginCheck={setIsLoginCheck}
              isLoginCheck={isLoginCheck}
            />
          }
        />
        <Route
          path="/mypage"
          element={
            <MyPage
              userInfo={userInfo}
              currentPost={currentPost}
              allPostList={allPostList}
              setAllPostList={setAllPostList}
              setIsLoginCheck={setIsLoginCheck}
              isLoginCheck={isLoginCheck}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
