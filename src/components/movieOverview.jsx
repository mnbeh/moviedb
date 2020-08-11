/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './movieOverview.css';

import MovieApi from '../services/movieApi';

const MovieOverview = () => {
  const [movie, setMovie] = useState({});
  const api = new MovieApi();
  const { id } = useParams();

  useEffect(() => {
    api.getMovieDetails(id).then((film) => setMovie(film));
  }, [id]);

  return (
    <div className="movie-overview">
      <h1>{movie.name}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${movie.poster}`} alt="movie" />
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieOverview;
