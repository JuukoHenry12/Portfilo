//import { Container, Row, Col,Button,Image } from "react-bootstrap";

import Typed from "react-typed";
const ProductDescription = () => {
  return (
    <div className="headerWraper">
      <div className="maininfo">
        <h2>Web development and mobile application development</h2>
        <h2>Data analyst</h2>
        <div>
          <Typed
            className="typed-text"
            strings={[
              "Data analysis",
              "Web development",
              "Mobile application devlopment",
              "Video Editing",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </div>
        <div>
          <li>
            <a href="#" className="contactme">
              {" "}
              Contact me
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
