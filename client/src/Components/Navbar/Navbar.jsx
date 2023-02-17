import Logo from "../../images/LogoDogs.png";

import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">
          <img src={Logo} alt="Bark Avenue Logo" />
        </Link>
      </div>
      <div className="selectNavoptions">
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

      <SearchBar/>

      <Link to='/create'>
        Create a Dog
      </Link>
    </nav>
  );
}

export default Navbar;
