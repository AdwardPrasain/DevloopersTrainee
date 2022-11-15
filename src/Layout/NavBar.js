import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
function NavBar() {
  return (
    <div>
      <nav className='nav'>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/traineedetails" className="nav-link">Trainee Details</Link>
      <Link to="/createcv" className="nav-link">Create CV</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/TraineePrint" className="nav-link">Print Trainee</Link>
      <Link to="/EduDetails" className="nav-link">Education Details</Link>
      <Link to="/ViewCV" className="nav-link">View CV</Link>
      <Link to="/createLog" className="nav-link">Create Log</Link>
      <Link to="/viewLog" className="nav-link">View Log</Link>
    </nav>
    </div>
  )
}

export default NavBar