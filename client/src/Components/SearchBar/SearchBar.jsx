import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogByName } from '../../redux/Actions' 

import './SearchBar.css'

function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.name)
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getDogByName(name))
  }

    return (
      <form className="searchBarMainContainer" onSubmit={(e) => handleSubmit(e)}>
        <input 
        type="text"
        placeholder="Busca una raza"
        onChange={(e) => handleInputChange(e)}
        />
        <button className="searchBarButton" type="submit">Buscar</button>
      </form>
    );
  }
  
  export default SearchBar;