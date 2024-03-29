import React from 'react';

const CardPlayer = ({agent}) => {
  return (
    <div className="card">
      <img className="imageAgent"src={agent.image} alt={agent.name} />
      <h2>{agent.name}</h2>
      <img className="gifAgent"src={agent.gif}/>
    </div>
  );
}

export default CardPlayer