import React from "react";

const Search = ({ history }) => {
  const goBack = () => {
    history.push("/");
  };
  return (
    <div className="Search">
      <div className="title">
        <div>
          <h2>Search Page</h2>
          <button onClick={goBack}>go back</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
