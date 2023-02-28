import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postDog, getTemeraments } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  const [input, setInput] = useState({
    image: "",
    name: "",
    height: "",
    weight: "",
    lifeSpan: "",
    temperaments: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }
  
  function handleSelect(e) {
    setInput({
      ...input,
      temperaments: [...input.temperaments, e.target.value],
    });
    console.log(input);
  }

  function handleSubmit(e) {
    if (
      !input.name ||
      !input.height ||
      !input.weight ||
      !input.lifeSpan ||
      !input.image ||
      input.temperaments.length === 0
    ) {
      alert("Por favor complete todos los campos");
      return;
    }
    dispatch(postDog(input));

    setInput({
      name: "",
      image: "",
      height: "",
      weight: "",
      lifeSpan: "",
      temperaments: [],
    });
  }

  useEffect(() => {
    dispatch(getTemeraments());
  }, [dispatch]);

  return (
    <div>
      <Link to="/dogs">
        <button>Regresar</button>
      </Link>
      <h1>Crea un nuevo mejor amigo</h1>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Nombre..."
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Imagen</label>
          <input
            type="text"
            placeholder="Image..."
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Min & Max Height:</label>
          <input
            type="text"
            placeholder="Min Height..."
            name="height"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Min & Max Weight:</label>
          <input
            type="text"
            placeholder="Min Weight..."
            name="weight"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Min & Max Life:</label>
          <input
            type="text"
            placeholder="Min Life..."
            name="lifeSpan"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <select name="temperaments" onChange={handleSelect}>
          {temperaments.map((temp) => (
            <option value={temp.name} key={temp.name}>
              {temp.name}
            </option>
          ))}
        </select>
        <ul>
          { 
            input.temperaments?.map((e) => (
              <div key={e}>{e}</div>
            ))
          }
        </ul>
        <button type="submit">Crear Perro</button>
      </form>
    </div>
  );
}

export default Form;
