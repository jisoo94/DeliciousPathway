import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./food.css";

const Food = () => {
  const API_KEY = process.env.REACT_APP_SEOUL_API_KEY;
  const [foods, setFoods] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    getFoods();
  }, [page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const getFoods = async () => {
    try {
      const res = await axios.get(
        `https://seoul.openapi.redtable.global/api/food/img?serviceKey=${API_KEY}&page=${page}`
      );

      console.log(res.data.body);

      // console.log(res.data.body);
      // console.log(res.data.body[0]);
      // console.log(res.data.body[0].RSTR_NM);
      // console.log(res.data.body[0].AREA_NM);
      // console.log(res.data.body[0].FOOD_IMG_URL);
      // setFoods({
      //   title: res.data.body[0].RSTR_NM,
      //   adress: res.data.body[0].AREA_NM,
      //   img: res.data.body[0].FOOD_IMG_URL,
      // });
      setFoods((prevFoods) => [...prevFoods, ...res.data.body]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // 처음 20개만 가져오기
  const firstTwentyFoods = foods.slice(0, 20);

  return (
    <div className="food-container">
      {firstTwentyFoods.map((food, index) => (
        <div key={index} className="food-item">
          <p>상호명: {food.RSTR_NM}</p>
          <p>주소: {food.AREA_NM}</p>
          <img
            className="food-img"
            src={food.FOOD_IMG_URL}
            alt={`${food.RSTR_NM} 음식점 이미지입니다.`}
          />
        </div>
      ))}
      <div ref={loader}></div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Food;
