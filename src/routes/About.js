import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = `About`;
  }, []);

  return (
    <>
      <section className="about">
        <h1>About</h1>
        <div className="about-detail">
          <div className="creator">
            <h3>About the app</h3>
            <p>
              This app is created by Byul Kim who in enrolled BCIT Software
              Systems Development program. This app is one of its projects and
              built buy React.
            </p>

            <img src="/react-movie-app/images/logo.png" alt="logo" />
          </div>
          <div className="attribution">
            <h3>Attribution</h3>
            <p>
              This product uses the TMDB API but is not endorsed or certified by
              TMDB.
            </p>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="tbdblogo"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
