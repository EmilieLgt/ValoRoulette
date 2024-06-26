/* eslint-disable react/prop-types */
function AvatarAgents({ agentsList, removeAgent }) {
  const handleAvatarClick = (agentId) => {
    removeAgent(agentId); // Ne pas mettre à jour l'index de l'agent sélectionné
  };

  if (!agentsList || agentsList.length === 0) {
    return <p className="error-message">No ban yet</p>;
  }

  return (
    <>
      {agentsList.map((agent) => (
        <div
          key={agent.name}
          className="avatar-container"
          onClick={() => handleAvatarClick(agent.id)}
        >
          <img src={agent.avatar} alt={agent.name} className="avatarCarre" />
          <div className="avatarCarre-hover-img"> X</div>
        </div>
      ))}
    </>
  );
}

export default AvatarAgents;
