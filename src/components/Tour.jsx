import React from "react";
import { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h2>{name}</h2>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show less" : "Read more"}
        </button>
      </div>
      <button onClick={() => removeTour(id)}>Remove</button>
    </article>
  );
};

export default Tour;
