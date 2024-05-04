import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";
import HomeImg from "../../images/home.png"
import FormImg from "../../images/form.png"
import ProfileImg from "../../images/man.png"
import MachineImg from "../../images/machine.png"

function Akis() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='bottomBox'>
                        <div><img src={HomeImg} alt='Home'/></div>
                        <div>Anasayfa</div>
                    </div>
                </Col>
                <Col>
                    <div className='bottomBox'>
                        <div><img src={FormImg} alt='Forum'/></div>
                        <div>Forum</div>
                    </div>
                </Col>
                <Col>
                    <div className='bottomBox'>
                        <div><img src={MachineImg} alt='Makine'/></div>
                        <div>Makine</div>
                    </div>
                </Col>
                <Col>
                    <div className='bottomBox'>
                        <div><img src={ProfileImg} alt='Profil'/></div>
                        <div>Profil</div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Akis