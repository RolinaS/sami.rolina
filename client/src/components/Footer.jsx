import {Container, Row, Col, Nav} from "react-bootstrap"
import { Link } from 'react-router-dom';

export default function Footer(){

    const footerStyle = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#f1f1f1',
        textAlign: 'center',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
      };

    return(
<<<<<<< HEAD
        <footer style={{position: 'fixed', bottom: '0', width: '100%'}}>
=======
        <footer style={footerStyle}>
>>>>>>> 4ad9ca4b4f69b84f19e4003e569b184c4206dc2d
            < Container fluid>
                <Row className="bg-primary text-white p-4">
                    <Col className="mx-5">
                        <image 
                            src="https://www.police-nationale.net/wp-content/uploads/2024/02/logo-gendarmerie-nationale-banniere.jpg"
                            alt="Gendarmerie nationale"     
                            width={150}
                            height={150}
                        />
                        <h2>Gendarmerie nationale</h2>
                        <p>Une force humaine</p>
                    </Col>
                    <Col>
                        <Nav className="flex-column fs-5">
                            <Link to="/" className="text-white" style={{textDecoration: 'none'}}>Accueil</Link>
                            <Link to="/gendarmes" className="text-white" style={{textDecoration: 'none'}}>Gendarmes</Link>
                            <Link to="/sous-officier" className="text-white" style={{textDecoration: 'none'}}>Sous-officier</Link>
                        </Nav>
                    </Col>
                    <Col>
                        <h4>Contactez moi !</h4>
                        <p>sami.rolina@outlook.fr</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}