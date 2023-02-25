import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogByName } from '../../redux/Actions';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault()
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getDogByName(name))
  }

  return (
    <form>
      <input 
        type="text"
        placeholder='Search'
        onChange={(e) => handleInputChange(e)}/>
      <button type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
    </form>
  )
}