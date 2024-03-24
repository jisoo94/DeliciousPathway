import React, { useEffect, useState } from "react";
import axios from "axios";
import "./travel.css";

const Travel = () => {
  const [travelData, setTravelData] = useState([]);
  const serviceKey = process.env.REACT_APP_DAEJEON_API_KEY;
  const pageNo = 1;
  const numOfRows = 10;

  // data sample
  // cnvenFcltGuid : ""
  // mapLat : "36.329327"
  // mapLot : "127.42839"
  // mngTime : ""
  // pkgFclt : "우리들공원 주차장 (355면)"
  // refadNo: "042-252-7100"
  // tourUtlzAmt: ""
  // tourspotAddr: "대전 중구 은행동 45-10"
  // tourspotDtlAddr: ""
  // tourspotNm: "으능정이문화의거리"
  // tourspotSumm: "청춘과 문화의 놀이터"
  // tourspotZip: "34922"
  // urlAddr: "http://www.skyroad.or.kr/"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}`
        );
        // console.log("response : ", response.data.response);
        // console.log("body : ", response.data.response.body);
        // console.log("items : ", response.data.response.body.items);
        setTravelData(response.data.response.body.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>ddd</p>
      <div>
        {travelData.map((data, index) => (
          <div key={index}>
            <div>{data.tourspotNm}</div>
            <div>{data.tourspotSumm}</div>
            <div>{data.refadNo}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Travel;
