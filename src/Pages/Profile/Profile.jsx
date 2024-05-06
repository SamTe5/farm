import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import ProfileImg from "../../images/man.png"
import ProfileCards from '../../Component/ProfileComponent/ProfileCards';

function Profile() {
  const profileImgs=[img1,img2,img3,img4,img5]
  
  return (
    <div >
      <Row  className='justify-content-center m-0'>
        <Col xs={4} className='text-center pt-5'>
          <div>
            <img src={ProfileImg} alt="Profil Resmi" />
          </div> 
          <div><p>Ali Karaman</p></div>         
        </Col>
        <Col xs={12}>
          <Row>
            <Col xs={4}><b>Ağaç Sayısı</b></Col>
            <Col xs={4}><b>Sebze Sayısı</b></Col>
            <Col xs={4}><b>Toplam Alan</b></Col>
            <Col xs={4}><p>40</p></Col>
            <Col xs={4}><p>120</p></Col>
            <Col xs={4}><p>8</p></Col>
            
          </Row>
          <hr/>
        </Col>
        <Col xs={12}>
          <ProfileCards profileImgs={profileImgs}/>
        </Col>
      </Row>
    </div>
  )
}

export default Profile