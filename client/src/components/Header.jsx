import React from 'react';
import {Container, Row, Col, Stack, Image, Nav, NavLink} from "react-bootstrap"
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header>
        < Container fluid>
            <Row className="bg-primary text-white p-4">
                <Col className="mx-5">
                    <image 
                        src="https://www.police-nationale.net/wp-content/uploads/2024/02/logo-gendarmerie-nationale-banniere.jpg"
                        alt="Gendarmerie nationale"
                        rounded
                        width={150}
                        height={150}
                    />
                    <h2>CAG CAT SOC</h2>
                </Col>
            </Row>
            <Row className="bg-primary text-white p-4">
                <nav className="container mx-auto">
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="    text-white"style={{textDecoration: 'none'}} >Accueil</Link>
                        </li>
                        <li>
                            <Link to="/gendarmes" className=" text-white" style={{textDecoration: 'none'}}>GD</Link>
                        </li>
                        <li>
                            <Link to="/sous-officier" className=" text-white" style={{textDecoration: 'none'}}>SOG</Link>
                        </li>
                    </ul>
                </nav>
            </Row>
        </Container>
    </header>
    )
}