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
      <div className="contact__container">
        <div className="contact__content">
          <h3 className="contact__title">문의 글을 남겨주세요!</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">이름</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder=""
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">이메일</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder=""
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">내용</label>
              <textarea
                name=""
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder=""
              ></textarea>
            </div>

            <div className="button__main">
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
