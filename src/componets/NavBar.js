//import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/images/logo-min.png";
//import { LinkContainer } from "react-router-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from  '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from "react-router-hash-link";
const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <p className="logo">Software Engineer</p>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
         <FontAwesomeIcon  icon={faBars}
           style={{color:"white"}}
         />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Service
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                how i work
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Portfilo
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                contact me
              </a>
            </li>
          </ul>
        </div>
      </div> 
    </nav>
  );
};

export default NavBar;
