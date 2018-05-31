import React from 'react';

const Search = ({history}) => {
    const goBack = ()=>{
        history.push('/')
      }
    return (
        <div>
             <button onClick={goBack}>go back</button>
            this is the search page
        </div>
    );
};

export default Search;