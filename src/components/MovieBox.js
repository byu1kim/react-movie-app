import React from "react";
import { Link } from "react-router-dom";
import Rate from "../components/Rate";
import FavBtn from "../components/FavBtn";

const MovieBox = ({ movie }) => {
  return (
    <>
      <div className="movie">
        <div className="grid-img">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="black2"></div>

        <div className="movie-info">
          <Link to={`/movie/${movie.id}`}>
            <div className="date">
              <div className="date-style">
                {movie.release_date.substring(0, 4)}
              </div>
            </div>
            <div className="title">{movie.title.toUpperCase()}</div>
            <Rate rate={movie.vote_average} />
            <div className="overview">
              {movie.overview.length > 200
                ? `${movie.overview.substring(0, 200)} ... `
                : movie.overview}
            </div>
          </Link>
        </div>

        <div className="buttons">
          <button>
            <Link to={`/movie/${movie.id}`}>More</Link>
          </button>
          <FavBtn movieObj={movie} />
        </div>
      </div>
    </>
  );
};

export default MovieBox;
