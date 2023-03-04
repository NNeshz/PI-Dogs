import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  getDogs,
  getTemeraments,
  filterByCreated,
  filterByTemperament,
  orderByName,
  orderByWeight
} from "../../redux/Actions";

import Card from "../../Components/Card/Card";
import Navbar from "../../Components/Navbar/Navbar";
import Paginado from "../../Components/Paginado/Paginado";

import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexLastDog = currentPage * dogsPerPage;
  const indexFirstDog = indexLastDog - dogsPerPage;
  const currentDogs = allDogs?.slice(indexFirstDog, indexLastDog);

  const paginado = (numeroDePagina) => {
    setCurrentPage(numeroDePagina);
  };

  useEffect(() => {
    dispatch(getTemeraments());
    dispatch(getDogs());
  }, [dispatch]);

  function handleClick(e) {
    dispatch(getDogs());
  }

  function handleFilterByTemperament(e) {
    dispatch(filterByTemperament(e.target.value));
  }

  function handleFilterByCreated(e) {
    dispatch(filterByCreated(e.target.value));
  }

  function handleSortByName(e) {
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Orden ${e.target.value}`);
  }

  function handleSortByWeight(e) {
    dispatch(orderByWeight(e.target.value));
    setCurrentPage(1);
    setOrden(`Orden ${e.target.value}`);
  }

  return (
    <div>
      <Navbar
        handleClick={handleClick}
        handleFilterByTemperament={handleFilterByTemperament}
        handleFilterByCreated={handleFilterByCreated}
        handleSortByName={handleSortByName}
        handleSortByWeight={handleSortByWeight}
      />
      <div className="homeContainerCards">
        {currentDogs.length ? (
          currentDogs.map((dog) => {
            return (
              <Link to={"/dogs/" + dog.id} key={dog.id}>
                <Card
                  id={dog.id}
                  name={dog.name}
                  temperaments={dog.temperaments}
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
      <Paginado
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        paginado={paginado}
      />
    </div>
  );
}
