import React, { startTransition } from "react";

const Rate = ({ rate }) => {
  // Covert rate into integer and return array with star shapes
  const stars = (rate) => {
    let starArray = [];
    const score = Math.round(rate) / 2;
    for (let i = 0; i < Math.trunc(score); i++) {
      starArray.push(<i className="fa-solid fa-star"></i>);
    }
    if (score > starArray.length) {
      starArray.push(<i className="fa-solid fa-star-half"></i>);
    }
    return starArray;
  };

  return (
    <>
      <div className="rate">
        {stars(rate).map((star, index) => (
          <div key={index} className="star">
            {star}
          </div>
        ))}
        <div>{rate}</div>
      </div>
    </>
  );
};

export default Rate;
