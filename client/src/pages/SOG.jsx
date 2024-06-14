// src/pages/Homme.jsx
import { useEffect, useState } from 'react';

export default function SOG() {
  const [gendarmes, setGendarmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGendarmes = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/sous-officier');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Received non-JSON response");
        }
        const data = await response.json();
        setGendarmes(data);
        setLoading(false);
      } catch (error) {
        console.error('Fetch error:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchGendarmes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Liste des gendarmes</h1>
      <ul>
        {gendarmes.map((sog) => (
          <li key={sog.id}>
            {sog.nom} {sog.prenom} | {sog.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}
