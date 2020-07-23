import React, { Component } from 'react';
import Header from './header.js'
import Footer from './footer.js'
import './About.css';
import { Card } from 'react-bootstrap'
// This defines how the component will be
class About extends Component {

  componentDidMount() {
  }

//this is what user sees 
//needs to be in html
//jsx part
  render() {

    return (
      <div>
        < Header />
        <div className="aboutusWrapper">
          <Card style={{ width: '28rem' }}>
            <Card.Img className="teamImage" img src="../img/km.png" alt ="" />
            <Card.Body>
              <Card.Title>
                <div className="teamName">Kate Mangubat</div>
              </Card.Title>
                <div className="teamDetails">
                  Kate aspires to become a Principal Senior Software Engineer to support her entire coffee problem.
                </div>
            </Card.Body>
          </Card>


          <Card style={{ width: '28rem' }}>
            <Card.Img className="teamImage" img src="../img/ai.png" alt ="" />
            <Card.Body>
              <Card.Title>
                <div className="teamName">Antonia Irizarry</div>
              </Card.Title>
                <div className="teamDetails">
                Antonia spends her day drinking dark coffee and ruining her already bad posture in front of the computer. During sunny days, she goes on walks with her family (and picks up coffee along the way).
                </div>
            </Card.Body>
          </Card>
        </div>
        < Footer />
      </div>
    );
  }


}//class

About.propTypes = {

};

export default About;
