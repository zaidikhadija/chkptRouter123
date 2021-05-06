import React from 'react';

import MovieCard from './MovieCard';

const MoviesListss = ({MoviesList, searchTitle, rateSearch }) => {
  return (
    <div
      className="movies-list"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      {MoviesList
        .filter((el) =>
          
            el.title.toLowerCase().includes(searchTitle.toLowerCase().trim()) 
             && el.rating >= rateSearch
        )
        .map((el, i) => (
          <MovieCard key={i} movie={el} />
        ))}
    </div>
  );
};

export default MoviesListss;