import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./travel.css";

const Travel = () => {
  const serviceKey = process.env.REACT_APP_DAEJEON_API_KEY;
  const [travelData, setTravelData] = useState([]);
  const [hasMore, setHasMore] = useState(true); // Flag to indicate if there's more data
  const [loading, setLoading] = useState(false);
  const numOfRows = 10;
  const loader = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

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
  }, [travelData]); // Observe changes in travelData to handle reaching the end

  const fetchData = async () => {
    if (loading || !hasMore) return; // Prevent fetching if already loading or no more data
    setLoading(true);
    try {
      const pageNo = Math.min(travelData.length / numOfRows + 1, 14); // Limit pageNo to 14
      const response = await axios.get(
        `https://apis.data.go.kr/6300000/openapi2022/tourspot/gettourspot?serviceKey=${serviceKey}&pageNo=${pageNo}&numOfRows=${numOfRows}`
      );
      console.log(`num ===============${pageNo}`);
      const newTravelData = response.data.response.body.items;
      setTravelData((prevData) => [...prevData, ...newTravelData]);
      setHasMore(newTravelData.length === numOfRows && pageNo < 14); // Check if there's more data based on response length and pageNo limit
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
    <div className="data-wrap">
      {travelData.slice(0, 140).map(
        (
          data,
          index // Limit displayed data to 140 items
        ) => (
          <div key={index}>
            <h1>{data.tourspotNm}</h1>
            <p>{data.tourspotSumm}</p>
            <p>{data.tourspotAddr}</p>
            <p>{data.mngTime}</p>
            <p>{data.refadNo}</p>
            <p>{data.pkgFclt === "" ? "" : `주차 : ${data.pkgFclt}`}</p>
            <br />
          </div>
        )
      )}
      <div ref={loader}>{loading && "Loading..."}</div>
      {!hasMore && <div>No more data to display.</div>}
    </div>
  );
};

export default Travel;
