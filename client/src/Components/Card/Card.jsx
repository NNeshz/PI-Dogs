import "./Card.css";

import { useDispatch } from "react-redux"

import { deleteDog } from "../../redux/Action"

function Card({ id, name, temperaments, image, weight }) {
  const dispatch = useDispatch();
  
  return (
    <div className="cardContainer">
      <img src={image} alt="" className="dogImage" />
      <h3 className="cardName">{name}</h3>
      <div className="cardTemperament">
        {temperaments?.map((temp) => {
          return (
            <div key={temp} className="cardTemperamentItem">
              {temp}
            </div>
          );
        })}
      </div>
      <p>{weight} Kilos</p>
      <button onClick={deleteDog(id)}>X</button>
    </div>
  );
}

export default Card;

// {temperaments?.map((temp) => {
//   return (
//     <div key={temp?.name || temp} className="cardTemperamentItem">
//       {temp?.name || temp}
//     </div>
//   );
// })}
