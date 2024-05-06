import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slider1 from "../../images/slider1.jpg"
import Slider2 from "../../images/slider2.jpg"
import Carouselim from '../../Component/HomeCarousel/Carouselim';
import Slider3 from "../../images/news3.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import avatar1 from "../../images/avatar1.png"
import avatar2 from "../../images/avatar2.png"
import avatar3 from "../../images/avatar3.png"
import avatar4 from "../../images/avatar4.png"
import "./style.css";
import heart from "../../images/heart.png"
import heart2 from "../../images/herat2.png"
import acc from "../../images/text.png"

function Home() {
  const sliderImgs = [Slider1, Slider2, Slider3]

  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <Carouselim sliderImgs={sliderImgs[0]} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carouselim sliderImgs={sliderImgs[1]} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carouselim sliderImgs={sliderImgs[2]} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Row className='rowBox'>
        <Col xs={12} >
          <div className='module1'>
            <div className='avatarBox'>
              <img src={avatar1} alt="man" />
            </div>
          </div>
          <div className='avatarBox2'>
            <img src={heart} alt="heart" className='ms-3' />
            <img src={acc} alt="heart" className='ms-3' />
          </div>
          <div>
            <p className='text-start yazim'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, eveniet.</p>
          </div>
        </Col>
        <Col xs={12}>
          <div className='module2'>
            <div className='avatarBox'>
              <img src={avatar2} alt="man" />
            </div>
          </div>
          <div className='avatarBox2'>
            <img src={heart2} alt="heart" className='ms-3' />
            <img src={acc} alt="heart" className='ms-3' />
          </div>
          <div>
            <p className='text-start yazim'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, eveniet.</p>
          </div>
        </Col>
        <Col xs={12}>
          <div className='module3'>
            <div className='avatarBox'>
              <img src={avatar3} alt="man" />
            </div>
          </div>
          <div className='avatarBox2'>
            <img src={heart2} alt="heart" className='ms-3' />
            <img src={acc} alt="heart" className='ms-3' />
          </div>
          <div>
            <p className='text-start yazim'>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, eveniet.</p>
          </div>
        </Col>
        <Col xs={12}>
          <div className='module4'>
            <div className='avatarBox'>
              <img src={avatar4} alt="man" />
            </div>
          </div>
          <div className='avatarBox2'>
            <img src={heart} alt="heart" className='ms-3' />
            <img src={acc} alt="heart" className='ms-3' />
          </div>
          <div>
            <p className='text-start yazim'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, eveniet.</p>
          </div>
        </Col>
      </Row>
    </div>

  )
}

export default Home