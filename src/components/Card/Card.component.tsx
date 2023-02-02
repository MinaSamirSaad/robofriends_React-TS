import { Robot } from "../../App";
import "./Card.styles.css"
type CardProps= {
  robot:Robot
}
const Card = ({ robot}:CardProps) => {
  return (
    <div className='card-container'>
      <img alt='robots' src={`https://robohash.org/${robot.id}?size=200x200`} />
      <div>
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
      </div>
    </div>
  );
}

export default Card;
