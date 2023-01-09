import React from "react";
import { Link } from "react-router-dom";
import Rate from "../components/Rate";

const MovieBox = ({ title, poster, overview, rate, date, id }) => {
  return (
    <>
      <div className="movie">
        <div className="grid-img">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster}`}
            alt={title}
          />
        </div>

        <div className="black2"></div>
        <div className="movie-info">
          <div className="date">
            <div className="date-style">{date.substring(0, 4)}</div>
          </div>
          <div className="title">{title.toUpperCase()}</div>
          <Rate rate={rate} />
          <div className="overview">
            {overview.length > 200
              ? `${overview.substring(0, 200)} ... `
              : overview}
          </div>
        </div>
        <div className="buttons">
          <button>
            <Link to={`/movie/${id}`}>More</Link>
          </button>
          <button>
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieBox;
