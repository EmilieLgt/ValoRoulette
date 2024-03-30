import React from 'react';
import { useState } from "react";


function CardsPlayer ({indexAgent, agentsList}){
  if (!agentsList[indexAgent]) {
    return null; // Renvoie null si l'agent n'existe pas
  }
  return (
    <div className='card' >
      <h2>{agentsList[indexAgent].name}</h2> 
      <div className="cardElements">
      <img className="imageAgent"src={agentsList[indexAgent].image} alt={agentsList[indexAgent].name} />
      
      <img className="gifAgent"src={agentsList[indexAgent].gif}/>
      </div>
    </div>
  );
}

export default CardsPlayer;