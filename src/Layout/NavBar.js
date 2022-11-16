import React from 'react'
import './NavBar.css';
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div>
      <div className="nav">
       <li className="list">
       <Link to="/login" className="nav-link">Login</Link>
      <Link to="/traineedetails" className="nav-link">Trainee Details</Link>
      <Link to="/createcv" className="nav-link">Create Cv</Link>
      <Link to="/edudetails" className="nav-link">Education Details</Link>
      <Link to="/logdetails" className="nav-link">Log </Link>
      <Link to="/printcertificate" className="nav-link">Certificates </Link>
      {/* <Link to="/logincontext" className="nav-link">context</Link> */}
     <Link to="/printtraineedetails" className="nav-link">Print Trainee Details </Link> 
     <Link to="/viewcv" className="nav-link">View Cv </Link>
       </li>
      </div>

    </div>
  )
}

export default NavBar
