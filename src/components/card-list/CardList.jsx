import Card from "../card/Card";
import "./CardList.css";

const CardList = ({ monsters }) => {
  
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monsters={monster} />;
        })}
      </div>
    );
  }


export default CardList;
