import { useState, useEffect } from "react";

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
  const [query, setQuery] = useState("");

  // Fetching Data from TMDB
  const fetchData = async (api) => {
    try {
      const result = await (await fetch(api)).json();
      setData(result.results);
      console.log(result.results);
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
    if (query.trim() != "") {
      fetchData(api.search + query);
    }
  };

  // Handle search bar
  const handleQuery = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  // select option add + style
  return (
    <>
      <h1>Home!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="search" onChange={handleQuery} />
        <button type="submit">Search!</button>
      </form>
      <form>
        <select name="g" onChange={handleChange}>
          <option value="popular">Popular</option>
          <option value="top-rated">Top Rated</option>
          <option value="now-playing">Now Playing</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </form>
      {console.log()}
      <ul>
        {data.map((a, index) => (
          <li key={index}>{a.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Home;
