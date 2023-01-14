// Page Favs
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieBox from "../components/MovieBox";

function Favourites() {
  const favs = useSelector((state) => state.favs.items);

  useEffect(() => {
    document.title = `Favourites`;
  }, []);

  return (
    <section className="fav">
      <h2>Favourites</h2>
      {favs.length < 1 ? (
        <>
          <p>
            No favourite characters. Return to the <Link to="/">home</Link> page
            to add some favourite characters.
          </p>
        </>
      ) : (
        <ul className="movie-list">
          {favs.map((movie) => (
            <li key={movie.id}>
              <MovieBox movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Favourites;
