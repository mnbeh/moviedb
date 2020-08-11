import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './searchBar.css';

const SearchBar = () => {
  const history = useHistory();
  const [input, setInput] = useState('');

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    setInput('');
    history.push(`/search/${input}`);
  };

  return (
      <form onSubmit={onSearch}>
        <input required
          placeholder="Enter the movie title"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button className="button">
          Find
        </button>
      </form>
  );
};

export default SearchBar;
