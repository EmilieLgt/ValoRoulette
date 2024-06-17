/* eslint-disable react/prop-types */
function AvatarAgents({ agentsList, removeAgent, setSelectedAgentIndex }) {
  const handleAvatarClick = (agentId) => {
    removeAgent(agentId);
    setSelectedAgentIndex(null); // Ne pas mettre à jour l'index de l'agent sélectionné
  };

  return (
    <>
      {agentsList && agentsList.length > 0
        ? agentsList.map((agent) => (
            <div
              key={agent.name}
              className="avatar-container"
              onClick={() => handleAvatarClick(agent.id)}
            >
              <img
                src={agent.avatar}
                alt={agent.name}
                className="avatarCarre"
              />
            </div>
          ))
        : null}
    </>
  );
}

export default AvatarAgents;
