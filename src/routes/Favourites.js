// Page Favs
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieBox from "../components/MovieBox";

function Favourites() {
  const favs = useSelector((state) => state.favs.items);
  console.log(favs);

  return (
    <section className="fav">
      {favs.length < 1 ? (
        <p>
          No favourite characters. Return to the <Link to="/">home</Link> page
          to add some favourite characters.
        </p>
      ) : (
        // title, poster, overview, rate, date, id
        <ul className="movie-list">
          {favs.map((movie) => (
            <li key={movie.id}>
              <MovieBox
                id={movie.id}
                title={movie.original_title}
                poster={movie.poster_path}
                overview={movie.overview}
                rate={movie.vote_average}
                date={movie.release_date}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Favourites;
