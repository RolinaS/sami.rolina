import {Container, Row, Col, Nav} from "react-bootstrap"
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <footer style={{position: 'fixed', bottom: '0', width: '100%'}}>
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