import './SearchBar.css'

function SearchBar() {
    return (
      <div className="searchBarMainContainer">
        <input type="text" placeholder="Busca una raza"/>
        <button className="searchBarButton">Buscar</button>
      </div>
    );
  }
  
  export default SearchBar;