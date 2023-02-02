import Card from '../Card/Card.component';
import { Robot } from '../../App';
import "./cardList.styles.css"
type CardListProps = {
  robots:Array<Robot>
}
const CardList =({robots}:CardListProps)=> (
    <div className='card-list'>
      {
        robots.map((robot) => {
          return (
            <Card
            key={robot.id}
              robot ={robot}
              />
          );
        })
      }
    </div>
  );

export default CardList;