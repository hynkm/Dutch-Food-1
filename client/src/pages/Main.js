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

let url = 'https://localhost:8080';

function Main(props) {
  const navigate = useNavigate();

  const [allPost, setAllPost] = useState([
    // {
    //   id: 1,
    //   user_id: 'kimcoding1@naver.com',
    //   title: '서울시청 근처 같이 치킨 시키실 분!',
    //   address: '서울특별시 중구 세종대로 110',
    //   menu: '치킨',
    //   delivery_charge: 5000,
    //   recruit_volume: '5명',
    //   bank_name: '국민',
    //   account_number: 12345678912345,
    //   content:
    //     '저녁 8시에 BBQ 서울시청점에 치킨 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
    //   created_at: '2022-03-08 17:22',
    // },
    // {
    //   id: 2,
    //   user_id: 'kimcoding2@naver.com',
    //   title: '종로구청 근처 같이 피자 시키실 분!',
    //   address: '서울시 종로구 삼봉로43',
    //   menu: '피자',
    //   delivery_charge: 4000,
    //   recruit_volume: '4명',
    //   bank_name: '신한',
    //   account_number: 12345678912345,
    //   content:
    //     '저녁 8시에 도미노 종로구청점에 피자 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
    //   created_at: '2022-03-08 17:22',
    // },
    // {
    //   id: 3,
    //   user_id: 'kimcoding3@naver.com',
    //   title: '서대문구청 근처 같이 한식 시키실 분!',
    //   address: '서울특별시 서대문구 연희로 248',
    //   menu: '한식',
    //   delivery_charge: 5000,
    //   recruit_volume: '5명',
    //   bank_name: '하나',
    //   account_number: 12345678912345,
    //   content:
    //     '저녁 8시에 김밥천국 서대문구청점에 한식 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
    //   created_at: '2022-03-08 17:22',
    // },
    // {
    //   id: 4,
    //   user_id: 'kimcoding4@naver.com',
    //   title: '마포구청 근처 같이 분식 시키실 분!',
    //   address: '서울특별시 마포구 월드컵로 212',
    //   menu: '분식',
    //   delivery_charge: 4000,
    //   recruit_volume: '4명',
    //   bank_name: '우리',
    //   account_number: 12345678912345,
    //   content:
    //     '저녁 8시에 엽기떡볶이 마포구청점에 분식 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
    //   created_at: '2022-03-08 17:22',
    // },
    // {
    //   id: 5,
    //   user_id: 'kimcoding5@naver.com',
    //   title: '영등포구청 근처 같이 커피 시키실 분!',
    //   address: '서울특별시 영등포구 당산로 123',
    //   menu: '카페',
    //   delivery_charge: 5000,
    //   recruit_volume: '5명',
    //   bank_name: '기업',
    //   account_number: 12345678912345,
    //   content:
    //     '저녁 8시에 스타벅스 영등포구청점에 커피 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
    //   created_at: '2022-03-08 17:22',
    // },
    // {
    //   id: 6,
    //   user_id: 'kimcoding6@naver.com',
    //   title: '동작구청 근처 같이 일식 시키실 분!',
    //   address: '서울특별시 동작구 장승배기로 161',
    //   menu: '일식',
    //   delivery_charge: 4000,
    //   recruit_volume: '4명',
    //   bank_name: '농협',
    //   account_number: 12345678912345,
    //   content:
    //     '저녁 8시에 갓덴스시 동작구청점에 일식 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
    //   created_at: '2022-03-08 17:22',
    // },
    // {
    //   id: 7,
    //   user_id: 'kimcoding7@naver.com',
    //   title: '서초구청 근처 같이 중국음식 시키실 분!',
    //   address: '서울특별시 서초구 남부순환로2584',
    //   menu: '중국집',
    //   delivery_charge: 5000,
    //   recruit_volume: '5명',
    //   bank_name: '국민',
    //   account_number: 12345678912345,
    //   content:
    //     '저녁 8시에 홍콩반점 서초구청점에 중국음식 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
    //   created_at: '2022-03-08 17:22',
    // },
    // {
    //   id: 8,
    //   user_id: 'kimcoding8@naver.com',
    //   title: '강남구청 근처 같이 야식 시키실 분!',
    //   address: '서울특별시 강남구 학동로 426',
    //   menu: '야식',
    //   delivery_charge: 4000,
    //   recruit_volume: '4명',
    //   bank_name: '신한',
    //   account_number: 12345678912345,
    //   content:
    //     '새벽 1시에 한신포차 강남구청점에 야식 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
    //   created_at: '2022-03-08 17:22',
    // },
    // {
    //   id: 9,
    //   user_id: 'kimcoding9@naver.com',
    //   title: '송파구청 근처 같이 치킨 시키실 분!',
    //   address: '서울특별시 송파구 올림픽로 326',
    //   menu: '치킨',
    //   delivery_charge: 5000,
    //   recruit_volume: '5명',
    //   bank_name: '하나',
    //   account_number: 12345678912345,
    //   content:
    //     '저녁 8시에 교촌치킨 송파구청점에 치킨 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
    //   created_at: '2022-03-08 17:22',
    // },
    // {
    //   id: 10,
    //   user_id: 'kimcoding10@naver.com',
    //   title: '광진구청 근처 같이 일식 시키실 분!',
    //   address: '서울특별시 광진구 자양로117',
    //   menu: '일식',
    //   delivery_charge: 4000,
    //   recruit_volume: '4명',
    //   bank_name: '우리',
    //   account_number: 12345678912345,
    //   content:
    //     '저녁 8시에 오와스시 광진구청점에 일식 주문예정입니다. 같이 배달비 아끼면서 배달시키실 분들은 아래 내용 읽어보시고 신청해주세요!!',
    //   created_at: '2022-03-08 17:22',
    // },
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
