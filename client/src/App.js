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
import axios from 'axios';

let url = 'http://localhost:8080';

function App() {
  const [isLoginCheck, setIsLoginCheck] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({
    id: 1,
    user_id: 'kimcoding1@naver.com',
    nickname: '닉네임김코딩',
  });
  const [allPostList, setAllPostList] = useState([]);
  const [currentPost, setCurrentPost] = useState({});

  // // 모든 게시물 정보를 불러온다.
  // useEffect(() => {
  //   console.log('all');
  //   axios({
  //     url: url + '/main/post',
  //     method: 'get',
  //     headers: {
  //       // Authorization: `Bearer ${props.accessToken}`,
  //       'Content-Type': 'application/json',
  //     },
  //     withCredentials: true,
  //   })
  //     .then((res) => {
  //       console.log('모든 게시물 불러왔음');
  //       console.log(res.data.data);
  //       setAllPostList(res.data.data);
  //       setTimeout(() => {
  //         console.log(allPostList);
  //       }, 5000);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/main"
          element={
            <Main
              setCurrentPost={setCurrentPost}
              setIsLoginCheck={setIsLoginCheck}
              isLoginCheck={isLoginCheck}
              allPostList={allPostList}
              setAllPostList={setAllPostList}
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
              setCurrentPost={setCurrentPost}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
