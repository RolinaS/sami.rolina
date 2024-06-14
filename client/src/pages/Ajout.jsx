import { useState } from 'react';
import axios from 'axios';

export default function Ajout() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/ajout/gendarmes', {nom, prenom, grade });
      alert(response.data);
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Failed to add item');
    }
  };

  return (
    <div>
      <h1>Ajout</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Prenom:
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Grade:
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
