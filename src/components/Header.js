import React from "react";
import { Link } from "react-router-dom";
import NoImage from "./NoImage";

const Header = ({ img, title, id }) => {
  return (
    <>
      <section className="banner">
        <div className="information">
          <p>Today's No.1 pick</p>
          <h1>{title}</h1>
          <button>
            <Link to={`/movie/${id}`}>More Info</Link>
          </button>
        </div>
        <div className="img-container">
          <div className="black"></div>
          {img ? (
            <img
              src={`https://image.tmdb.org/t/p/original/${img}`}
              alt="noimg"
            />
          ) : (
            <NoImage />
          )}
        </div>
      </section>
    </>
  );
};

export default Header;
