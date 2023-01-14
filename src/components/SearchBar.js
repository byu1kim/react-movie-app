import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  // Handle search submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Handle search bar value
  const handleQuery = (e) => {
    const value = e.target.value;
    setQuery(value);
  };
  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input type="text" placeholder="search" onChange={handleQuery} />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
};

export default SearchBar;
