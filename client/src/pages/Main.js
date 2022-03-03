import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MainPageMap from '../components/Map';
import axios from 'axios';

// 전체화면 100vh로 감싸주는 div
export const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  border: solid 1px black;
`;

export const MapDiv = styled.div`
  width: 100%;
  height: 100%;
`;

export const PostDiv = styled.div`
  width: 100%;
  height: 30vh;
  position: absolute;
  bottom: 0;
  opacity: 0.5;
  background-color: red;
  border: solid 2px red;
  z-index: 100;
`;

let url = 'https://localhost:3002';

function Main({ setIsLoginCheck, isLoginCheck }) {
  const navigate = useNavigate();

  const [allPost, setAllPost] = useState([
    {
      id: 1,
      user_id: 'kimcoding@naver.com',
      title: '카카오 빌딩에서 같이 치킨시켜드실분',
      address: '경기도 성남시 분당구 판교역로 235',
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
      address: '서울특별시 서초구 서초대로 396',
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
  const [currentBoundLocation, setCurrentBoundLocation] = useState([]); // 남서쪽 위도, 남서쪽 경도, 북동쪽 위도, 북동쪽 경도
  const [filteredAllPost, setFilteredAllPost] = useState([]);
  useEffect(() => {
    axios({
      url: url + '/post',
      method: 'get',
      headers: {
        // Authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log('모든 게시물 불러왔음');
        setAllPost(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredAllPost(filterPost(allPost));
  }, [currentBoundLocation]);

  const filterPost = (list) => {
    return list.filter((post) => {
      return (
        parseFloat(post.latitude) >= currentBoundLocation[0] &&
        parseFloat(post.latitude) <= currentBoundLocation[2] &&
        parseFloat(post.longitude) >= currentBoundLocation[1] &&
        parseFloat(post.longitude) <= currentBoundLocation[3]
      );
    });
  };

  return (
    <>
      <OuterDiv>
        <Header
          setIsLoginCheck={setIsLoginCheck}
          isLoginCheck={isLoginCheck}
          className="map"
        />
        <MapDiv>
          <MainPageMap
            currentBoundLocation={currentBoundLocation}
            currentLevel={currentBoundLocation}
            setCurrentBoundLocation={setCurrentBoundLocation}
            allPost={allPost}
            setAllPost={setAllPost}
          />
          <PostDiv>
            {filteredAllPost.map((post) => {
              return <div>{post.title}</div>;
            })}
          </PostDiv>
        </MapDiv>
      </OuterDiv>
    </>
  );
}

export default Main;
