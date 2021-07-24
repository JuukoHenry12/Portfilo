import {Container,Row,Col} from 'react-bootstrap'
const productfeature = () => {
  return (
     <div id="feature">
       <Container>
       <h2 className="text-center" data-aos="fade-left">
           <span>Programming skils </span>
          </h2>
          <hr />
           
          <Row>
            <Col sm="6">
            <ul class="ul-contact" data-aos="fade-right">
               <li>Mobile application developement(React native)</li>
               <li>Frontend Developer(React,HTML,CSS,Typescript)</li>
               <li>Server Side (Node.js (Express,GraphQL,Django(python),PHP(Laravel))</li>
              
          </ul>
            </Col>

            <Col sm="6">
              <ul class="ul-contact" data-aos="fade-left">
              <li>Data Analyst(R Programming,Python(Jupiter NooteBook,Pandas))</li>
               <li>Dev Ops</li>
               <li>Project Documentation</li>
               <li>Googling</li>
              </ul>
            </Col>
          </Row>
       </Container>
     </div>
  );
}

export default productfeature;