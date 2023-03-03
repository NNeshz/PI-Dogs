import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postDog, getTemeraments } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import validate from "./Validate"

import "./Form.css"

function Form() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const [errors, setErrors] = useState({})

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
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
    // console.log(input); PARA DEBUGGERAR
  }
  
  function handleSelect(e) {
    setInput({
      ...input,
      temperaments: [...input.temperaments, e.target.value],
    });
    // console.log(input); PARA DEBUGGERAR
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
      e.preventDefaul()
      return;
    }
    dispatch(postDog(input));
    alert("Perro creado")

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
    <div className="formMainContainer">
      <Link to="/dogs">
        <button>Regresar</button>
      </Link>
      <div className="formContainer">
      <div className="formTitle">Crea un nuevo mejor amigo</div>
      <div className="formInputs">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <div className="formDivGeneral">
          <label className="formLabelGeneral">Nombre</label>
          <input
            type="text"
            placeholder="Nombre..."
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label className="formLabelGeneral">Imagen</label>
          <input
            type="text"
            placeholder="Image..."
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
            />
            {errors.image && <p>{errors.image}</p>}
        </div>
        <div className="formDivGeneral">
          <label className="formLabelGeneral">Min & Max Height:</label>
          <input
            type="text"
            placeholder="Min Height..."
            name="height"
            onChange={(e) => handleChange(e)}
            />
            {errors.height && <p>{errors.height}</p>}
        </div>
        <div className="formDivGeneral">
          <label className="formLabelGeneral">Min & Max Weight:</label>
          <input
            type="text"
            placeholder="Min Weight..."
            name="weight"
            onChange={(e) => handleChange(e)}
            />
            {errors.weight && <p>{errors.weight}</p>}
        </div>
        <div className="formDivGeneral">
          <label className="formLabelGeneral">Min & Max Life:</label>
          <input
            type="text"
            placeholder="Min Life..."
            name="lifeSpan"
            onChange={(e) => handleChange(e)}
            />
            {errors.lifeSpan && <p>{errors.lifeSpan}</p>}
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
      </div>
    </div>
  );
}

export default Form;
