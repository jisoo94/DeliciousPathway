import React from "react";
import "./home.css";
import Carousels from "../components/Carousels/Carousels";
import Contact from "../components/Contact/Contact";
import Weather from "../components/Weather/Weather";
import Card from "../components/Card/Card";
import fall from "../assets/travels/fall.jpg";
import food from "../assets/travels/food.jpg";
import ocean from "../assets/travels/ocean.jpg";
import seoul from "../assets/travels/seoul.jpg";

const Home = () => {
  return (
    <div className="mainHome">
      <div className="food_main">
        <Carousels showCarousel={true} />
        <div className="food_text">
          <h1>맛있는 여행의 시작</h1>
          <p>
            여행의 매력은 새로운 곳에서의 맛있는 음식을 맛보는 것입니다. 특별한
            맛집을 찾아 여행을 떠나보세요. 현지의 로컬 음식을 맛보고 문화를
            경험할 수 있습니다. 골목길의 작은 가게부터 유명한 식당까지 다양한
            맛집이 기다리고 있습니다. 지도를 확인하고 새로운 맛집을 찾아 떠나는
            여행은 즐거움과 풍요로움을 안겨줄 것입니다. 함께 맛있는 추억을
            만들어보세요.
          </p>
          <br />
          <p className="more">더보기</p>
        </div>
      </div>
      {/* <Carousels showCarousel={false} /> */}

      <div className="card_main">
        <div className="card_title">
          <h1>여행지 추천 목록</h1>
          <p className="more">더보기</p>
        </div>
        <div className="card_item">
          <Card
            img={food}
            title={"전통 시장 음식"}
            contents={
              "다양한 전통 시장을 돌아다니며 지역 특산물과 길거리 음식을 맛보세요."
            }
          />
          <Card
            img={fall}
            title={"가을의 단풍 명소"}
            contents={
              "가을을 대표하는 단풍 명소로를 방문하고 가을 축제를 즐겨보세요."
            }
          />
          <Card
            img={seoul}
            title={"도심 문화 체험"}
            contents={
              "현대적이고 다채로운 서울의 문화와 역동적인 도시 생활을 경험해보세요."
            }
          />
          <Card
            img={ocean}
            title={"해변 산책"}
            contents={
              "아름다운 해변 풍경과 신선한 바다 공기를 마음껏 느낄 수 있는 대표적인 해변."
            }
          />
        </div>
      </div>
      <div className="subHome">
        <Contact />
        <Weather />
      </div>
    </div>
  );
};

export default Home;
