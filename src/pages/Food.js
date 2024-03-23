import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./food.css";

const Food = () => {
  const API_KEY = process.env.REACT_APP_SEOUL_API_KEY;
  const [foods, setFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [foodsPerPage] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://seoul.openapi.redtable.global/api/food/img?serviceKey=${API_KEY}`
        );
        console.log(response.data.body);
        setFoods(response.data.body);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [API_KEY]);

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(foods.length / foodsPerPage))
    );
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 전체 페이지 수 계산
  const pageNumbers = Math.ceil(foods.length / foodsPerPage);

  // 시작 페이지와 끝 페이지 계산
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(startPage + 4, pageNumbers);

  // 페이지 번호 버튼 생성
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages.map((number) => (
      <button
        key={number}
        onClick={() => paginate(number)}
        className={number === currentPage ? "active" : ""}
      >
        {number}
      </button>
    ));
  };

  return (
    <>
      <div className="food-container">
        {foods
          .slice((currentPage - 1) * foodsPerPage, currentPage * foodsPerPage)
          .map((food, index) => (
            <div key={index} className="food-item">
              <img
                className="food-img"
                src={food.FOOD_IMG_URL}
                alt={`${food.RSTR_NM} 음식점 이미지입니다.`}
              />
              <p>상호명: {food.RSTR_NM}</p>
              <p>주소: {food.AREA_NM}</p>
            </div>
          ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          이전
        </button>
        {renderPageNumbers()}
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(foods.length / foodsPerPage)}
        >
          다음
        </button>
      </div>
    </>
  );
};

export default Food;
