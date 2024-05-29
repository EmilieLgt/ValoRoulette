/* eslint-disable react/prop-types */
function AvatarAgents({ agentsList, removeAgent, setSelectedAgentIndex }) {
  const handleAvatarClick = (agentId) => {
    removeAgent(agentId);
    setSelectedAgentIndex(null); // Ne pas mettre à jour l'index de l'agent sélectionné
  };

  if (!agentsList || agentsList.length === 0) {
    return <p className="error-message">No ban yet</p>;
  }

  return (
    <>
      {agentsList.map((agent) => (
        <img
          key={agent.name}
          onClick={() => handleAvatarClick(agent.id)} // Utilisez la nouvelle fonction handleAvatarClick
          className="avatarCarre"
          src={agent.avatar}
          alt={agent.name}
        />
      ))}
    </>
  );
}

export default AvatarAgents;