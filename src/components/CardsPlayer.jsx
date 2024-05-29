/* eslint-disable react/prop-types */


function CardsPlayer ({indexAgent, agentsList}){
  if (!agentsList[indexAgent]) {
    return null; // Renvoie null si l'agent n'existe pas
  }
  return (
    <div className='card' >
      <h2>{agentsList[indexAgent].name}</h2> 
      <div className="cardElements">
      <img className="imageAgent" src={agentsList[indexAgent].image} alt={agentsList[indexAgent].name} />
      <button> <a target="blank" href={agentsList[indexAgent].link}>HELP
      </a></button>
      </div>
    </div>
  );
}

export default CardsPlayer;