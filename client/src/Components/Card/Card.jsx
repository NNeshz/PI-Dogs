function Card({name, temperament, image, weight}) {
  return (
    <div>
      <img src={image} alt=""/>
      <h3>{name}</h3>
      <p>{temperament.map((e) => e + " ")}</p>
      <p>{weight[0]} - {weight[1]}</p>
    </div>
  );
}

export default Card;
