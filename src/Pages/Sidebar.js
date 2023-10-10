import React from 'react'
import logo from "../Assets/lgo.webp"
import dash from "../Assets/d.jpg"
import service from "../Assets/s.png"
import pet from "../Assets/pet.webp"
import logout1 from "../Assets/logout.png"
import { UseAuth } from "../component/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

function Sidebar() {
  const { currentUser, logout } = UseAuth();
	const navigate = useNavigate();

	async function handleLogout() {
		try {
			await logout();
			navigate("/");
			localStorage.removeItem("user");
		} catch (error) {
			console.log(error);
		}
	}
  return (
    <div className="sidebar">
      <div className="logo-details">
        <Link to="/dashboard"><img style={{ marginTop: '16px', borderRadius: '10px' }} height='70px' src={logo} alt="logo" /></Link>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#" className="active">
            <i className="bx bx-grid-alt"><img style={{ marginTop: '6px',borderRadius:'20px'}} width='20px' height='20px' src={dash} alt="icon" /></i>
            <Link to="/dashboard"><span className="links_name">Dashboard</span></Link>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-box"><img style={{ marginTop: '6px',borderRadius:'20px'}} width='20px' height='20px' src={pet} alt="icon" /></i>
            <Link to="/petmanagement"><span className="links_name">Pet Management</span></Link>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-list-ul"><img style={{ marginTop: '6px',borderRadius:'20px'}} width='20px' height='20px' src={service} alt="icon" /></i>
            <Link to="/services"><span className="links_name">Service List</span></Link>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-list-ul"><img style={{ marginTop: '6px',borderRadius:'20px'}} width='20px' height='20px' src={logout1} alt="icon" /></i>
            <Link to="/"><span onClick={handleLogout} className="links_name">Logout</span></Link>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar