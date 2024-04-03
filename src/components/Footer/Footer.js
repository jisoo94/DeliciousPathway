import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="doc-footer">
      <div className="group-info">
        <div className="wrap-info">
          <a href="#!" className="footer-link">
            이용약관
          </a>
        </div>
        <div className="wrap-info">
          <a href="#!" className="footer-link">
            위치정보 이용약관
          </a>
        </div>
        <div className="wrap-info">
          <a href="#!" className="footer-link">
            개인정보처리방침
          </a>
        </div>
        {/* javascript:void(0); */}
        <div className="wrap-info">
          <a href="#!" className="footer-link">
            운영정책
          </a>
        </div>
      </div>
      <div className="txt-copyright">
        <small>&copy; 2024 Delicious Pathway. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
