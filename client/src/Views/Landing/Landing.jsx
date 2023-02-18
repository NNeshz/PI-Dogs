import { Link } from "react-router-dom";
import Logo from "../../images/LogoDogs.png";

import "./Landing.css";

function Landing() {
  return (
    <div className="landingMainContainer">
      <div className="landingContainer">
        <img src={Logo} alt="Bark Avenue Logo" className="landingLogoImg" />
        <h2 className="landingMainTitle">
          Conoce a tu futuro
          <br />
          mejor amigo 
        </h2>
        <p className="landingInfo">
          ¿Todavía no sabes que amiguito te gustaría tener? Nosotros te
          <br />
          podemos ayudar con esa duda, te mostramos una pagina
          <br />
          con las caracteristicas de cada raza de perro para
          <br />
          que tengas a tu mejor amigo cerca de ti
        </p>
        <div className="landingLaunchButton">
          <p>¿Estás listo?</p>
          <Link to="/dogs">Iniciar</Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
