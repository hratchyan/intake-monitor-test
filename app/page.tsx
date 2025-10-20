export default function HomePage() {
  const sources = [
    { name: 'Lilt', status: 'green' },
    { name: 'Salesforce', status: 'green' },
    { name: 'Intaker', status: 'yellow' },
    { name: 'Other Source', status: 'red' },
  ];

  return (
    <main className="main">
      <header className="header">
        <h1>Lead Flow Uptime Monitor</h1>
        <p>Real-time status of lead intake sources.</p>
      </header>
      
      <div className="dashboard">
        {sources.map((source) => (
          <div key={source.name} className="card">
            <div className="cardHeader">
              <h2 className="sourceName">{source.name}</h2>
              <div className={`statusIndicator ${source.status}`}></div>
            </div>
            <div className="cardBody">
              <p>Last check: Just now</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
