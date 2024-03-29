function AvatarAgents({ agentsList, setIdAgentToDelete }) {
  console.log("agent list ", agentsList);

  return (
    <>
      {agentsList.map((agent) => (
        <img
          key={agent.name}
          onClick={() => setIdAgentToDelete(agent.id)}
          className="avatarCarre"
          src={agent.avatar}
          alt={agent.name}
        />
      ))}
    </>
  );
}

export default AvatarAgents;
