import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = `About`;
  }, []);

  return (
    <>
      <section className="about">
        <h1>About!</h1>
        <p>[TMDb logo]</p>
        <p>
          "This product uses the TMDB API but is not endorsed or certified by
          TMDB."
        </p>
      </section>
    </>
  );
};

export default About;
