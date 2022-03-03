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
      user_id: 'kimcoding1@naver.com',
      title: '서울시청 근처 같이 치킨 시키실 분!',
      address: '서울특별시 중구 세종대로 110',
      menu: '치킨',
      delivery_charge: 5000,
      recruit_volume: '5명',
      bank_name: '국민',
      account_number: 12345678912345,
      content:
        '저녁 8시에 BBQ 서울시청점에 치킨 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
      created_at: '2022-03-08 17:22',
    },
    {
      id: 2,
      user_id: 'kimcoding2@naver.com',
      title: '종로구청 근처 같이 피자 시키실 분!',
      address: '서울시 종로구 삼봉로43',
      menu: '피자',
      delivery_charge: 4000,
      recruit_volume: '4명',
      bank_name: '신한',
      account_number: 12345678912345,
      content:
        '저녁 8시에 도미노 종로구청점에 피자 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
      created_at: '2022-03-08 17:22',
    },
    {
      id: 3,
      user_id: 'kimcoding3@naver.com',
      title: '서대문구청 근처 같이 한식 시키실 분!',
      address: '서울특별시 서대문구 연희로 248',
      menu: '한식',
      delivery_charge: 5000,
      recruit_volume: '5명',
      bank_name: '하나',
      account_number: 12345678912345,
      content:
        '저녁 8시에 김밥천국 서대문구청점에 한식 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
      created_at: '2022-03-08 17:22',
    },
    {
      id: 4,
      user_id: 'kimcoding4@naver.com',
      title: '마포구청 근처 같이 분식 시키실 분!',
      address: '서울특별시 마포구 월드컵로 212',
      menu: '분식',
      delivery_charge: 4000,
      recruit_volume: '4명',
      bank_name: '우리',
      account_number: 12345678912345,
      content:
        '저녁 8시에 엽기떡볶이 마포구청점에 분식 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
      created_at: '2022-03-08 17:22',
    },
    {
      id: 5,
      user_id: 'kimcoding5@naver.com',
      title: '영등포구청 근처 같이 커피 시키실 분!',
      address: '서울특별시 영등포구 당산로 123',
      menu: '카페',
      delivery_charge: 5000,
      recruit_volume: '5명',
      bank_name: '기업',
      account_number: 12345678912345,
      content:
        '저녁 8시에 스타벅스 영등포구청점에 커피 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
      created_at: '2022-03-08 17:22',
    },
    {
      id: 6,
      user_id: 'kimcoding6@naver.com',
      title: '동작구청 근처 같이 일식 시키실 분!',
      address: '서울특별시 동작구 장승배기로 161',
      menu: '일식',
      delivery_charge: 4000,
      recruit_volume: '4명',
      bank_name: '농협',
      account_number: 12345678912345,
      content:
        '저녁 8시에 갓덴스시 동작구청점에 일식 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
      created_at: '2022-03-08 17:22',
    },
    {
      id: 7,
      user_id: 'kimcoding7@naver.com',
      title: '서초구청 근처 같이 중국음식 시키실 분!',
      address: '서울특별시 서초구 남부순환로2584',
      menu: '중국집',
      delivery_charge: 5000,
      recruit_volume: '5명',
      bank_name: '국민',
      account_number: 12345678912345,
      content:
        '저녁 8시에 홍콩반점 서초구청점에 중국음식 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
      created_at: '2022-03-08 17:22',
    },
    {
      id: 8,
      user_id: 'kimcoding8@naver.com',
      title: '강남구청 근처 같이 야식 시키실 분!',
      address: '서울특별시 강남구 학동로 426',
      menu: '야식',
      delivery_charge: 4000,
      recruit_volume: '4명',
      bank_name: '신한',
      account_number: 12345678912345,
      content:
        '새벽 1시에 한신포차 강남구청점에 야식 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
      created_at: '2022-03-08 17:22',
    },
    {
      id: 9,
      user_id: 'kimcoding9@naver.com',
      title: '송파구청 근처 같이 치킨 시키실 분!',
      address: '서울특별시 송파구 올림픽로 326',
      menu: '치킨',
      delivery_charge: 5000,
      recruit_volume: '5명',
      bank_name: '하나',
      account_number: 12345678912345,
      content:
        '저녁 8시에 교촌치킨 송파구청점에 치킨 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
      created_at: '2022-03-08 17:22',
    },
    {
      id: 10,
      user_id: 'kimcoding10@naver.com',
      title: '광진구청 근처 같이 일식 시키실 분!',
      address: '서울특별시 광진구 자양로117',
      menu: '일식',
      delivery_charge: 4000,
      recruit_volume: '4명',
      bank_name: '우리',
      account_number: 12345678912345,
      content:
        '저녁 8시에 오와스시 광진구청점에 일식 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
      created_at: '2022-03-08 17:22',
    },
  ]);
  const [currentPost, setCurrentPost] = useState({});

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
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
