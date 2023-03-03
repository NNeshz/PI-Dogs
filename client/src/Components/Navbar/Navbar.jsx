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
  handleSortByWeight
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
          <button onClick={(e) => handleClick(e)} className="navbarButtonParent">Reload</button> {/* RECARGAR LA PAGINA */}

          <select onChange={(e) => handleFilterByTemperament(e)} className="navbarSelectParent"> {/* FILTRO DE TEMPERAMENTOS */}
            <option value="All">All</option>
            {allTemperaments.map((temp) => (
              <option key={temp.name} value={temp.name}>
                {temp.name}
              </option>
            ))}
          </select>

          <select onChange={(e) => handleFilterByCreated(e)} className="navbarSelectParent"> {/* FILTRO DE DB Y API */}
            <option value="All">All</option>
            <option value="Created">Created</option>
            <option value="API">API</option>
          </select>

          <select onChange={(e) => handleSortByName(e)} className="navbarSelectParent"> {/* ORDEN ALFABETICO */}
            <option value="All">All</option>
            <option value="Asc">A - Z</option>
            <option value="Desc">Z - A</option>
          </select>

          <select onChange={(e) => handleSortByWeight(e)} className="navbarSelectParent"> {/* ORDEN DE PESO*/}
            <option value="All">All</option>
            <option value="Asc">Light</option>
            <option value="Desc">Heavy</option>
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
