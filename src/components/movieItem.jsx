import React from 'react';
import { Link } from 'react-router-dom';
import './movieItem.css';

const MovieItem = ({ name, id, description, poster }) => {
  return (
    <div className="movieItem">
      <div>
        <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt={name} />
      </div>
      <div className="movieOverview">
        <h2>{name}</h2>
        <p>{description}</p>
        <Link to={`/moviedetail/${id}`}>
          <button type="button">View</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieItem;
