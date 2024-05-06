import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../images/farmer.png"
import "./style.css";

function Navbarim() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-white">
      <Container>
        <Navbar.Brand href="/Home">
          <div className='logo'>
            <img src={logo} alt="logo" style={{ width: '40px' }} />
            <p>Çiftçi</p>
          </div>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Meyveler</Nav.Link>
            <Nav.Link href="#pricing">Sebzeler</Nav.Link>
            <NavDropdown title="İlaçlama" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">İlaç Kullanımı</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Haşereler
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Zamanlama</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Ekim Zamanı</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Hakkında
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  )
}

export default Navbarim