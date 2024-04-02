import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
class ScrollToTopButton extends React.Component {
  state = {
    isTopVisible: false, // 탑 버튼이 화면에 보이는지 여부를 상태로 관리
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // 페이지가 일정 수준 이상 스크롤되면 버튼을 표시
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const isTopVisible = scrollTop > 100; // 예시로 100px 스크롤되었을 때 버튼을 표시
    this.setState({ isTopVisible });
  };

  handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤 효과 적용
    });
  };

  render() {
    const { isTopVisible } = this.state;

    return (
      <button
        id="top_btn"
        style={{
          display: isTopVisible ? "block" : "none",
          border: isTopVisible ? "1px solid black" : "0px",
          borderRadius: isTopVisible ? "10px" : "0px",
          padding: isTopVisible ? "10px" : "0px",
          backgroundColor: "transparent",
        }}
        onClick={this.handleClick}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    );
  }
}

export default ScrollToTopButton;
