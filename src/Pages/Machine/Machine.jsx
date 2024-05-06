import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./style.css";

function Machine() {
  return (
    <div>
      <div><p>Sahip Olunan Ürünler</p></div>
      <div>
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="home" title="Meyveler">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Elma</Accordion.Header>
                <Accordion.Body>
                  Mayıs ayından itibaren yapılan kontrollerle Elma pamuklu biti kolonileri oluşunca ve bu koloniler %10 oranında sürgünde saptanınca ilaçlama yapılır. Yeni bulaşmalar olduğu takdirde 15 gün sonra ilaçlama tekrar edilir.
                  <h2>İlaçlamaya Kalan Süre</h2>
                  <div className='cicekA'>
                    <p>Çiçek açmadan Önce:</p>
                    <ProgressBar animated now={90} />
                    <div class="wrapper">
                      <div class="bg">5 Gün </div>
                      <div class="fg">5 Gün </div>
                    </div>
                  </div>
                  <div className='cicekA'>
                    <p>Çiçekler Döküldüğünde:</p>
                    <ProgressBar animated now={70} />
                    <div class="wrapper">
                      <div class="bg">26 Gün </div>
                      <div class="fg">26 Gün </div>
                    </div>
                  </div>
                  <div className='cicekA'>
                    <p>Toplama Yapılmadan Önce</p>
                    <ProgressBar animated now={45} />
                    <div class="wrapper">
                      <div class="bg">52 Gün </div>
                      <div class="fg">52 Gün </div>
                    </div>
                  </div>

                  
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Kiraz</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Tab>
          <Tab eventKey="profile" title="Sebzeler">
            Tab content for Profile
          </Tab>
        </Tabs>
      </div>
      <div>Makine İlaç Durumu</div>
      <div>
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="home" title="Önleyici">
            Tab content for Home
          </Tab>
          <Tab eventKey="profile" title="Azaltıcı">
            Tab content for Profile
          </Tab>
          <Tab eventKey="longer-tab" title="Yok Edici">
            Tab content for Loooonger Tab
          </Tab>
          <Tab eventKey="contact" title="Uzaklaştıcı">
            Tab content for Contact
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Machine