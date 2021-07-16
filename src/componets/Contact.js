import { Container, Row, Col } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
const Contact = () => {
  return (
    <div id="contact">
      <section>
        <Container>
          <h2 className="text-center" data-aos="fade-left">
            <span>Contact</span> Me
          </h2>
          <hr />
          <Row>
            <Col md="6">
              <h2 data-aos="fade-left">
                <span class="highlight">Get</span> in touch
              </h2>
              <ul class="ul-address">
                <li>Kampala, Uganda</li>
                <li>
                  <i class="pe-7s-phone"></i>
                  Mobile1 - +(256) 0786883492
                  <br />
                  Mobile2 - +(256) 0708855834
                </li>
                <li>
                  <i class="pe-7s-mail"></i>
                  Email
                  <br />
                  <a href="mailto:info@pahappa.com">juukohenry23@gmail.com</a>
                </li>
              </ul>
            </Col>
            <Col md="6">
              <h2>
                <span class="highlight">Social </span>Media
              </h2>
              <a href="#!" className="fb-ic mr-3">
                <MDBIcon size="lg" fab icon="github-f" />
              </a>
              <a href="#!" className="tw-ic mr-3">
                <MDBIcon size="lg" fab icon="linkedin" />
              </a>
              <a href="#!" className="ins-ic mr-3">
                <MDBIcon size="lg" fab icon="instagram" />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
