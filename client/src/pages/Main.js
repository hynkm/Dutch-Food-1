import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MainPageMap from '../components/Map';
import axios from 'axios';
import { CgChevronUp, CgChevronDown } from 'react-icons/cg';
import {
  OuterDiv,
  MapDiv,
  BoardOuterDiv,
  BoardTopDiv,
  BoardMainDiv,
  PostBoxDiv,
  PostMenuImgDiv,
  MenuImg,
  PostContentDiv,
  PostTitleDiv,
  PostInformationDiv,
  PostChargeDiv,
  PostVolumeDiv,
  PostDateDiv,
} from '../components/MainComponents';

let url = 'https://localhost:3002';

function Main(props) {
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
      title: '코드스테이츠 빌딩에서 같이 피자 시켜드실분',
      address: '서울특별시 서초구 서초대로 396',
      menu: '피자',
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
      title: '서울시청 근처에서 같이 야식 시키실 분',
      address: '서울특별시 중구 세종대로 110',
      menu: '야식',
      delivery_charge: 4000,
      recruit_volume: '5명',
      bank_name: '국민',
      account_number: 12345678912345,
      content:
        '7시에 비비큐에 치킨주문 예정입니다. 주문하실 구체적인 메뉴랑 몇 마리 주문하실지 댓글로 적어주세요!!',
      created_at: '2017-08-28 17:22',
    },
    {
      id: 4,
      user_id: 'kimcoding@naver.com',
      title: '잠실 롯데타워 근처에서 스시 시키실 분',
      address: '서울특별시 송파구 올림픽로 300',
      menu: '일식',
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
  const [isOpenBottombar, setIsOpenBottombar] = useState(true);

  const openBottombarHandler = () => {
    setIsOpenBottombar(!isOpenBottombar);
  };

  // 모든 게시물 정보를 불러온다.
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

  // 지도 상 현재 위치가 변경될 때마다 필터링 되는 게시물 업데이트
  useEffect(() => {
    setFilteredAllPost(filterPost(allPost));
    console.log(currentBoundLocation);
  }, [currentBoundLocation]);

  // 화면 영역 안에 존재하는 마커 필터링하는 함수
  const filterPost = (list) => {
    console.log(currentBoundLocation);
    return list.filter((post) => {
      return (
        parseFloat(post.latitude) >= currentBoundLocation[0] &&
        parseFloat(post.latitude) <= currentBoundLocation[2] &&
        parseFloat(post.longitude) >= currentBoundLocation[1] &&
        parseFloat(post.longitude) <= currentBoundLocation[3]
      );
    });
  };

  const openPost = (post) => {
    console.log(post);
    props.setCurrentPost(post);
    navigate('/readpost');
  };

  return (
    <>
      <OuterDiv>
        <Header
          setIsLoginCheck={props.setIsLoginCheck}
          isLoginCheck={props.isLoginCheck}
          className="map"
        />
        <MapDiv>
          <MainPageMap
            currentBoundLocation={currentBoundLocation}
            currentLevel={currentBoundLocation}
            setCurrentBoundLocation={setCurrentBoundLocation}
            allPost={allPost}
            setAllPost={setAllPost}
            setFilteredAllPost={setFilteredAllPost}
          />
          <BoardOuterDiv className={isOpenBottombar ? 'open' : 'close'}>
            <BoardTopDiv
              className={isOpenBottombar ? 'open' : 'close'}
              onClick={openBottombarHandler}
            >
              {isOpenBottombar === true ? (
                <>
                  <CgChevronDown className="icon" />이 구역 게시물{' '}
                  {filteredAllPost.length}개
                </>
              ) : (
                `이 구역 게시물 ${filteredAllPost.length}개 보기`
              )}
            </BoardTopDiv>
            <BoardMainDiv className={isOpenBottombar ? 'open' : 'close'}>
              {filteredAllPost.map((post) => {
                const menu = post.menu;
                const imgUrl = '/menu_img/' + menu + '.png';
                return (
                  <PostBoxDiv onClick={() => openPost(post)}>
                    <PostMenuImgDiv>
                      <MenuImg src={imgUrl}></MenuImg>
                    </PostMenuImgDiv>
                    <PostContentDiv>
                      <PostTitleDiv>{post.title}</PostTitleDiv>
                      <PostInformationDiv>
                        <PostChargeDiv>
                          전체 배달료: {post.delivery_charge}원
                        </PostChargeDiv>
                        <PostVolumeDiv>
                          모집인원: {post.recruit_volume}
                        </PostVolumeDiv>
                      </PostInformationDiv>
                      <PostDateDiv>작성시간: {post.created_at}</PostDateDiv>
                    </PostContentDiv>
                  </PostBoxDiv>
                );
              })}
            </BoardMainDiv>
          </BoardOuterDiv>
        </MapDiv>
      </OuterDiv>
    </>
  );
}

export default Main;
