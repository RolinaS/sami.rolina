import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

export default function Ajout() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/ajout/gendarmes', { nom, prenom, grade });
      alert(response.data);
    } catch (error) {
      console.error('Error adding item:', error);
      alert('Failed to add item');
    }
  };

  return (
    <Container>
      <h1>Ajout</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formNom">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrenom">
          <Form.Label>Prenom</Form.Label>
          <Form.Control
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGrade">
          <Form.Label>Grade</Form.Label>
          <Form.Control
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ajouter
        </Button>
      </Form>
    </Container>
  );
}