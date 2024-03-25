import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./travel.css";

const Travel = () => {
  const serviceKey = process.env.REACT_APP_DAEJEON_API_KEY;
  const [travelData, setTravelData] = useState([]);
  const [hasMore, setHasMore] = useState(true); // 데이터 확인
  const [loading, setLoading] = useState(false);
  const numOfRows = 10;
  const loader = useRef(null);

  // Observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    });
    if (loader.current) {
      observer.observe(loader.current);
    }
    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [travelData]);

  const fetchData = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const pageNo = Math.min(travelData.length / numOfRows + 1, 14); // Limit pageNo to 14
      const response = await axios.get(
        `https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}`
      );
      console.log(`num ===============${pageNo}`);
      console.log(response.data.response.body.items);
      const newTravelData = response.data.response.body.items;
      setTravelData((prevData) => [...prevData, ...newTravelData]);
      setHasMore(newTravelData.length === numOfRows && pageNo < 14);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting && !loading) {
      fetchData();
    }
  };

  return (
    <>
      <div className="data-wrap">
        {travelData.slice(0, 140).map((data, index) => (
          <div className="data-row" key={index}>
            <div className="data-text">
              <h1>{data.tourspotNm}</h1>
              <p>{data.tourspotSumm}</p>
              <p>{data.tourspotAddr}</p>
              <p>{data.mngTime}</p>
              <p>{data.refadNo}</p>
              <p>{data.pkgFclt === "" ? "" : `주차 : ${data.pkgFclt}`}</p>
              {data.mapLat === "0" && data.mapLot === "0" ? (
                <div></div>
              ) : (
                <Link
                  to={{
                    pathname: "/travel/map",
                    search: `?place=${data.tourspotNm}&address=${data.tourspotAddr}&lat=${data.mapLat}&lon=${data.mapLot}`,
                  }}
                  target="_blank"
                >
                  지도보기
                </Link>
              )}
            </div>
          </div>
        ))}
        <div ref={loader}>{loading && "Loading..."}</div>
      </div>
    </>
  );
};

export default Travel;
