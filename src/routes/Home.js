import { useState, useEffect } from "react";
import Header from "../components/Header";
import MovieBox from "../components/MovieBox";
import Navigation from "../components/Navigation";
import "../styles/movie.css";

// API
const api = {
  popular:
    "https://api.themoviedb.org/3/movie/popular?api_key=f7736f75839f4da3dae134251f44131b&language=en-US&page=1",
  topRated:
    "https://api.themoviedb.org/3/movie/top_rated?api_key=f7736f75839f4da3dae134251f44131b",
  nowPlaying:
    "https://api.themoviedb.org/3/movie/now_playing?api_key=f7736f75839f4da3dae134251f44131b",
  upcoming:
    "https://api.themoviedb.org/3/movie/upcoming?api_key=f7736f75839f4da3dae134251f44131b",
  search:
    "https://api.themoviedb.org/3/search/movie?api_key=f7736f75839f4da3dae134251f44131b&language=en-US&query=",
};

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  // Fetching Data from TMDB
  const fetchData = async (api) => {
    try {
      const result = await (await fetch(api)).json();
      if (result.results.length > 12) {
        setData(result.results.slice(0, 12));
      } else {
        setData(result.results);
      }
      setLoading(true);
      console.log("Fetch completed!");
    } catch {
      console.log("Fetch error");
      setData([]);
    }
  };

  // Initialize the data
  useEffect(() => {
    fetchData(api.popular);
  }, []);

  // Handle select menu
  const handleChange = (e) => {
    const value = e.target.value;

    switch (value) {
      case "popular":
        fetchData(api.popular);
        break;
      case "top-rated":
        fetchData(api.topRated);
        break;
      case "now-playing":
        fetchData(api.nowPlaying);
        break;
      case "upcoming":
        fetchData(api.upcoming);
        break;
      default:
        break;
    }
  };

  // Handle search submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      fetchData(api.search + query);
    }
  };

  // Handle search bar value
  const handleQuery = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <>
      {!loading ? (
        console.log("Loading in progress")
      ) : (
        <>
          <Header img={data[0].poster_path} title={data[0].title} />
          <main>
            <div className="browse">
              <form className="select">
                <select
                  className="select-menu"
                  name="select-menu"
                  onChange={handleChange}
                >
                  <option value="popular">Popular</option>
                  <option value="top-rated">Top Rated</option>
                  <option value="now-playing">Now Playing</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </form>
              <form className="search" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="search"
                  onChange={handleQuery}
                />
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>

            <ul className="movie-list">
              {data.map((movie) => (
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
          </main>
        </>
      )}
    </>
  );
}

export default Home;
