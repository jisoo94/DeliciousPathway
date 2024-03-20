import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card_img" src={props.img} />
      <h3>{props.title}</h3>
      <p>{props.contents}</p>
    </div>
  );
};

export default Card;
