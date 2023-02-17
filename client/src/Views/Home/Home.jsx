import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getDogs } from "../../redux/Actions";

import Card from "../../Components/Card/Card";
import Navbar from "../../Components/Navbar/Navbar";
import Paginado from "../../Components/Paginado/Paginado";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexLastDog = currentPage * dogsPerPage;
  const indexFirstDog = indexLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexFirstDog, indexLastDog)

  const paginado = (numeroDePagina) => {
    setCurrentPage(numeroDePagina)
  }

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Paginado 
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        paginado={paginado}
      />
      <div>
        {currentDogs.length ? (
          currentDogs.map((dog) => {
            return (
              <Link to={"/dogs" + dog.id} key={dog.id}>
                <Card
                  name={dog.name}
                  temperament={dog.temperament}
                  image={dog.image}
                  weight={dog.weight}
                />
              </Link>
            );
          })
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}
