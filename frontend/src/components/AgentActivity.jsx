function AgentActivity({ agents }) {
  if (!agents) {
    return null;
  }

  const agentList = [
    ["mandi", "📊 Mandi Price Agent"],
    ["buyers", "🤝 Buyer Matching Agent"],
    ["storage", "🏪 Storage Advisor Agent"],
    ["quality", "🌱 Quality Grading Agent"],
    ["income", "💰 Income Agent"]
  ];

  return (
    <div className="agent-activity">
      <h2>AI Agent Analysis</h2>

      {agentList.map(([key, name]) => (
        <div className="agent-item" key={key}>
          <h3>{name}</h3>

          <p>
            {agents[key]
              ? "Analysis completed successfully."
              : "Waiting for analysis..."}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AgentActivity;
