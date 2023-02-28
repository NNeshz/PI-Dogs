import "./Card.css";

function Card({ name, temperaments, image, weight }) {
  return (
    <div className="cardContainer">
      <img src={image} alt="" className="dogImage" />
      <h3>{name}</h3>
      <div className="cardTemperament">
        {temperaments?.map((temp) => {
          return (
            <div key={temp} className="cardTemperamentItem">
              {temp}
            </div>
          );
        })}
      </div>
      <p>
        {weight} Kilos
      </p>
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