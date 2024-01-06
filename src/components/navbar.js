import React from "react";

class Navbar extends React.Component{
    render(){
        return  <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{ position : 'fixed', width : '100%', backgroundColor : 'white'}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{fontWeight : 'bold'}}>Mounir Badlis</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#about_me">About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#projects">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#skills">Skills And Experiance</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    }
}

export default Navbar;