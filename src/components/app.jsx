import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './app.css';

import SearchBar from './searchBar';
import MovieOverview from './movieOverview';
import Movies from './movies';
import MovieApi from '../services/movieApi';

const App = () => {
  const api = new MovieApi();
  return (
    <Router>
      <div className="App">
        <div className="Navbar">
          <Link to="/"><h1>Home</h1></Link>
          <SearchBar />
        </div>
        <Route path="/" exact render={() => <Movies getData={api.getPopularMovies} />} />
        <Route path="/search/:query">
          <Movies getData={api.searchMoviesByName} />
        </Route>
        <Route path="/moviedetail/:id">
          <MovieOverview />
        </Route>
      </div>
    </Router>
  );
};

export default App;
