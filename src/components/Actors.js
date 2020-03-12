import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return(
          <div>
            <h3>Name: { actor.name }</h3>
            <h4>{actor.movies.map(movie => <ul>{ movie }</ul>)}</h4>
          </div>
        )
      }
      )}
    </div>
  );
};

export default Actors;
