import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import './movies.css';

import MovieItem from './movieItem';

const Movies = ({ getData }) => {
  const movies = useFetchMovies(getData);
  return (
    <div className="movies">
      {movies.map((item) => (
        <MovieItem key={item.id} {...item} />
      ))}
    </div>
  );
};

const useFetchMovies = (apiMethod) => {
  const [movies, setMovies] = useState([]);
  const { params } = useRouteMatch();

  useEffect(() => {
      apiMethod(params.query).then((films) => setMovies(films));
  }, [apiMethod, params.query]);

  return movies;

}

export default Movies;
