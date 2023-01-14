import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Rate from "../components/Rate";
import FavBtn from "../components/FavBtn";
import Notfound from "./Notfound";
import Loading from "../components/Loading";

const Detail = () => {
  const params = useLocation().pathname;
  const api = `https://api.themoviedb.org/3${params}?api_key=f7736f75839f4da3dae134251f44131b`;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetching Data from TMDB
  const fetchData = async (api) => {
    try {
      const result = await (await fetch(api)).json();
      setData(result);
      setLoading(true);
      console.log("Fetch completed!");
    } catch {
      console.log("Fetch error");
      setData([]);
    }
  };

  // Initialize the data
  useEffect(() => {
    fetchData(api);
  }, []);

  useEffect(() => {
    document.title = `${data.title} - Detail`;
  }, [data]);

  return (
    <>
      {!loading ? (
        <Loading />
      ) : data.id == null ? (
        <Notfound />
      ) : (
        <section className="detail">
          <div className="detail-img-container">
            <div className="detail-black"></div>
            <img
              src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
              alt={data.title}
            />
          </div>

          <div className="detail-info">
            <div className="desktop-img">
              <img
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                alt={data.title}
              />
            </div>
            <div className="desktop-info">
              <div className="title-container">
                <div className="detail-title">{data.title}</div>
                <div className="detail-date">
                  ({data.release_date.substring(0, 4)})
                </div>
              </div>

              <div className="detail-genres">
                {data.genres.map((a, index) => (
                  <div className="genre" key={index}>
                    {a.name}
                  </div>
                ))}
              </div>
              <Rate rate={data.vote_average} />
              <FavBtn movieObj={data} />
              <div className="subtitle">Overview</div>
              <div className="content">{data.overview}</div>
              <div className="subtitle">Release Date</div>
              <div className="content">{data.release_date}</div>
              <div className="subtitle">Status</div>
              <div className="content">{data.status}</div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Detail;
