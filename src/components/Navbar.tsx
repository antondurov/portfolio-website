import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar" role="navbar">
        <Link className="navbar-page" to="/">Home</Link>
        <Link className="navbar-page" to="/about">About</Link>
        <Link className="navbar-page" to="/contact">Contact</Link>
        <Link className="navbar-page" to="/projects">Projects</Link>
        <Link className="navbar-page" to="/cv">CV</Link>
      </div>
    </>
  );
}

export default Navbar;
