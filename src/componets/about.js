/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col, Image } from "react-bootstrap";
import { MDBBtn } from "mdbreact";

import profile from '../assets/images/me.jpg'
const About = () => {
  return (
    <section id="about">
      <Container>
        <h2 className="text-center" data-aos="fade-left">
          <span style={{marginTop:20}}>About</span> Me
        </h2>
        <hr />
        <Row>
          <Col sm={6}>
            <div style={{marginTop:20}}>
              <img
              src={profile}
              width="560"
              height="300"
            />
            </div>
          </Col>

          <Col sm={6}>
           <h2 className="text-center">About me </h2>
           <p className="text-center">
            I'm Juuko Henry a web developer/Mobile applicatin developer 
            based in Tropics of Kampala, Uganda.
            </p>
            <p>

            I enjoy turning complex problems into simple, beautiful and 
            intuitive solutions. When I'm not pushing pixels, 
            you 'll find me listening to music, gardening,gaming or working out 
            </p>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default About;
