import React from 'react';
import { movies } from '../data';

const Movie = ({title, time, metascore, genres}) => {
  return (
    <div key={title}>
      <h2>{title}</h2>
      <p>Time: {time} minutes</p>
      <span>Genres:</span>
      <ul>
        {genres.map(genre => <li>{genre}</li>)}
      </ul>
      <p>Metascore: {metascore || "No score available"}</p>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(Movie)}
    </div>
  );
};

export default Movies;
