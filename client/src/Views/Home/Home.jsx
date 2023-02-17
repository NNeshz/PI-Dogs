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

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Paginado />
      <div>
        {allDogs.length ? (
          allDogs.map((dog) => {
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
