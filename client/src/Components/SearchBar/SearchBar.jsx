import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogByName } from '../../redux/Actions';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getDogByName(name))
  }

  return (
    <form onClick={(e) => handleSubmit(e)}>
      <input 
        type="text"
        placeholder='Search'
        onChange={(e) => handleInputChange(e)}/>
      <button type='submit'>Search</button>
    </form>
  )
}