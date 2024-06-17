export default function AvatarPrevious({ lastAgents, agentsList }) {
  return (
    <div className="previous-container">
      {" "}
      {lastAgents.length > 0 ? (
        <>
          <h3>Previous picks</h3>
          <div className="avatar-previous-container">
            {lastAgents.map((index) => (
              <div className="avatar-previous" key={agentsList[index].id}>
                <img
                  src={agentsList[index].avatar}
                  alt={agentsList[index].name}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}
