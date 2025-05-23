import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);

  const generateIdea = async () => {
    setLoading(true);
    const res = await axios.get('/api/idea');
    setIdea(res.data.idea);
    setLoading(false);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>IdeaSupremacy</h1>
      <p>Generate better app ideas than your colleagues!</p>
      <button onClick={generateIdea} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Idea'}
      </button>
      {idea && <div style={{ marginTop: 20 }}><strong>Idea:</strong> {idea}</div>}
    </div>
  );
}

export default App;
