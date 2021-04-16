import React from 'react';
import { actors } from '../data';

const Actor = ({name, movies}) => {
  return (
    <div key={name}>
      <h2>{name}</h2>
      <ul>
        {movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
}
const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(Actor)}
    </div>
  );
};

export default Actors;
