import React, { useEffect } from "react";
const { kakao } = window;

const KakaoMap = (props) => {
  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    const option = {
      center: new kakao.maps.LatLng(props.lat, props.lon), // 지도의 중심좌표
      level: 3,
    };

    const map = new kakao.maps.Map(container, option); // 지도 생성 및 객체 리턴
    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(props.lat, props.lon);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
  }, []);

  return (
    <>
      <h1>{props.place}</h1>
      <br />
      <p>{props.address}</p>
      <br />
      <div id="map" style={{ width: "500px", height: "500px" }}></div>
    </>
  );
};

export default KakaoMap;
