import { Container, Row, Col } from "react-bootstrap";
import { MDBBtn } from "mdbreact";
import DownloadLink from "react-download-link";
const About = () => {
  return (
    <section id="about">
      <Container>
        <h2 className="text-center" data-aos="fade-left">
          <span>About</span> Me
        </h2>
        <hr />
        <Row>
          <Col>
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/Q0azZ7n696Y"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h1 className="text-center">Download My Resume</h1>
            <div className="text-center">
              <DownloadLink
                label="Resume"
                filename="./files/cv.pdf"
                exportFile={() => "My cached data"}
                className="btn btn-warning"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
