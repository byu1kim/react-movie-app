import React from "react";

const Header = ({ img, title }) => {
  return (
    <>
      <header>
        <div className="information">
          <p>Today's No.1 pick</p>
          <h1>{title}</h1>
          <button>More Info</button>
        </div>
        <div className="img-container">
          <div className="black"></div>
          <img src={`https://image.tmdb.org/t/p/original/${img}`} alt="noimg" />
        </div>
      </header>
    </>
  );
};

export default Header;
