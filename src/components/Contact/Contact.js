import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_cqjas9a",
      "template_higs9te",
      form.current,
      "S3lKzwd6SqYQF-9wM"
    );
    e.target.reset();
  };
  return (
    <section className="contact section" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <h3 className="contact-title">문의 글을 남겨주세요!</h3>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-div">
              <label className="contact-form-tag">이름</label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder=""
              />
            </div>

            <div className="contact-form-div">
              <label className="contact-form-tag">이메일</label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder=""
              />
            </div>

            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">내용</label>
              <textarea
                name=""
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder=""
              ></textarea>
            </div>

            <div className="button-main">
              <button className="button">
                보내기
                {/* 이미지 추가 */}
                {/* <svg/>  */}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
