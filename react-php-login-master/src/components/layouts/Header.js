import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div>
      <div className="container-fluid bg-dark text-white-50 py-2 px-0 d-none d-lg-block">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="fa fa-phone-alt me-2"></small>
              <small></small>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <small className="far fa-envelope-open me-2"></small>
              <small></small>
            </div>
            
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center">
              
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5">
        <a href="index.html" className="navbar-brand d-flex align-items-center">
          <h1 className="m-0">
            <img
              className="img-fluid me-3"
              src="img/icon/icon-02-primary.png"
              alt=""
            />
            Insure
          </h1>
        </a>
       
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <a href="#about" className="nav-item nav-link">
              About Us
            </a>
            <a href="#service" className="nav-item nav-link">
              Our Services
            </a>
            <div className="nav-item dropdown">
             
              <div className="dropdown-menu bg-light border-0 m-0">
              
              </div>
            </div>
            
          </div>
        </div>
        <a href="/login" className="btn btn-primary px-3 d-none d-lg-block ">
          Login 
        </a>  
        <a href="/signup" className="btn btn-info px-3 d-none d-lg-block ml-3">
          Sign up 
        </a>
      </nav>
    </div>
  );
}

export default Header;
