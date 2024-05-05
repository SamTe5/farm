import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileImg from "../../images/man.png"

function Profile() {
  return (
    <div >
      <Row  className='justify-content-center'>
        <Col xs={4} className='text-center'>
          <div>
            <img src={ProfileImg} alt="Profil Resmi" />
          </div>          
        </Col>
      </Row>
    </div>
  )
}

export default Profile