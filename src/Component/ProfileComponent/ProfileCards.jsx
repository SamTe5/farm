import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function ProfileCards({ profileImgs }) {

    return (
        <Row>
            {profileImgs.map((imageUrl) => (

                <Col xs={4} className='px-0'>
                    <Card style={{ width: "%100", padding:0,margin:0 }}>
                        <Card.Img variant="top" style={{
                            backgroundImage: `url(${imageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '100%',
                            height: '200px', // Adjust the height as needed
                            borderRadius: '8px', // Optional: Add border radius
                        }} />
                       
                    </Card>
                    

                </Col>
            ))}
        </Row>

    )
}

export default ProfileCards