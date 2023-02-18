import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Logo from "../../images/LogoDogs.png";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.css";

function Navbar({
  handleClick,
  handleFilterByTemperament,
  handleFilterByCreated,
  handleSortByName,
}) {
  const allTemperaments = useSelector((state) => state.temperaments);

  return (
    <nav className="navbarMainContainer">
      <div className="navbarImage">
        <Link to="/">
          <img src={Logo} alt="Bark Avenue Logo" className="navImageLogo" />
        </Link>
      </div>
      <div className="navbarButtons">
        <div className="selectNavOptions">
          <button onClick={(e) => handleClick(e)}>🔄</button> {/* RECARGAR LA PAGINA */}

          <select onChange={(e) => handleFilterByTemperament(e)}> {/* FILTRO DE TEMPERAMENTOS */}
            <option value="All">All</option>
            {allTemperaments.map((temp) => (
              <option key={temp.name} value={temp.name}>
                {temp.name}
              </option>
            ))}
          </select>

          <select onChange={(e) => handleFilterByCreated(e)}> {/* FILTRO DE DB Y API */}
            <option value="All">All</option>
            <option value="Created">Created</option>
            <option value="API">API</option>
          </select>

          <select onChange={(e) => handleSortByName(e)}> {/* ORDEN ALFABETICO */}
            <option value="All">All</option>
            <option value="Asc">A - Z</option>
            <option value="Desc">Z - A</option>
          </select>
        </div>

        <SearchBar />

        <Link to="/create" className="navCreateButton">
          Create a Dog
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
