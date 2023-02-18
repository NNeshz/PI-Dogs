import Logo from "../../images/LogoDogs.png";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbarMainContainer">
      <div className="navbarImage">
        <Link to="/">
          <img src={Logo} alt="Bark Avenue Logo" className="navImageLogo" />
        </Link>
      </div>
      <div className="navbarButtons">
        <div className="selectNavOptions">
          <button>🔄</button>

          <select name="" id="">
            <option value="">Temperamentos</option>
          </select>

          <select name="" id="">
            <option value="">Origen</option>
          </select>

          <select name="" id="">
            <option value="">Ordenamiento</option>
          </select>
        </div>

        <SearchBar />

        <Link to="/create" className="navCreateButton">Create a Dog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
