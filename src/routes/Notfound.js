import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <div className="notfound">
        <div className="notfound-back">
          <img
            src="https://cdn.pixabay.com/photo/2019/12/14/15/05/mountains-4695049_960_720.jpg"
            alt="notfound"
          ></img>
        </div>
        <div className="message">
          <h1>Not found the page</h1>
          <p>Sorry, we can't find that page.</p>
          <button>
            <Link to="/">Home</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Notfound;
