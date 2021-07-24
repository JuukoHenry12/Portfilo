import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from  '@fortawesome/free-solid-svg-icons'
import { HashLink as Link } from "react-router-hash-link";
import {Button} from  "react-bootstrap"
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
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
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Experince
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                projects
              </a>
            </li>
            <button>Resume</button>
          </ul>
        </div>
      </div> 
    </nav>
  );
};

export default NavBar;
