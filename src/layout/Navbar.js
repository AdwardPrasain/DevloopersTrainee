import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Nav">

        <div className="container">
          <Link className="nav" to="/">
            Home
          </Link>
          <Link className="nav" to="/Login">
            Login
          </Link> 

          <Link className="nav" to="/trainee">
            Trainee Details
          </Link>

          <Link className="nav" to="/EduDetails">
            Education Details
          </Link>
          <Link className="nav" to="Print">
            Print Trainee
          </Link>

          <Link className="nav" to="createCv">
            CreateCv
          </Link>

          <Link className="nav" to="/Cv">
            Cv
          </Link>
         
          <Link className="nav" to="Log">
            Log
          </Link>
          <Link className="nav" to="LogTable">
            LogTable
          </Link>

          <Link className="nav" to="/interncertificate">
            Certificate
          </Link>
          
        </div>
        {/* <div className="down">
</div> */}
      </div>


      
  
  );
}

export default Navbar;
