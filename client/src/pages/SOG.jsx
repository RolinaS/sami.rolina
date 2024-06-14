// src/pages/Homme.jsx
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

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
      <h1>Liste des sous-officiers</h1>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Prenom</th>
            <th>Nom</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
        {gendarmes.map((sog) => (
          <tr key={sog.id}>
            <td>{sog.id}</td>
            <td>{sog.prenom}</td>
            <td>{sog.nom}</td>
            <td>{sog.grade}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  );
}
