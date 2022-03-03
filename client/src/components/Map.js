import React, { useEffect } from 'react';
const { kakao } = window;

export default function MainPageMap(props) {
  // 게시물 올라온 모든 위치에 마커 표시하기
  useEffect(() => {
    // 지도를 담을 영역의 DOM 레퍼런스
    let mapContainer = document.getElementById('map');
    let mapOption = {
      center: new kakao.maps.LatLng(37.5666103, 126.9783882), // 지도의 중심좌표(서울 시청)
      level: 8, // 지도의 레벨(확대, 축소 정도)
    };
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성 및 객체 리턴

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    props.allPostList.forEach(function (post) {
      geocoder.addressSearch(post.address, function (result, status) {
        //정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 게시물 데이터에 좌표 정보를 넣어주기
          post.latitude = result[0].x;
          post.longitude = result[0].y;
          props.setAllPostList(props.allPostList);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // 마커가 지도 위에 표시되도록 설정합니다
          marker.setMap(map);

          var bounds = map.getBounds();

          // 영역정보의 남서쪽 정보를 얻어옵니다
          var swLatlng = bounds.getSouthWest();

          // 영역정보의 북동쪽 정보를 얻어옵니다
          var neLatlng = bounds.getNorthEast();

          console.log(bounds);
          props.setCurrentBoundLocation([
            swLatlng.La,
            swLatlng.Ma,
            neLatlng.La,
            neLatlng.Ma,
          ]);
        }
      });
    });

    // 지도 이동할때마다 현재 좌표, 레벨 구하기
    kakao.maps.event.addListener(map, 'bounds_changed', function () {
      // 지도 영역정보를 얻어옵니다
      var bounds = map.getBounds();

      // 영역정보의 남서쪽 정보를 얻어옵니다
      var swLatlng = bounds.getSouthWest();

      // 영역정보의 북동쪽 정보를 얻어옵니다
      var neLatlng = bounds.getNorthEast();

      props.setCurrentBoundLocation([
        swLatlng.La,
        swLatlng.Ma,
        neLatlng.La,
        neLatlng.Ma,
      ]);
    });
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: '100%', zIndex: '5' }}></div>
  );
}

// 게시물 보기 페이지에서 쓰이는 지도 컴포넌트
export function ReadPostMap(props) {
  useEffect(() => {
    let mapContainer = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스

    // 지도 생성할 때 필요한 기본옵션
    let mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };

    // 지도를 표시할 div와 지도 옵션으로 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성 및 객체 리턴

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(
      props.currentPost.address,
      function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // 마커가 지도 위에 표시되도록 설정합니다
          marker.setMap(map);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      }
    );

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);
  }, []);

  return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
}
