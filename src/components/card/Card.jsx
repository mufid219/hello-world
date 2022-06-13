import "./Card.css";

const Card = ({ monsters }) => {
  const { id, name, email } = monsters;
  return (
    <div className="card-container" key={id}>
      <img src={`https://robohash.org/${id}?set=set2`} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
