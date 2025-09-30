import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };
  return (
    <input type="search" placeholder="Buscar..." onChange={handleInputChange} />
  );
};
export default Search;
