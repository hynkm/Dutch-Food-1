import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
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

  const [currentBoundLocation, setCurrentBoundLocation] = useState([]); // 남서쪽 위도, 남서쪽 경도, 북동쪽 위도, 북동쪽 경도
  const [filteredAllPost, setFilteredAllPost] = useState([]);
  const [isOpenBottombar, setIsOpenBottombar] = useState(true);
  // const [allPostList, setAllPostList] = useState([]);
  const openBottombarHandler = () => {
    setIsOpenBottombar(!isOpenBottombar);
  };

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
  //       props.setAllPostList(res.data.data);
  //       setTimeout(() => {
  //         console.log(props.allPostList);
  //       }, 5000);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // 지도 상 현재 위치가 변경될 때마다 필터링 되는 게시물 업데이트
  useEffect(() => {
    setFilteredAllPost(filterPost(props.allPostList));
    // console.log(currentBoundLocation);
  }, [currentBoundLocation]);

  // 화면 영역 안에 존재하는 마커 필터링하는 함수
  const filterPost = (list) => {
    // console.log(currentBoundLocation);
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
    localStorage.setItem('currentPost', JSON.stringify(post));
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
            allPostList={props.allPostList}
            setAllPostList={props.setAllPostList}
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
                      <PostDateDiv>
                        작성날짜: {post.createdAt.slice(0, 10)}
                      </PostDateDiv>
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
