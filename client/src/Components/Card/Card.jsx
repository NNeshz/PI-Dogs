import './Card.css'

function Card({name, temperament, image, weight}) {
  return (
    <div className='cardContainer'>
      <img src={image} alt="" className='dogImage'/>
      <h3>{name}</h3>
      <div className='cardTemperament'>{temperament.map((e) => {
        return <div key={e} className='cardTemperamentItem'>{e}</div>
      })}</div>
      <p>{weight[0]} - {weight[1]} Kilos</p>
    </div>
  );
}

export default Card;
