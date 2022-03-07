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
  //  주석 추가
  const [isLoginCheck, setIsLoginCheck] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [allPostList, setAllPostList] = useState([]);
  const [currentPost, setCurrentPost] = useState({});

  //유저정보 상태관리 위해서 작성한 부분
  useEffect(() => {
    console.log('auth요청 직전');
    if (isLoginCheck) {
      axios
        .get(url + '/auth', {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        })
        .then((res) => {
          localStorage.setItem('userInfo', JSON.stringify(res.data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoginCheck]);

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
              currentPost={currentPost}
              setCurrentPost={setCurrentPost}
              setIsLoginCheck={setIsLoginCheck}
              isLoginCheck={isLoginCheck}
              allPostList={allPostList}
              setAllPostList={setAllPostList}
              setUserInfo={setUserInfo}
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
              setUserInfo={setUserInfo}
            />
          }
        />
        <Route
          path="/editpost"
          element={
            <EditPost
              userInfo={userInfo}
              currentPost={currentPost}
              setCurrentPost={setCurrentPost}
              accessToken={accessToken}
              setIsLoginCheck={setIsLoginCheck}
              isLoginCheck={isLoginCheck}
              setUserInfo={setUserInfo}
            />
          }
        />
        <Route
          path="/readpost"
          element={
            <ReadPost
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              currentPost={currentPost}
              setCurrentPost={setCurrentPost}
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
              setUserInfo={setUserInfo}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
