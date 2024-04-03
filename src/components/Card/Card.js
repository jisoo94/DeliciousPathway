import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="img-fix">
        <img className="card-img" src={props.img} />
      </div>
      <div className="card-text">
        <h3>{props.title}</h3>
        <p>{props.contents}</p>
      </div>
    </div>
  );
};

export default Card;
