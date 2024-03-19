import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="doc_footer">
      <div className="group_info">
        <div className="wrap_info">
          <a href="#" className="footer-link">
            이용약관
          </a>
        </div>
        <div className="wrap_info">
          <a href="#" className="footer-link">
            위치정보 이용약관
          </a>
        </div>
        <div className="wrap_info">
          <a href="#" className="footer-link">
            개인정보처리방침
          </a>
        </div>
        {/* javascript:void(0); */}
        <div className="wrap_info">
          <a href="#" className="footer-link">
            운영정책
          </a>
        </div>
      </div>
      <div className="txt_copyright">
        <small>&copy; 2024 Delicious Pathway. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
